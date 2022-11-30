import "../styles/globals.css";
import Layout from "./layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </Layout>
  );
}

export default MyApp;
