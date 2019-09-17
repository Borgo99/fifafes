/*
Bassi 7/8
Dangi 17/9
Duins 22/6
Ivo 17/4
Pel 15/10
Zonny 13/10
Goz 10/12
*/


var el = document.getElementById("header");
var data = new Date();

if(data.getDate() == 7 && data.getMonth() == 7) {
    el.textContent = "AUGURI BAX!";
}
else if(data.getDate() == 17 && data.getMonth() == 8) {
    el.textContent = "AUGURI DANGI!\n";
}
else if(data.getDate() == 22 && data.getMonth() == 5) {
    el.textContent = "AUGURI DUINS!\n";
}
else if(data.getDate() == 17 && data.getMonth() == 3) {
    el.textContent = "AUGURI IVO!\n";
}
else if(data.getDate() == 15 && data.getMonth() == 9) {
    el.textContent = "AUGURI PEL!\n";
}
else if(data.getDate() == 13 && data.getMonth() == 9) {
    el.textContent = "AUGURI ZONNY!\n";
}
else if(data.getDate() == 10 && data.getMonth() == 11) {
    el.textContent = "AUGURI GOZ!\n";
}
else if(data.getDate() == 27 && data.getMonth() == 3) {
    el.textContent = "AUGURI BORGO!\n";
}