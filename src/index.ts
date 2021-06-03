import "./styles/main.scss";

import { Header } from "./components/header/header";
import { FirstPage } from "./components/first-page/first-page";
import { Footer } from "./components/footer/footer"

const ROOT = document.querySelector(".root");
const HEADER = new Header;
HEADER.init();

const FIRSTPAGE = new FirstPage();
FIRSTPAGE.init();

const FOOTER = new Footer();
FOOTER.init();

ROOT.appendChild(HEADER.header);
ROOT.appendChild(FIRSTPAGE.firstPage);
ROOT.appendChild(FOOTER.footer);
