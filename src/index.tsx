import * as React from "react";
import { render } from "react-dom";
import "./normalize.css";
import "./index.css";

import App from "./Components/App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
