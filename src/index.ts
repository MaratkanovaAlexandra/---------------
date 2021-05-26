import "./styles/main.scss";

import { Header } from "./components/header";
import { FirstPage } from "./components/first-page";

const ROOT = document.querySelector(".root");
const HEADER = new Header;
HEADER.init();
const FIRSTPAGE = new FirstPage();
FIRSTPAGE.init();

ROOT.appendChild(HEADER.header);
ROOT.appendChild(FIRSTPAGE.firstPage);
