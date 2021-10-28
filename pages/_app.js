import { ThemeProvider } from "styled-components";
import { GlobalStyle } from '../Global'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
