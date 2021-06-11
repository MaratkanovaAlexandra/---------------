import { createAndAppendHtmlElement } from "../utils/add-element-function";
import * as Const from "../utils/const";

export class Header{
    private _header:HTMLElement;
    private _items: HTMLElement;
    private _aboutUs: HTMLElement;
    private _map: HTMLElement;
    private _zoos: HTMLElement;
    private _contactUs: HTMLElement;
    private _staff: HTMLElement;
    
    init() {
        this.drawHeader();
        this.drawIcon();
        this.drawNav();
        this.drawSocialNetworks();
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
        this._aboutUs = createAndAppendHtmlElement(UL,"li","header__nav_ul-item",Const.aboutUs);
        this._map = createAndAppendHtmlElement(UL,"li","header__nav_ul-item",Const.map);
        this._zoos = createAndAppendHtmlElement(UL,"li","header__nav_ul-item",Const.zoos);
        this._contactUs = createAndAppendHtmlElement(UL,"li","header__nav_ul-item",Const.contactUs);
        this._staff = createAndAppendHtmlElement(UL,"li","header__nav_ul-item",Const.staff);

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