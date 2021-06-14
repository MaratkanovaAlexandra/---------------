export class StaffEvent {
  private _wrapper: HTMLElement;

  constructor(wrapper: HTMLElement) {
    this._wrapper = wrapper;
  }

  init() {
    this._wrapper.addEventListener("click", () => {
        const target = event.target as HTMLElement;
        if(target.innerHTML === "Persons") 
          this.getPercons();
        if(target.innerHTML === "Fonds") 
          this.getFonds();
        if(target.innerHTML === "Donations") 
          this.getDonations();
        if(target.innerHTML === "Messeges") 
          this.getMesseges();
        if(target.innerHTML === "find")
          this.getPersonAtivity();
    });
  }
  private async getPersonAtivity() {
    this._wrapper.lastElementChild.innerHTML = "";
    (this._wrapper.lastElementChild as HTMLElement).style.height = "auto";
    const INPUT = (document.querySelector(".staff__person-input")as HTMLInputElement).value;
    const REQ = await fetch(`http://localhost:8080/People?name='${INPUT}'`);
    const ID = (await REQ.json())[0].id;
    this._wrapper.lastElementChild.innerHTML += `<h2>Donations</h2>`;
    const DONATIONS = await fetch(`http://localhost:8080/People/${ID}/Donations`);
    const RESP_DON = await DONATIONS.json();
    let i = 1;
    RESP_DON.forEach((obj:{name: string; email: string; fondName: string; amount:number;  date:string}) => {
        this.drawDonations(i, obj);
        i+=1;
    });
    this._wrapper.lastElementChild.innerHTML += `<h2>Messeges</h2>`;
    const MESSEGES = await fetch(`http://localhost:8080/People/${ID}/Messeges`);
    const RESP_MES = await MESSEGES.json();
    i = 1;
    RESP_MES.forEach((obj:{name: string; email: string; fondName: string; amount:number;  date:string}) => {
        this.drawDonations(i, obj);
        i+=1;
    });

  }

  private async getPercons() {
    this._wrapper.lastElementChild.innerHTML = "";
    (this._wrapper.lastElementChild as HTMLElement).style.height = "auto";
    const REQ = await fetch("http://localhost:8080/People");
    const RESP = await REQ.json();
    let i = 1;
    RESP.forEach((obj:{id: number; name: string; email: string}) => {
        this.drawPerson(i, obj);
        i+=1;
    });
  }

  private drawPerson(i: number, obj:{id: number; name: string; email: string}) {
    let text = `
    <div class = "list_element">
        <p class = "element">
            ${i}
        </p>
        <p class = "element">
            ${obj.name}
        </p>
        <p class = "element">
            ${obj.email}
        </p>
    </div>
    `;
    this._wrapper.lastElementChild.innerHTML += text;
  }

  private async getFonds() {
    this._wrapper.lastElementChild.innerHTML = "";
    (this._wrapper.lastElementChild as HTMLElement).style.height = "auto";
    const REQ = await fetch("http://localhost:8080/Fonds");
    const RESP = await REQ.json();
    console.log(RESP)
    let i = 1;
    RESP.forEach((obj:{id: number; fondName: string; locition: string}) => {
        this.drawFonds(i, obj);
        i+=1;
    });
  }

  private drawFonds(i: number, obj:{id: number; fondName: string; locition: string}) {
    let text = `
    <div class = "list_element">
        <p class = "element">
            ${i}
        </p>
        <p class = "element">
            ${obj.fondName}
        </p>
        <p class = "element">
            ${obj.locition}
        </p>
    </div>
    `;
    this._wrapper.lastElementChild.innerHTML += text;
  }

  private async getDonations() {
    this._wrapper.lastElementChild.innerHTML = "";
    (this._wrapper.lastElementChild as HTMLElement).style.height = "auto";
    const REQ = await fetch("http://localhost:8080/Donations");
    const RESP = await REQ.json();
    console.log(RESP)
    let i = 1;
    RESP.forEach((obj:{name: string; email: string; fondName: string; amount:number;  date:string}) => {
        this.drawDonations(i, obj);
        i+=1;
    });
  }

  private drawDonations(i: number, obj:{name: string; email: string; fondName: string; amount:number; date:string}) {
    let text = "";
    if (obj.name === undefined)
        text = `
        <div class = "list_element">
            <p class = "element">
                ${i}
            </p>
            <p class = "element">
                ${obj.fondName}
            </p>
            <p class = "element">
                ${obj.amount}
            </p>
            <p class = "element">
                ${obj.date.slice(0,10)}
            </p>
        </div>
        `;
    else 
        text = `
        <div class = "list_element">
            <p class = "element">
                ${i}
            </p>
            <p class = "element">
                ${obj.name}
            </p>
            <p class = "element">
                ${obj.email}
            </p>
            <p class = "element">
                ${obj.fondName}
            </p>
            <p class = "element">
                ${obj.amount}
            </p>
            <p class = "element">
                ${obj.date.slice(0,10)}
            </p>
        </div>
        `;
    this._wrapper.lastElementChild.innerHTML += text;
  }

  private async getMesseges() {
    this._wrapper.lastElementChild.innerHTML = "";
    (this._wrapper.lastElementChild as HTMLElement).style.height = "auto";
    const REQ = await fetch("http://localhost:8080/Messeges");
    const RESP = await REQ.json();
    console.log(RESP)
    let i = 1;
    RESP.forEach((obj:{name: string; email: string; fondName: string; messege: string, date:string}) => {
        this.drawMesseges(i, obj);
        i+=1;
    });
  }

  private drawMesseges(i: number, obj:{name: string; email: string; fondName: string;  messege: string; date:string}) {
    let text = `
    <div class = "list_element">
        <p class = "element">
            ${i}
        </p>
        <p class = "element">
            ${obj.name}
        </p>
        <p class = "element">
            ${obj.email}
        </p>
        <p class = "element">
            ${obj.fondName}
        </p>
        <p class = "element">
            ${obj.messege}
        </p>
        <p class = "element">
            ${obj.date.slice(0,10)}
        </p>
    </div>
    `;
    this._wrapper.lastElementChild.innerHTML += text;
  }
}
