const HAMBURGER = document.querySelector("img.hamburger");
const NAV = document.querySelector("nav");
const CLOSE = document.querySelector("img.close-hamburger");
const ICONS = document.querySelectorAll("div.loc");
HAMBURGER.addEventListener("click", () => {
    NAV.style.right = "-20px";
});

CLOSE.addEventListener("click", () => {
    NAV.style.right = "-1000px"
});

ICONS.forEach((e) => e.addEventListener("click", () => {
    if (!e.classList.contains("active")){
        alert("Soryy, page of this animal doesn't exists");
        return;
    }
    const link = document.createElement("a");
    link.href = `../zoos/${e.dataset.name}.html`;
    console.log(link)
    link.click();
    link.delete;
    console.log(e.dataset.name)
}));