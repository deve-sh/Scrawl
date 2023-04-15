import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const root = document.getElementById("root") as HTMLElement;
const rootForApp = createRoot(root);

rootForApp.render(<App />);
