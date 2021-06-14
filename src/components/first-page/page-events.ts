import { Donation } from "../pop-up/donation";

export class PageEvent {
    private _wrapper: HTMLElement;

    constructor(wrapper: HTMLElement) {
        this._wrapper= wrapper;
    }

    init() {
        this._wrapper.addEventListener("click", () => {
            const target = event.target as HTMLElement;
            if(target.classList.contains("firstPage__wrapper_button") || target.classList.contains("donation__button"))
                this.addDontion();
        });
    }

    private addDontion() {
        const ROOT = document.querySelector(".root");
        const DON = new Donation();
        DON.init();
        document.body.appendChild(DON.donation);
        document.body.style.overflow = "hidden";
    }
}