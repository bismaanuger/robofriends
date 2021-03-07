import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import "./index2.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorkerRegistration.unregister();

reportWebVitals();
