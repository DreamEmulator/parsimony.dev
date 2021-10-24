import { useContext } from "react";
import StepContext from "../../providers/StepContext";

const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw Error("Wrap your step with `<Steps />`");
  } else {
    return context;
  }
};

export default useStep;
