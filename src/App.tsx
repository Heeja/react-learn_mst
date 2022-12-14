import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";

import Header from "./components/header";
import { whiteTheme, darkTheme } from "./theme";

import Home from "./Routes/Home";
import Coins from "./Routes/crypto/Coins";
import Cointicker from "./Routes/crypto/Cointicker";
import CoinChart from "./Routes/crypto/CoinChart";
import CoinPrice from "./Routes/crypto/CoinPrice";

import Todos from "./Routes/todos/Todos";

import Trello from "./Routes/trello/Trello";

import Noflix from "./Routes/flix/Noflix";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  line-height: 1.2;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  border-color: ${(props) => props.theme.textColor};
}
a {
  text-decoration:none;
  color:inherit;
}
svg {
  color: ${(props) => props.theme.textColor};
}
`;

function App() {
  const queryClient = new QueryClient();
  const [themeState, setTheme] = useState(false);

  return (
    <ThemeProvider theme={themeState ? darkTheme : whiteTheme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header themeState={themeState} setTheme={setTheme} />

          <GlobalStyle />
          <RecoilRoot>
            <Routes>
              <Route path="/" element={<Home setTheme={setTheme} />} />

              <Route path="/coins" element={<Coins />} />
              <Route
                path="/coins/:coinId/*"
                element={<Cointicker themeState={themeState} />}
              >
                <Route
                  path="chart"
                  element={<CoinChart coinId={""} themeState={themeState} />}
                />
                <Route path="price" element={<CoinPrice coinId={""} />} />
              </Route>

              <Route path="/todos" element={<Todos />} />

              <Route path="/Trello" element={<Trello />} />

              <Route path="/Noflix" element={<Noflix />} />
            </Routes>
          </RecoilRoot>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default React.memo(App);
