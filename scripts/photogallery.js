var arrayImg = ["img1", "img2", "img3", "img4"];
var tmp = 0;
var image = document.getElementById("image");

image.addEventListener("click",function() {
    window.open("photogallery/"+arrayImg[tmp]+".jpg");
},false); 

var btnPrev = document.getElementById("previous");
btnPrev.addEventListener("click", function() {
    if(tmp != 0) {
        tmp--;
        image.setAttribute("src", "photogallery/"+arrayImg[tmp]+".jpg");
        if(tmp==0 || tmp==2) {
            image.setAttribute("class","image imageRotate");
        }
        else {
            image.setAttribute("class","image");
        }
    }
}, false);

var btnNext = document.getElementById("next");
btnNext.addEventListener("click", function() {
    if(tmp != (arrayImg.length-1)) {
        tmp++;
        image.setAttribute("src", "photogallery/"+arrayImg[tmp]+".jpg");
        if(tmp==0 || tmp==2) {
            image.setAttribute("class","image imageRotate");
        }
        else {
            image.setAttribute("class","image");
        }
    }
}, false);