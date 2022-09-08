import Layout from "../global/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="content">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
