export class MessegeEvent {
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
        const MESSEGE = document.querySelector(".messege__textarea") as HTMLInputElement;

        if(NAME.validity.valid &&
           EMAIL.validity.valid &&
           FOND.value != "Choose a Fond" &&
           MESSEGE.validity.valid) {
 
            const body = {
                name: NAME.value,
                email: EMAIL.value,
                fondName: FOND.value,
                amount: MESSEGE.value
            }
           
            console.log(body)

            fetch("http://localhost:8080/Messeges", {
               method: "POST",
               body: JSON.stringify(body)
            });
            const WRAPPER = document.querySelector(".pop_up__back") as HTMLElement;
            WRAPPER.style.display = "None";
        }
    }
}