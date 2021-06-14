import { Donation } from "./donation";
import { Messege } from "./messege";

export class PopUpEvents {
    private _wrapper: HTMLElement;

    constructor(wrapper: HTMLElement) {
        this._wrapper = wrapper;
    }
    init() {
        this._wrapper.addEventListener("click", () => {
            const target = event.target as HTMLElement;
            if(target.classList.contains("pop_up__fondOutput"))
                this.chooseFond();
            if(target.classList.contains("pop_up__fondSelectOption"))
               this.chooseSelectOption(target); 
        })
    }

    private chooseFond() {
        const SELECT = document.querySelector(".pop_up__fondSelect") as HTMLElement;
        SELECT.style.display = "flex";
    }

    private chooseSelectOption(elem: HTMLElement) {
        const SELECT = document.querySelector(".pop_up__fondSelect") as HTMLElement;
        const OUTPUT = document.querySelector(".pop_up__fondOutput") as HTMLOutputElement;
        OUTPUT.value = elem.innerText;
        OUTPUT.style.color = "#000";
        SELECT.style.display = "none";
    }
}