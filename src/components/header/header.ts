import { createAndAppendHtmlElement } from "../utils/add-element-function";
import { State } from "./../utils/state-changer";
import { HeaderEvents } from "./header-events";
import * as Const from "../utils/const";

export class Header{
    private _header:HTMLElement;
    private _items: HTMLElement;
    private _staff: HTMLElement;
    _state: State;
    private _aboutUs: any;

    constructor(state: State) {
        this._state = state;
    }
    
    init() {
        this.drawHeader();
        this.drawIcon();
        this.drawNav();
        this.drawSocialNetworks();

        const EVENTS = new HeaderEvents(this);
        EVENTS.init();
    }

    private drawHeader() {
        this._header = document.createElement("header");
        this._header.classList.add("header");

        this._items = createAndAppendHtmlElement(this._header,"div","header__items");
    }

    private drawIcon() {
        createAndAppendHtmlElement(this._items,"div","header__logo");
    }

    private drawNav() {
        const NAV =  createAndAppendHtmlElement(this._items,"nav","header__nav");
        const UL = createAndAppendHtmlElement(NAV,"ul","header__nav_ul");
        this._aboutUs =createAndAppendHtmlElement(UL,"li","header__nav_ul-item",Const.aboutUs);
        createAndAppendHtmlElement(UL,"li","header__nav_ul-item",Const.map);
        createAndAppendHtmlElement(UL,"li","header__nav_ul-item",Const.zoos);
        createAndAppendHtmlElement(UL,"li","header__nav_ul-item",Const.contactUs);
        createAndAppendHtmlElement(UL,"li","header__nav_ul-item",Const.staff);

        this._aboutUs.classList.add("active");
    }

    private drawSocialNetworks() {
        const SOCIAL_NETWORKS =  createAndAppendHtmlElement(this._items,"div","header__social_networks");

        const YOUTUBE = createAndAppendHtmlElement(SOCIAL_NETWORKS,"a","header__social_networks-youtube");
        YOUTUBE.href = "https://m.youtube.com/";
        const INST = createAndAppendHtmlElement(SOCIAL_NETWORKS,"a","header__social_networks-instagram");
        INST.href = "https://www.instagram.com/";
        const FACEBOOK = createAndAppendHtmlElement(SOCIAL_NETWORKS,"a","header__social_networks-facebook");
        FACEBOOK.href = "https://facebook.com/";
    }

    get header():HTMLElement {
        return this._header;
    }
}