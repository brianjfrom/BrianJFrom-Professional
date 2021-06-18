function resNav() {
    let res = document.querySelector('.topnav')
    if (res.className === "topnav") {
        res.className += " dropdown";
    }
    else {
        res.className = "topnav" 
    }
}



function introFade() {
    let intro = document.querySelector('.intro')
    if (intro.className === "intro") {
        intro.className += " introPressed";
    }
    else {
        className = "intro"
    }
}
