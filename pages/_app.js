import { createGlobalStyle, ThemeProvider } from "styled-components";
import { color } from '../utilities'
const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  background: ${color.pink_vivid_300};
  display:block;
  height: 100%;
  max-width: 640px;
  margin:0 auto;
  padding: 0;
}

body{
  background-color:#fafafa;
  min-height:100vh;
  padding: 1rem;
  margin-top:0;
  font-family:Verdana;
}
`;

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
