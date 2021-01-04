import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createGlobalStyle } from 'styled-components'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// eslint-disable-next-line
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 16px;
    font-family: Alegreya, serif;
  }
`

if (module.hot) {
  module.hot.accept(App)
}