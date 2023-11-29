var btn_display_mobile_nav = document.getElementById("btn_display_mobile_nav");
var top_nav_mobile_container = document.getElementById("top_nav_mobile_container");

var btn_display_mobile_nav_icon = document.getElementById("btn_display_mobile_nav_icon");
var top_nav_mobile = document.getElementById("top_nav_mobile");


var flag_mobile_nav_display = false;
btn_display_mobile_nav.addEventListener("click", function() {
    if (!flag_mobile_nav_display) {
        show_top_mobile_nav();
    } else {
        hide_top_mobile_nav();
    }
});

function show_top_mobile_nav() {
    top_nav_mobile.style.display = "block";
    flag_mobile_nav_display = true;
    top_nav_mobile_container.classList = "w3-bar w3-animate-bottom";
    btn_display_mobile_nav_icon.classList = "fa fa-close";
}

function hide_top_mobile_nav() {
    top_nav_mobile.style.display = "none";
    flag_mobile_nav_display = false;
    top_nav_mobile_container.classList = "w3-bar w3-fading";
    btn_display_mobile_nav_icon.classList = "fa fa-bars";
}

document.addEventListener("scroll", function() {
    if (flag_mobile_nav_display) {
        hide_top_mobile_nav();
        console.log("hi");
    }
}); 