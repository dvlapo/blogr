// DROPDOWNS FOR DESKTOP
let drop = document.querySelector('.drop');
let down = document.querySelector('.down');
let droptwo = document.querySelector('.droptwo');
let downtwo = document.querySelector('.downtwo');
let dropthree = document.querySelector('.dropthree');
let downthree = document.querySelector('.downthree');

drop.addEventListener('click', () => {
    if (down.style.display === "") {
        down.style.display = "block";
        downtwo.style.display = ""
        downthree.style.display = ""
    } else {
        down.style.display = "";
    }
})

droptwo.addEventListener('click', () => {
    if (downtwo.style.display === "") {
        downtwo.style.display = "block";
        down.style.display = ""
        downthree.style.display = ""
    } else {
        downtwo.style.display = "";
    }
})

dropthree.addEventListener('click', () => {
    if (downthree.style.display === "") {
        downthree.style.display = "block";
        down.style.display = ""
        downtwo.style.display = ""
    } else {
        downthree.style.display = "";
    }
})


// MAIN MENU DROPDOWN FOR MOBILE
let dropBtn = document.querySelector('.dropbtn');

dropBtn.addEventListener('click', () => {
    let dropContent = document.querySelector('.dropdown-content');
    let menuIcon = document.querySelector(".menu-icon");

    if (dropContent.style.display === "") {
        dropContent.style.display = "flex";
        menuIcon.innerHTML = "close"
    } else {
        dropContent.style.display = "";
        menuIcon.innerHTML = "menu"
    }
})

// DROPDOWNS IN THE MENU
// CONNECT
let exploreconnect_btn = document.querySelector('button.exploreconnect_btn');

exploreconnect_btn.addEventListener('click', () => {
    let exploreconnect = document.querySelector('ul.exploreconnect');
    let connectIcon = document.querySelector("i.connect-icon");
    if (exploreconnect.style.display === "") {
        exploreconnect.style.display = "block";
        connectIcon.innerHTML = "expand_less";
    } else {
        exploreconnect.style.display = "";
        connectIcon.innerHTML = "expand_more";
    }
})
// COMPANY
let explorecoy_btn = document.querySelector('button.explorecoy_btn');

explorecoy_btn.addEventListener('click', () => {
    let explorecoy = document.querySelector('ul.explorecoy');
    let coyIcon = document.querySelector("i.company-icon");
    if (explorecoy.style.display === "") {
        explorecoy.style.display = "block";
        coyIcon.innerHTML = "expand_less";
    } else {
        explorecoy.style.display = "";
        coyIcon.innerHTML = "expand_more";
    }
})
// PRODUCT
let explore_btn = document.querySelector('button.explore_btn');

explore_btn.addEventListener('click', () => {
    let explore = document.querySelector('ul.explore');
    let productIcon = document.querySelector("i.product-icon");
    if (explore.style.display === "") {
        explore.style.display = "block";
        productIcon.innerHTML = "expand_less";
    } else {
        explore.style.display = "";
        productIcon.innerHTML = "expand_more";
    }
})

