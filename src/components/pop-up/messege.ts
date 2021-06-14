import { createAndAppendHtmlElement } from "../utils/add-element-function";
import * as Const from "../utils/const";

export class Messege {
    private _back: HTMLElement;
    private _wrapper:  HTMLElement;
    private _name: HTMLInputElement;
    private _email: HTMLInputElement;
    private _fondSelector: HTMLInputElement;
    private _messege: HTMLInputElement;
    private _button: HTMLButtonElement;

    init() {
        this._back = document.createElement("div");
        this._back.classList.add("pop_up__back");

        this._wrapper = createAndAppendHtmlElement(this._back, "div", "pop_up__wrapper");
        this._wrapper.classList.add("messege")
        createAndAppendHtmlElement(this._wrapper, "div", "pop_up__header", "make your donation");

        this._name = createAndAppendHtmlElement(this._wrapper, "input", "pop_up__nameinput");
        this._name.placeholder = "Name";
        this._email =  createAndAppendHtmlElement(this._wrapper, "input", "pop_up__emailinput");
        this._email.placeholder = "Email";

        this._fondSelector = createAndAppendHtmlElement(this._wrapper, "div", "pop_up__fondinput");
        this._fondSelector.classList.add("messege__fondinput");
        const OUTPUT = createAndAppendHtmlElement(this._fondSelector, "output", "pop_up__fondOutput");
        OUTPUT.value = "Choose a Fond"
        const SELECT = createAndAppendHtmlElement(this._fondSelector, "div", "pop_up__fondSelect");
        createAndAppendHtmlElement(SELECT, "button", "pop_up__fondSelectOption", Const.condor);
        createAndAppendHtmlElement(SELECT, "button", "pop_up__fondSelectOption", Const.Awesome_Africa);
        createAndAppendHtmlElement(SELECT, "button", "pop_up__fondSelectOption", Const.Hao_Da);
        createAndAppendHtmlElement(SELECT, "button", "pop_up__fondSelectOption", Const.Coala_Country);

        this._messege = createAndAppendHtmlElement(this._fondSelector, "textarea", "messege__textarea");

        this._button = createAndAppendHtmlElement(this._wrapper, "button", "pop_up__button", "complite");
    }

    get messege(): HTMLElement {
        return this._back;
    }
}