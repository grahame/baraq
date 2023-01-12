import "core-js/es/map";
import "core-js/es/set";
import "core-js/es/symbol";
import "core-js/es/promise";
import "core-js/es/symbol/iterator";
import "core-js/es/object/assign";
import "core-js/es/string/replace-all";
import "raf/polyfill";

import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
