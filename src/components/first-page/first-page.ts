import { createAndAppendHtmlElement } from "../utils/add-element-function";
import * as Const from "../utils/const";

export class FirstPage {
    private _wrapper:HTMLElement;
    private _top:HTMLElement;
    private _bottom:HTMLElement;
    private _mapButton:HTMLElement;
    private _donatoionButton:HTMLElement;

    init() {
        this.drawWrapper();
        this.drawTop();
        this.drawBottom();
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
        createAndAppendHtmlElement(this._mapButton,"div","button_arrow");
    }

    private drawBottom() {
        const WRAPPER = createAndAppendHtmlElement(this._bottom,"div","donation__wrapper");
        createAndAppendHtmlElement(WRAPPER,"div","donation__head",Const.donationHead);
        WRAPPER.appendChild(this.drawBlock(1));
        WRAPPER.appendChild(this.drawBlock(2));
        WRAPPER.appendChild(this.drawBlock(3));

        this._donatoionButton = createAndAppendHtmlElement(WRAPPER,"button","donation__button",Const.donationButton);
        createAndAppendHtmlElement(this._donatoionButton,"div","button_arrow");

        const PICH = createAndAppendHtmlElement(WRAPPER,"div","care");
        createAndAppendHtmlElement(PICH,"h1","care__text",Const.careText)
    }

    private drawBlock(index:number):HTMLElement {
        const BLOCK = document.createElement("div");
        BLOCK.classList.add("donation__block");
        let innerText;
        switch(index) {
            case 1:
                innerText = Const.donation_1;
                break;
            case 2:
                innerText = Const.donation_2;
                break;
            case 3:
                innerText = Const.donation_3;
                break;
        }

        const TOP = createAndAppendHtmlElement(BLOCK,"div","donation__block_top");
        
        createAndAppendHtmlElement(TOP,"div","donation__block_top-number",innerText.number);
        createAndAppendHtmlElement(TOP,"div","donation__block_top-line");

        const IMG = createAndAppendHtmlElement(BLOCK,"img","donation__block_img");
        IMG.src = `${require(`./../../assets/images/pay_and_feed_${index}.png`).default}`;

        const TEXT = createAndAppendHtmlElement(BLOCK,"div","donation__block_text");
        const ICON = createAndAppendHtmlElement(TEXT,"img","donation__block_text-img");
        ICON.src = `${require(`./../../assets/icons/donation_icon_${index}.svg`).default}`;
        createAndAppendHtmlElement(TEXT,"p","donation__block_text-article",innerText.article);
        createAndAppendHtmlElement(TEXT,"p","donation__block_text-text",innerText.text);

        return BLOCK;
    }

    get firstPage():HTMLElement {
        return this._wrapper;
    }
}