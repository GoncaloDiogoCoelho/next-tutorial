import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import "../styles/globals.css";
import "../styles/layout.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
