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
    
    // setTimeout(() => {
    //     top_nav_mobile_container.classList = "w3-bar animate__animated";        
    // }, 500);
});

function show_top_mobile_nav() {
    btn_display_mobile_nav_icon.classList = "fa fa-close";
    top_nav_mobile.style.display = "block";
    top_nav_mobile_container.classList.add('animate__fadeInUp');
    flag_mobile_nav_display = true;

    setTimeout(() => {
        top_nav_mobile_container.classList.remove('animate__fadeInUp');
    }, 800);
}

function hide_top_mobile_nav() {
    flag_mobile_nav_display = false;
    top_nav_mobile_container.classList.add('animate__fadeOut');
    btn_display_mobile_nav_icon.classList = "fa fa-bars";

    setTimeout(() => {
        top_nav_mobile.style.display = "none";
        top_nav_mobile_container.classList.remove('animate__fadeOut');
    }, 800);
}

document.addEventListener("scroll", function() {
    if (flag_mobile_nav_display) {
        hide_top_mobile_nav();
        console.log("hi");
    }
}); 