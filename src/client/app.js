import * as React from "react";
import ReactDOM from "react-dom";
// import HelloWorld from "./components/hello";
import Home from "./components/home";

import "./style.scss";

function App() {
    return <Home />;
}

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
