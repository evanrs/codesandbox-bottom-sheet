import { render } from "react-dom";

import "./global";
import { App } from "./app";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
