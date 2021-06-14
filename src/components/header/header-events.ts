import { Header } from "./header"

export class HeaderEvents {
    private _header: Header;

    constructor(header:Header){
        this._header = header;
    }

    init() {
        this._header.header.addEventListener("click", () => {
            const target = event.target as HTMLElement;
            if(target.innerHTML === "about") {
                (document.querySelector(".active") as HTMLElement).classList.remove("active");
                this._header._state.getFirstPage();
                target.classList.add("active");
            }
            if(target.innerHTML === "staff") {
                (document.querySelector(".active") as HTMLElement).classList.remove("active");
                this._header._state.getStaff();
                target.classList.add("active");
            }
        })
    }
}