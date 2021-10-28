import { createGlobalStyle } from 'styled-components';
import { color } from './utilities';


export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'oregon_light';
    src: url('/fonts/oregon-light.woff2') format('woff2');
         
    font-weight: normal;
    font-style: normal;

}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  border: 0;
}
html{
  overflow-x:hidden;
}

body{

  font-family: 'oregon_light';  
  letter-spacing:0.09rem;
  /* line-height: 1.5; */
  font-size: 0.875rem;
  overflow-x:hidden;
  
}
hr {
  border: none;
  border-top: 1px solid ${color.grey_400};
}
h1,
h2,
h3,
h4,
h5 {
  
  ${'' /* text-transform: capitalize; */}
  /* line-height: 1.25; */
  margin-bottom: 0.75rem;
}
h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}
h4 {
  font-size: 1.25rem;
}
h5 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: ${color.grey_700};
}
ul{
  list-style-type: none;
 
}
a{
  text-decoration:none;
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}

`;


