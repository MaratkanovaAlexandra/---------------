import "./styles/main.scss";

import { Header } from "./components/header/header";
import { FirstPage } from "./components/first-page/first-page";
import { Footer } from "./components/footer/footer";
import { Staff } from "./components/staff/staff";
import { State } from "./components/utils/state-changer";
 
const ROOT = document.querySelector(".root");
const STAFF = new Staff();
STAFF.init();

const FIRSTPAGE = new FirstPage();
FIRSTPAGE.init();

const FOOTER = new Footer();
FOOTER.init();

const HEADER = new Header(new State(FIRSTPAGE.firstPage, STAFF.staff));
HEADER.init();

ROOT.appendChild(HEADER.header);
ROOT.appendChild(FIRSTPAGE.firstPage);
ROOT.appendChild(FOOTER.footer);