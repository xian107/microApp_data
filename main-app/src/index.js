import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import microApp from "@micro-zoe/micro-app";

microApp.start();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
