import { createGlobalStyle } from 'styled-components'


export const colors = {
  blue: `#125688`,
  offwhite: `#fafafa`,
  lightgrey: `#EDEEED`,
}


export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'billabongregular';
      src: url('https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot');
      src: url('https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot?#iefix') format('embedded-opentype'),
          url('https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.woff') format('woff'),
          url('https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.ttf') format('truetype'),
          url('https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.svg#billabongregular') format('svg');
      font-weight: normal;
      font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: sans-serif;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }


  p {
    font-size: 1.6rem;
    line-height: 1.5;
  }
`
