import { type AppType } from "next/dist/shared/lib/utils";
import HeadMetaTags from "../components/HeadMetaTags";
import Header from "../layout/Header";
import "../styles/globals.css";
import { wrapper } from "../store/store";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
        <>
          <HeadMetaTags/>
          <Header>
            <Component {...pageProps} />
          </Header>
        </>
    );
};

export default wrapper.withRedux(MyApp);
