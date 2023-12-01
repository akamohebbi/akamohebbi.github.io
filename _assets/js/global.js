---
---

var btn_display_mobile_nav = document.getElementById("btn_display_mobile_nav");
var top_nav_mobile_container = document.getElementById("top_nav_mobile_container");

var btn_display_mobile_nav_icon = document.getElementById("nav-icon4");
var top_nav_mobile = document.getElementById("top_nav_mobile");


var flag_mobile_nav_display = false;
var flag_is_mobile_nav_animation_finished = false;


btn_display_mobile_nav.addEventListener("click", function() {
    if (flag_is_mobile_nav_animation_finished) return;
    btn_display_mobile_nav_icon.classList.toggle("open");


    if (!flag_mobile_nav_display) {
        show_top_mobile_nav();
    } else {
        hide_top_mobile_nav();
    }
});

function show_top_mobile_nav() {
    flag_is_mobile_nav_animation_finished = true;
    // btn_display_mobile_nav_icon.classList = "fa fa-close";
    top_nav_mobile.style.display = "block";
    top_nav_mobile_container.classList.add('{{ site.top_nav_mobile_enter_animation }}');

    setTimeout(() => {
        top_nav_mobile_container.classList.remove('{{ site.top_nav_mobile_enter_animation }}');
        flag_mobile_nav_display = true;
        flag_is_mobile_nav_animation_finished = false;
    }, 800);
}

function hide_top_mobile_nav() {
    flag_is_mobile_nav_animation_finished = true;
    top_nav_mobile_container.classList.add('{{ site.top_nav_mobile_exit_animation }}');
    // btn_display_mobile_nav_icon.classList = "fa fa-bars";

    setTimeout(() => {
        top_nav_mobile.style.display = "none";
        top_nav_mobile_container.classList.remove('{{ site.top_nav_mobile_exit_animation }}');
        flag_mobile_nav_display = false;
        flag_is_mobile_nav_animation_finished = false;
    }, 800);
}










// ----------------------------------------------- task list
var task_list_items = document.getElementsByClassName("task-list-item");

for (var i = 0; i < task_list_items.length; i++) {
    if (task_list_items[i].childNodes[0].checked) {
        task_list_items[i].style.textDecoration = "line-through";
        task_list_items[i].style.color = "#a1a1a1";
    }
}