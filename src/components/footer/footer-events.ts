import { Messege } from "../pop-up/messege";

export class FooterEvent {
    private _wrapper: HTMLElement;

    constructor(wrapper: HTMLElement) {
        this._wrapper = wrapper;
    }

    init() {
        this._wrapper.addEventListener("click", () => {
            const target = event.target as HTMLElement;
            if (target.classList.contains("footer__top_button")) 
                this.showMessege();
        });
    }

    private showMessege() {
        const ROOT = document.querySelector(".root");
        const MESSEGE = new Messege();
        MESSEGE.init();
        document.body.appendChild(MESSEGE.messege);
        document.body.style.overflow = "hidden";
    }
}