import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const GlobalStyle = createGlobalStyle`
html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
button,
[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
input,
label,
select,
button,
textarea
{
	margin:0;
	border:0;
	padding:0;
	display:inline-block;
	vertical-align:middle;
	white-space:normal;
	line-height:1;
}
input:focus{
	outline:0;
}
input,
textarea
{
	-webkit-box-sizing:content-box;
	-moz-box-sizing:content-box;
	box-sizing:content-box;
}
p {
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding: 0;
  margin: 0;
}
ul,
li,
a {
    text-decoration: none;
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
