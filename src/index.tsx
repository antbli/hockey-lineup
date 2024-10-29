import React from "react";
import ReactDOM from "react-dom/client";
import Lineups from "./Lineups";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Lineups />
  </React.StrictMode>
);
