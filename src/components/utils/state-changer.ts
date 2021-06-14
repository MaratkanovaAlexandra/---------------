import { FirstPage } from "../first-page/first-page";
import { Staff } from "../staff/staff";

export class State {
    private _firstPage: HTMLElement;
    private _staff: HTMLElement;

    constructor(firstPage: HTMLElement, staff: HTMLElement) {
        this._firstPage = firstPage;
        this._staff = staff;
    }

    getFirstPage() {
        const ROOT = document.querySelector(".root");
        const FOOTER = ROOT.lastElementChild;
        ROOT.removeChild(ROOT.lastChild);
        ROOT.removeChild(ROOT.lastChild);
        ROOT.appendChild(this._firstPage);
        ROOT.appendChild(FOOTER);
    }

    getStaff() {
        const ROOT = document.querySelector(".root");
        const FOOTER = ROOT.lastElementChild;
        ROOT.removeChild(ROOT.lastChild);
        ROOT.removeChild(ROOT.lastChild);
        ROOT.appendChild(this._staff);
        ROOT.appendChild(FOOTER);
    }
}