const LEFLBUTTON = document.querySelector("button.arrow_buttons_left");
const RIGHTBUTTON = document.querySelector("button.arrow_buttons_right");
const CARDS_BACK = document.querySelector("div.cards-contuner");
const CARDS = document.querySelector("div.cards");
const CLOSE = document.querySelector("img.close-hamburger");
const NAV = document.querySelector("nav");
const HAMBURGER = document.querySelector("img.hamburger");
const QUICK_DONATEBUTTON = document.querySelector("button.quick");
const QUICK_DONATEINPUT = document.querySelector("input.number");
const FEEDBCK_SLIDER = document.querySelector("div.feedback_cards");
const FEEDBACKBYTTONS =  document.querySelectorAll("button.pause");
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
const FeedBackScrollWidth = 545;
let  OurFreandsScroolWidth = document.documentElement.clientWidth  > 1400 ? 480:476;
let OurFreandsEnd=document.documentElement.clientWidth  > 1400 ? 2350:2637;
const FeedBackEnd = 1090;
let OurFreandsPosition = 0;
let FeedBackPosition = 0;
var myTimer;
let click = 0;

window.onresize = function() {
    OurFreandsScroolWidth = document.documentElement.clientWidth  > 1400 ? 480:476;
    OurFreandsEnd=document.documentElement.clientWidth  > 1400 ? 2350:2637;
    OurFreandsPosition = 0;
    move(CARDS, OurFreandsPosition) 
};

window.addEventListener("load", () => {
    myTimer = setInterval(feedbackMove, 15000);
})
function checkBtn() {
    LEFLBUTTON.disabled = OurFreandsPosition <= 0;
    RIGHTBUTTON.disabled = OurFreandsPosition >= OurFreandsEnd;
}

function pause() {
    click +=1;
    if (click > 1) return;
    clearInterval(myTimer);
    setTimeout(function(){
        myTimer = setInterval(feedbackMove, 15000);
        click = 0;
    }, 45000); 
}

function move(SLIDER, position) {
    SLIDER.style.transform = `translateX(-${position}px)`;
}

function feedbackMove() {
    if (FeedBackPosition === FeedBackEnd) FeedBackPosition = 0;
    else FeedBackPosition += FeedBackScrollWidth;
    move(FEEDBCK_SLIDER, FeedBackPosition);
}
// our pets slider
RIGHTBUTTON.addEventListener("click", () => {
    if (OurFreandsPosition+OurFreandsScroolWidth <= 2400){
        OurFreandsPosition+=OurFreandsScroolWidth;
        move(CARDS, OurFreandsPosition);
        checkBtn();
    return
    }
    OurFreandsPosition+=OurFreandsScroolWidth/2+35;
    move(CARDS, OurFreandsPosition);
    OurFreandsPosition+=OurFreandsScroolWidth/2-15;
    checkBtn();
    CARDS_BACK.classList.remove("gradient");
    CARDS_BACK.classList.add("gradient-left");
});

LEFLBUTTON.addEventListener("click", () => { 
    OurFreandsPosition-=OurFreandsScroolWidth;
    move(CARDS, OurFreandsPosition);
    checkBtn();
    if (!CARDS_BACK.classList.contains("gradient-left")) return;
    CARDS_BACK.classList.add("gradient");
    CARDS_BACK.classList.remove("gradient-left");

});
// our pets slider end 

// feedback slider
FEEDBCK_SLIDER.addEventListener("click",pause);
FEEDBACKBYTTONS.forEach((e) => e.addEventListener("click",pause));
// feedback slider end

//namburger
HAMBURGER.addEventListener("click", () => {
    NAV.style.right = "-20px";
});

CLOSE.addEventListener("click", () => {
    NAV.style.right = "-1000px"
});
//namburger end 

