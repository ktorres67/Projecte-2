"use strict";

const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

function clickItem(event, index) {
    console.log("Clic en el elemento del menú:", event.currentTarget);
    const item = event.currentTarget;
    menu.style.removeProperty("--timeOut");

    if (item.classList.contains("active")) return;

    console.log("Elemento activo antes de la actualización:", menu.querySelector(".menu__item.active"));
    menu.querySelector(".menu__item.active").classList.remove("active");
    console.log("Elemento activo después de la actualización:", menu.querySelector(".menu__item.active"));

    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    offsetMenuBorder(item, menuBorder);
}



function offsetMenuBorder(element, menuBorder) {
    const offsetActiveItem = element.getBoundingClientRect();
    const offsetMenu = menu.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - offsetMenu.left - (menuBorder.offsetWidth - offsetActiveItem.width) / 2) + "px";
    menuBorder.style.transform = `translate3d(${left}, 0px, 0px)`;
}



offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));

})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});

