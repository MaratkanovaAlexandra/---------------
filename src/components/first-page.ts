import { createAndAppendHtmlElement } from "./add-element-function";
import * as Const from "./const";

export class FirstPage {
    private _wrapper:HTMLElement;
    private _top:HTMLElement;
    private _bottom:HTMLElement;
    private _mapButton:HTMLElement;


    init() {
        this.drawWrapper();
        this.drawTop();
    }
    
    private drawWrapper() {
        this._wrapper = document.createElement("main");

        this._top = createAndAppendHtmlElement(this._wrapper,"section", "firstPage");
        this._bottom = createAndAppendHtmlElement(this._wrapper,"section", "donation");
    }

    private drawTop() {
        const WRAPPER = createAndAppendHtmlElement(this._top,"div","firstPage__wrapper");
        createAndAppendHtmlElement(WRAPPER,"p","firstPage__wrapper_article", Const.article);
        createAndAppendHtmlElement(WRAPPER,"p","firstPage__wrapper_text", Const.articleText);
        this._mapButton = createAndAppendHtmlElement(WRAPPER,"button","firstPage__wrapper_button", Const.mapBUttonText);
        const Img = createAndAppendHtmlElement(this._mapButton,"div","button_arrow");
        //Img.src = "../assets/icons/Union.svg";
    }

    get firstPage():HTMLElement {
        return this._wrapper;
    }
}