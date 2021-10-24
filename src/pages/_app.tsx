import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";
import StyleProvider from "../providers/StyleProvider";
import Layout from "../components/app/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyleProvider>
  );
}
