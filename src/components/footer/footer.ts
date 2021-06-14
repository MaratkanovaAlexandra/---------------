import { createAndAppendHtmlElement } from "../utils/add-element-function";
import { FooterEvent } from "./footer-events";
import * as Const from "../utils/const";

export class Footer {
    private _footer: HTMLElement;
    private _button: HTMLElement;

    init() {
        this.drawFooter();
        this.drawTop();
        this.drawBottom();

        const EVENT = new FooterEvent(this._footer);
        EVENT.init();
    }
    private drawFooter() {
        this._footer = document.createElement("footer");
        this._footer.classList.add("footer");
    }

    private drawTop() {
        const TOP = createAndAppendHtmlElement(this._footer,"div","footer__top");

        const LOGO = createAndAppendHtmlElement(TOP,"div","footer__top_logos");
        createAndAppendHtmlElement(LOGO,"div","footer__top-zoo");
        createAndAppendHtmlElement(LOGO,"div","footer__top-yem");
        createAndAppendHtmlElement(LOGO,"div","footer__top-rs");

        const NAV = createAndAppendHtmlElement(TOP,"div","footer__top_nav");
        createAndAppendHtmlElement(NAV,"div","footer__top_nav-item",Const.aboutUs);
        createAndAppendHtmlElement(NAV,"div","footer__top_nav-item",Const.map);
        createAndAppendHtmlElement(NAV,"div","footer__top_nav-item",Const.zoos);
        createAndAppendHtmlElement(NAV,"div","footer__top_nav-item",Const.contactUs);

        this._button =  createAndAppendHtmlElement(TOP,"button","footer__top_button",Const.footerButton);
        createAndAppendHtmlElement(this._button,"div","button_arrow");
    }

    private drawBottom() {
        const BOTTOM = createAndAppendHtmlElement(this._footer,"div","footer__bottom");

        const LINKS =  createAndAppendHtmlElement(BOTTOM,"div","footer__bottom_links");
        createAndAppendHtmlElement(LINKS,"div","footer__bottom_links-item",Const.firstLinc);
        createAndAppendHtmlElement(LINKS,"div","footer__bottom_links-item",Const.secondtLinc);
        createAndAppendHtmlElement(LINKS,"div","footer__bottom_links-item",Const.trirdLinc);

        const SOCIAL_NETWORKS =  createAndAppendHtmlElement(BOTTOM,"div","header__social_networks");

        const YOUTUBE = createAndAppendHtmlElement(SOCIAL_NETWORKS,"a","header__social_networks-youtube");
        YOUTUBE.href = "https://m.youtube.com/";
        const INST = createAndAppendHtmlElement(SOCIAL_NETWORKS,"a","header__social_networks-instagram");
        INST.href = "https://www.instagram.com/";
        const FACEBOOK = createAndAppendHtmlElement(SOCIAL_NETWORKS,"a","header__social_networks-facebook");
        FACEBOOK.href = "https://facebook.com/";
    }

    get footer():HTMLElement {
        return this._footer;
    }
}