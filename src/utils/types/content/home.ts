// To parse this data:
//
//   import { Convert, Home } from "./file";
//
//   const home = Convert.toHome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Home {
  Banner: Banner;
  Values: Values;
  Definition: Definition;
  Steps: Step[];
  Skills: HomeSkills;
  Testimonials: Testimonial[];
  Strategy: Strategy;
}

export interface Banner {
  Slogan: string;
  Pitch: string;
}

export interface Definition {
  Word: string;
  Definition: string;
}

export interface HomeSkills {
  CTA: Cta;
  Skills: SkillsSkills;
}

export interface Cta {
  Title: string;
  Link: string;
  URL: string;
}

export interface SkillsSkills {
  First: Step;
  Second: Step;
  Third: Step;
  Fourth: Step;
}

export interface Step {
    Title: string;
    Body: string;
}

export interface Strategy {
    Title: string;
    Steps: Step[];
}

export interface Testimonial {
    Text: string;
    Image: string;
    Role: string;
    Name: string;
}

export interface Values {
    What: Step;
    Why: Step;
    How: Step;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toHome(json: string): Home {
    return cast(JSON.parse(json), r("Home"));
  }

  public static homeToJson(value: Home): string {
    return JSON.stringify(uncast(value, r("Home")), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any = ""): never {
  if (key) {
    throw Error(
      `Invalid value for key "${key}". Expected type ${JSON.stringify(
        typ
      )} but got ${JSON.stringify(val)}`
    );
  }
  throw Error(
    `Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`
  );
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ""): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue("array", val);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue("Date", val);
    }
    return d;
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any
  ): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue("object", val);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key)
        ? val[key]
        : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, prop.key);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key);
      }
    });
    return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val);
  }
  if (typ === false) return invalidValue(typ, val);
  while (typeof typ === "object" && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers")
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems")
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty("props")
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return {arrayItems: typ};
}

function u(...typs: any[]) {
    return {unionMembers: typs};
}

function o(props: any[], additional: any) {
    return {props, additional};
}

function m(additional: any) {
    return {props: [], additional};
}

function r(name: string) {
    return {ref: name};
}

const typeMap: any = {
    "Home": o([
        {json: "Banner", js: "Banner", typ: r("Banner")},
        {json: "Values", js: "Values", typ: r("Values")},
        {json: "Definition", js: "Definition", typ: r("Definition")},
        {json: "Steps", js: "Steps", typ: a(r("Step"))},
        {json: "Skills", js: "Skills", typ: r("HomeSkills")},
        {json: "Testimonials", js: "Testimonials", typ: a(r("Testimonial"))},
        {json: "Strategy", js: "Strategy", typ: r("Strategy")},
    ], false),
    "Banner": o([
        {json: "Slogan", js: "Slogan", typ: ""},
        {json: "Pitch", js: "Pitch", typ: ""},
    ], false),
    "Definition": o([
        {json: "Word", js: "Word", typ: ""},
        {json: "Definition", js: "Definition", typ: ""},
    ], false),
    "HomeSkills": o([
        {json: "CTA", js: "CTA", typ: r("Cta")},
        {json: "Skills", js: "Skills", typ: r("SkillsSkills")},
    ], false),
    "Cta": o([
        {json: "Title", js: "Title", typ: ""},
        {json: "Link", js: "Link", typ: ""},
        {json: "URL", js: "URL", typ: ""},
    ], false),
    "SkillsSkills": o([
        {json: "First", js: "First", typ: r("Step")},
        {json: "Second", js: "Second", typ: r("Step")},
        {json: "Third", js: "Third", typ: r("Step")},
        {json: "Fourth", js: "Fourth", typ: r("Step")},
    ], false),
    "Step": o([
        {json: "Title", js: "Title", typ: ""},
        {json: "Body", js: "Body", typ: ""},
    ], false),
    "Strategy": o([
        {json: "Title", js: "Title", typ: ""},
        {json: "Steps", js: "Steps", typ: a(r("Step"))},
    ], false),
    "Testimonial": o([
        {json: "Text", js: "Text", typ: ""},
        {json: "Image", js: "Image", typ: ""},
        {json: "Role", js: "Role", typ: ""},
        {json: "Name", js: "Name", typ: ""},
    ], false),
    "Values": o([
        {json: "What", js: "What", typ: r("Step")},
        {json: "Why", js: "Why", typ: r("Step")},
        {json: "How", js: "How", typ: r("Step")},
    ], false),
};
