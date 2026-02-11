import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --gold: #c9a96e;
    --gold-light: #e4d5a0;
    --gold-dark: #8b6914;
    --burgundy: #722f37;
    --burgundy-deep: #4a1a1f;
    --burgundy-light: #9b4a52;
    --blush: #f5e6e0;
    --blush-light: #faf3f0;
    --cream: #fdf8f0;
    --ivory: #fffff0;
    --white: #ffffff;
    --charcoal: #2c2c2c;
    --warm-gray: #6b5b53;
    --soft-shadow: rgba(114, 47, 55, 0.08);
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
    color: var(--charcoal);
    background-color: var(--cream);
    line-height: 1.7;
    font-weight: 300;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 400;
    line-height: 1.2;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::selection {
    background: var(--gold-light);
    color: var(--burgundy-deep);
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--cream);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gold);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--gold-dark);
  }
`;

export default GlobalStyles;
