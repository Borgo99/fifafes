var main_container = document.getElementById("main-container");
var container = document.getElementById("container");
var container_top = document.getElementById("container-top");
var container_left = document.getElementById("container-left");
var container_right = document.getElementById("container-right");
var container_bottom = document.getElementById("container-bottom");
//buttons on main
var btn_top = document.getElementById("btn-top");
var btn_left = document.getElementById("btn-left");
var btn_right = document.getElementById("btn-right");
var btn_bottom = document.getElementById("btn-bottom");
//buttons on sections
var top_button = document.getElementById("top-button");
var left_button = document.getElementById("left-button");
var right_button = document.getElementById("right-button");
var bottom_button = document.getElementById("bottom-button");

function getSmaller() {
    main_container.setAttribute("class","main-container main-container--clicked");  
}
function getNormal() {
    setTimeout(function(){
        main_container.setAttribute("class","main-container");
    },1800); 
}

btn_top.addEventListener('click',function() {

    getSmaller();
    setTimeout(function() {
        container.setAttribute("class","container container--clicked--top");
        container_top.setAttribute("class", "container-top container-top--active");
        getNormal();
    },400);

},false);

top_button.addEventListener('click', function() {

    getSmaller();
    setTimeout(function() {
        container_top.setAttribute("class", "container-top");
        container.setAttribute("class","container");
        getNormal();
    },400);

},false);


btn_left.addEventListener('click', function(){

    getSmaller();
    setTimeout(function() {
        container.setAttribute("class","container container--clicked--left");
        container_left.setAttribute("class","container-left container-left--active");
        getNormal();
    },400);

},false);

left_button.addEventListener('click',function(){

    getSmaller();
    setTimeout(function() {
        container_left.setAttribute("class","container-left");
        container.setAttribute("class","container");
        getNormal();
    },400);

},false);


btn_right.addEventListener('click', function(){

    getSmaller();
    setTimeout(function() {
        container.setAttribute("class","container container--clicked--right");
        container_right.setAttribute("class","container-right container-right--active");
        getNormal();
    },400);

},false);

right_button.addEventListener('click',function(){

    getSmaller();
    setTimeout(function() {
        container_right.setAttribute("class","container-right");
        container.setAttribute("class","container");
        getNormal();
    },400);

},false);


btn_bottom.addEventListener('click', function(){

    getSmaller();
    setTimeout(function() {
        container.setAttribute("class","container container--clicked--bottom");
        container_bottom.setAttribute("class","container-bottom container-bottom--active");
        getNormal();
    },400);

},false);

bottom_button.addEventListener('click',function(){

    getSmaller();
    setTimeout(function() {
        container_bottom.setAttribute("class","container-bottom");
        container.setAttribute("class","container");
        getNormal();
    },400);
    
},false);