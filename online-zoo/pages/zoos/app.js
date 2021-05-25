const HAMBURGER = document.querySelector("img.hamburger");
const NAV = document.querySelector("nav");
const CLOSE = document.querySelector("img.close-hamburger");
const ASIDE =  document.querySelector("div.main-aside");
const ANIMAL_SLIDER =  document.querySelector("div.aside-slider");
const NEXT_BUTTON = document.querySelector("div.bottom");
const EXTARROW =  document.querySelector("div.top>div.arrow");
const LEFT =  document.querySelector("button.left");
const RIGHT =  document.querySelector("button.right");
const SLIDER = document.querySelector("div.cams-slider");
const FRAMES = document.querySelectorAll("figure");
const BIGFRAME = document.querySelector("iframe.big-inframe");
const OUTPUT = document.querySelector("output.plug-text");
const QUICK_DONATEBUTTON = document.querySelector("button.quick");
const QUICK_DONATEINPUT = document.querySelector("input.number");
QUICK_DONATEINPUT.addEventListener("input",() =>{ 
    ValidInput(QUICK_DONATEINPUT, "amount", 5);
    QUICK_DONATEINPUT.style.color = "#ffffff";
});
QUICK_DONATEBUTTON.addEventListener("click", () => {
    if(QUICK_DONATEINPUT.value === ""){
        donation.type = 10;
        STEP1_DONATEBUTTONS[0].classList.add("active-button");
        donation.amount = 10;
    } else {
        donation.type = "*";
        STEP1_DONATEBUTTONS[STEP1_DONATEBUTTONS.length-1].classList.add("active-button");
        OTHER_AMOUNT_INPUT.value = donation.amount;
        OTHER_AMOUNT_INPUT.style.color = "#000000";
    }
    POP_UP_BACK.style.display = "block";
    POP_UP.style.display = "none";
    STEP1.style.display = "block";
    HTML.style.overflow = "hidden"   
});
let position = 0;
let slide = document.documentElement.clientWidth  > 1740 ? 360 : 285;
let slideEnd = document.documentElement.clientWidth  > 1740 ? 1440 : 1140;

window.onresize = function() {
    slide = document.documentElement.clientWidth  > 1740 ? 360 : 285;
    slideEnd = document.documentElement.clientWidth  > 1740 ? 1440 : 1140;
    position = 0;
    moveX(position);
};

HAMBURGER.addEventListener("click", () => {
    NAV.style.right = "-20px";
});

CLOSE.addEventListener("click", () => {
    NAV.style.right = "-1000px"
});

EXTARROW.addEventListener("click", () => {
    if (ASIDE.classList.contains("extended")) {
        ASIDE.classList.remove("extended");
        return;
    }
    ASIDE.classList.add("extended");
});
// cams slider functions
function checkBtn() {
    LEFT.disabled = position <= 0;
    RIGHT.disabled = position >= slideEnd;
}

function moveX(position) {
    SLIDER.style.transform = `translateX(-${position}px)`;
    checkBtn();
}

function moveY(SLIDER) {
    const Clone = SLIDER.children[0];
    SLIDER.removeChild(Clone);
    SLIDER.appendChild(Clone);
}

RIGHT.addEventListener("click", () => {
    position += slide;
    moveX(position);
});

LEFT.addEventListener("click", () => {
    position -= slide;
    moveX(position);
});
// end of cams slider functions
FRAMES.forEach((e) => e.addEventListener("click", () => {
    const Clone = BIGFRAME.src 
    BIGFRAME.src = e.children[0].src;
    e.children[0].src = Clone ;
}));

NEXT_BUTTON.addEventListener("click", ()=> { moveY(ANIMAL_SLIDER) });
