"use strict";
const HTML = document.querySelector("html");
const POP_UPCLOSE = document.querySelector("img.close_pop-up");
const POP_UP_BACK = document.querySelector("div.pop-up_back");
const CARESLIDERS = document.querySelectorAll("div.care-point");
const DONATEBUTTONS = document.querySelectorAll("button.donate");
const POP_UPBUTTONS = document.querySelectorAll("button.pop-up_button");
const POP_UP = document.querySelector("div.pop-up");
const STEP1 = document.querySelector("div.step1");
const STEP2 = document.querySelector("div.step2");
const STEP3 = document.querySelector("div.step3");
const BACKSTEP1 = document.querySelector("button.back1");
const BACKSTEP2 = document.querySelector("button.back2");
const NEXTBUTTON1 = document.querySelector("div.step1 button.steps-button");
const NEXTBUTTON2 = document.querySelector("div.step2 button.steps-button");
const STEP1_DONATEBUTTONS = document.querySelectorAll("button.amount-button");
const OTHER_AMOUNT_INPUT = document.querySelector("input.other-amount-input");
const SPECIALBUTTON = document.querySelector("button.special-button");
const SPECIALINPUT = document.querySelector("output.special-input");
const PETS = document.querySelector("div.pets");
const PETSVALUES = document.querySelectorAll("button.pet-button");
const ARROWBUTTON = document.querySelector("button.select-button");
const CHECKBOX = document.querySelector("input.check-box-input");
const NAME_INPUT = document.querySelector("input.pup-up-name-input");
const EMAIL_INPUT = document.querySelector("input.pup-up-email-input");
const CREDIT_CARD_NUMDER = document.querySelector("#card-number");
const CVV_NUMDER = document.querySelector("#CVV");
const MONTH_INPUT = document.querySelector("output.month-input");
const MONTH_BUTTON = document.querySelector("#month");
const MONTHS = document.querySelector("div.months");
const MONTHS_BUTTON = document.querySelectorAll("button.month-button");
const YEAR_INPUT = document.querySelector("output.year-input");
const YEAR_BUTTON = document.querySelector("#year");
const YEARS = document.querySelector("div.years");
const YEARS_BUTTONS = document.querySelectorAll("button.year-button");
const COMPLETE = document.querySelector("button.complete-button");
const donation = {
  type: 0,
  amount: 0,
  pet: 0,
  card_number: 0,
  cvv: 0,
  month: 0,
  year: 0,
};
DONATEBUTTONS.forEach((e) =>
  e.addEventListener("click", () => {
    POP_UP_BACK.style.display = "flex";
    HTML.style.overflow = "hidden"
  })
);

window.addEventListener("click", () => {
  if (event.target.classList.contains("pop-up_back")) {
    close();
    reset();
  }
});
POP_UPCLOSE.addEventListener("click", () => {
  close();
  reset();
});
function NextStep(STEP1, STEP2) {
  STEP1.style.display = "none";
  STEP2.style.display = "block";
}
function ValidInput(INPUT, input, recLength) {
  INPUT.style.color = "#000000";
  if (String(INPUT.value).length >= recLength) {
    INPUT.value = donation[input];
  }
  donation[input] = +INPUT.value;
}
function Selest(OPTIONS, BUTTON) {
  OPTIONS.style.display = "block";
  BUTTON.classList.add("selected-button");
}
function SelectChoose(E, OUTPUT, OPTIONS, BUTTON, input) {
  donation[input] = E.dataset.value;
  OUTPUT.value = E.dataset.value;
  OUTPUT.style.color = "#000000";
  Completed();
}
function CloseSelect(OPTIONS, BUTTON) {
  OPTIONS.style.display = "none";
  BUTTON.classList.remove("selected-button");
}
function Completed() {
  let compele = true;
  for (let e in donation) {
    if (e === "pet" && !SPECIALBUTTON.classList.contains("active-button"))
      continue;
    compele = compele && donation[e] !== 0;
  }
  compele = compele && NAME_INPUT.validity.valid && EMAIL_INPUT.validity.valid;
  COMPLETE.disabled = !compele;
  if (compele) {
    COMPLETE.classList.add("complete-axtive");
    return;
  }
  COMPLETE.classList.remove("complete-axtive");
}
function reset() {
  for (let e in donation) {
    donation[e] = 0;
  }
  STEP1_DONATEBUTTONS.forEach((e) => {
    e.classList.remove("active-button");
  });
  OTHER_AMOUNT_INPUT.value = "";
  SPECIALBUTTON.classList.remove("active-button");
  SPECIALINPUT.value = "Choose your favourite";
  CHECKBOX.checked = false;
  NAME_INPUT.value = "";
  EMAIL_INPUT.value = "";
  CREDIT_CARD_NUMDER.value = "";
  CVV_NUMDER.value = "";
  MONTH_INPUT.value = "Month";
  YEAR_INPUT.value = "Year";
  COMPLETE.classList.remove("complete-axtive")

  OTHER_AMOUNT_INPUT.style.color = "#a4a8ae";
  SPECIALINPUT.style.color = "#a4a8ae";
  NAME_INPUT.style.color = "#a4a8ae";
  EMAIL_INPUT.style.color = "#a4a8ae";
  MONTH_INPUT.style.color = "#a4a8ae";
  YEAR_INPUT.style.color = "#a4a8ae";
}
function close() {
  POP_UP.style.display = "block";
  STEP1.style.display = "none";
  STEP2.style.display = "none";
  STEP3.style.display = "none";
  POP_UP_BACK.style.display = "none";
  HTML.style.overflow= "hidden visible"
}
// donation amount
function activeButton() {
  STEP1_DONATEBUTTONS.forEach((e) => {
    if (e.dataset.amount === donation.type) {
      e.classList.add("active-button");
      if (donation.type === "*") {
        donation.amount = +OTHER_AMOUNT_INPUT.value;
        Completed();
        return;
      }
      donation.amount = +e.dataset.amount;
      Completed();
    }
    
  });
}
function otherInputOn() {
  OTHER_AMOUNT_INPUT.disabled = !STEP1_DONATEBUTTONS[
    STEP1_DONATEBUTTONS.length - 1
  ].classList.contains("active-button");
  if (!OTHER_AMOUNT_INPUT.disabled) {
    OTHER_AMOUNT_INPUT.style.color = "#000000";
    return;
  }
  OTHER_AMOUNT_INPUT.style.color = "#a4a8ae";
}
OTHER_AMOUNT_INPUT.addEventListener("input", () => {
  ValidInput(OTHER_AMOUNT_INPUT, "amount", 5);
  Completed();
});
POP_UPBUTTONS.forEach((e) =>
  e.addEventListener("click", () => {
    NextStep(POP_UP, STEP1);
    donation.type = e.dataset.amount;
    console.log(donation.type)
    activeButton();
    otherInputOn();
  })
);
STEP1_DONATEBUTTONS.forEach((e) =>
  e.addEventListener("click", () => {
    STEP1_DONATEBUTTONS.forEach((e) => {
      e.classList.remove("active-button");
    });
    e.classList.add("active-button");
    donation.type = e.dataset.amount;
    activeButton();
    otherInputOn();
  })
);
// donation amount end

// special pet
STEP1.addEventListener("click", () => {
  if(!(event.target.classList.contains("special-input")||event.target.classList.contains("pets")))
  CloseSelect(PETS, ARROWBUTTON)
})
SPECIALBUTTON.addEventListener("click", () => {
  if (SPECIALBUTTON.classList.contains("active-button")) {
    SPECIALBUTTON.classList.remove("active-button");
    SPECIALINPUT.style.color = "#a4a8ae";
    CloseSelect(PETS, ARROWBUTTON);
    Completed();
    return;
  }
  SPECIALBUTTON.classList.add("active-button");
  SPECIALINPUT.style.color = "#000000";
  Completed();
});
SPECIALINPUT.addEventListener("click", () => {
  if (!SPECIALBUTTON.classList.contains("active-button")) return;
  Selest(PETS, ARROWBUTTON);
});
PETSVALUES.forEach((e) =>
  e.addEventListener("click", () => {
    SelectChoose(e, SPECIALINPUT, PETS, ARROWBUTTON, "pet");
    Completed();
  })
);
// special pet end

NEXTBUTTON1.addEventListener("click", () => NextStep(STEP1, STEP2));
BACKSTEP1.addEventListener("click", () => NextStep(STEP2, STEP1));
NEXTBUTTON2.addEventListener("click", () => NextStep(STEP2, STEP3));

// credit card
CREDIT_CARD_NUMDER.addEventListener("input", () => {
  ValidInput(CREDIT_CARD_NUMDER, "card_number", 17);
  Completed();
});
CVV_NUMDER.addEventListener("input", () => {
  ValidInput(CVV_NUMDER, "cvv", 4);
  Completed();
});
// credit card end

// date
STEP3.addEventListener("click",() => {
  if(!(event.target.classList.contains("month-input")||event.target.classList.contains("months")))
   CloseSelect(MONTHS, MONTH_BUTTON);
 if(!(event.target.classList.contains("year-input")||event.target.classList.contains("years")))
   CloseSelect(YEARS, YEAR_BUTTON);
})
MONTH_INPUT.addEventListener("click", () => Selest(MONTHS, MONTH_BUTTON));
MONTHS_BUTTON.forEach((e) =>
  e.addEventListener("click", () => {
    SelectChoose(e, MONTH_INPUT, MONTHS, MONTH_BUTTON, "month");
    Completed();
  })
);
YEAR_INPUT.addEventListener("click", () => Selest(YEARS, YEAR_BUTTON));
YEARS_BUTTONS.forEach((e) =>
  e.addEventListener("click", () => {
    SelectChoose(e, YEAR_INPUT, YEARS, YEAR_BUTTON, "year");
    Completed();
  })
);
// date end

BACKSTEP2.addEventListener("click", () => {
  NextStep(STEP3, STEP2);
});
COMPLETE.addEventListener("click", () => {
  if (!COMPLETE.classList.contains("complete-axtive")) return;
  reset();
  close();
  alert("Thank you for your donation");
});
