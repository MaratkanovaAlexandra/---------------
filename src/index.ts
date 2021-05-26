import "./styles/main.scss";

import { Header } from "./components/header";

const ROOT = document.querySelector(".root");
const HEADER = new Header;
HEADER.init();

ROOT.appendChild(HEADER.header)
