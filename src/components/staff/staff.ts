import { createAndAppendHtmlElement } from "../utils/add-element-function";
import { StaffEvent } from "./staff-event";


export class Staff {
    private _wrapper: HTMLElement;

    init() {
        this._wrapper = document.createElement("div");
        this._wrapper.classList.add("staff");

        const BUTTONS = createAndAppendHtmlElement(this._wrapper, "div", "staff__buttons");
        createAndAppendHtmlElement(BUTTONS, "button", "staff__button", "Persons");
        createAndAppendHtmlElement(BUTTONS, "button", "staff__button", "Fonds");
        createAndAppendHtmlElement(BUTTONS, "button", "staff__button", "Donations");
        createAndAppendHtmlElement(BUTTONS, "button", "staff__button", "Messeges");

        const PERSON_ACTIVITY = createAndAppendHtmlElement(this._wrapper, "div", "staff__person");
        createAndAppendHtmlElement(PERSON_ACTIVITY, "p", "staff__person-text", "Choose a person");
        createAndAppendHtmlElement(PERSON_ACTIVITY, "input", "staff__person-input");
        createAndAppendHtmlElement(PERSON_ACTIVITY, "button", "staff__person-button","find");

        createAndAppendHtmlElement(this._wrapper, "div", "staff__output");

        const EVENT = new StaffEvent(this._wrapper);
        EVENT.init();
    }

    get staff(): HTMLElement {
        return this._wrapper;
    }
}