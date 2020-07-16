var mainbox = document.getElementById("container-top__main-box");
var arrow = document.getElementById("container-top__icon");

mainbox.onscroll = function() {
    if (mainbox.scrollTop<100 ) {
        arrow.setAttribute("class","icon-arrows-down-double");
    }
    else {
        arrow.setAttribute("class","disappear");
    }
}