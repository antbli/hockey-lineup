import React from "react";
import ReactDOM from "react-dom/client";
import Lineups from "./Lineups";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Lineups />
  </React.StrictMode>
);
