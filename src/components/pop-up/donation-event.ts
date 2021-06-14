import * as Const from "../utils/const";

export class DonationEvent {
    private _wrapper: HTMLElement;

    constructor(wrapper: HTMLElement) {
        this._wrapper = wrapper;
    }
     
    init() {
        this._wrapper.addEventListener("click", () => {
            const target = event.target as HTMLElement;
            if(target.classList.contains("pop_up__button"))
             this.complite();
        });
    }

    private complite() {
        const NAME = document.querySelector(".pop_up__nameinput") as HTMLInputElement;
        const EMAIL = document.querySelector(".pop_up__emailinput") as HTMLInputElement;
        const FOND = document.querySelector(".pop_up__fondOutput") as HTMLOutputElement;
        const AMOUNT = document.querySelector(".pop_up__amountinput") as HTMLInputElement;

        if(NAME.validity.valid &&
           EMAIL.validity.valid &&
           FOND.value != "Choose a Fond" &&
           AMOUNT.validity.valid) {
 
            const body = {
                name: NAME.value,
                email: EMAIL.value,
                fondName: FOND.value,
                amount: AMOUNT.value
            }
           
            console.log(body)

           fetch("http://localhost:8080/Donations", {
               method: "POST",
               body: JSON.stringify(body)
           });
        }
    }
}