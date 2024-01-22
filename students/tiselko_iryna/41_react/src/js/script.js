import React from "react";
import { createRoot } from "react-dom/client";
import Markup from "./Markup.js"

const root = createRoot(document.getElementById('root'));

root.render(
    React.createElement(Markup)
);
