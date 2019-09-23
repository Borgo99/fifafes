var mvpAtt = document.getElementById("mvpAtt");
var mvpCen = document.getElementById("mvpCen");
var mvpDif = document.getElementById("mvpDif");
var mvpPor = document.getElementById("mvpPor");
var winnerName = document.getElementById("mvp");

mvpAtt.addEventListener("click",function() {
    
    winnerName.lastChild.nodeValue = "Con il 60% dei voti!";
    winnerName.firstChild.nextSibling.firstChild.nodeValue = "attaccante";
    winnerName.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nodeValue = "Momo Salah!";
    winnerName.parentNode.setAttribute("class","awardsbox_winner winner_imgAtt");
    
},false);

mvpCen.addEventListener("click",function() {
    
    winnerName.lastChild.nodeValue = "Con l'80% dei voti!";
    winnerName.firstChild.nextSibling.firstChild.nodeValue = "centrocampista";
    winnerName.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nodeValue = "Christian Eriksen!";
    winnerName.parentNode.setAttribute("class","awardsbox_winner winner_imgCen");
    
},false);

mvpDif.addEventListener("click",function() {
    
    winnerName.lastChild.nodeValue = "Con il 60% dei voti!";
    winnerName.firstChild.nextSibling.firstChild.nodeValue = "difensore";
    winnerName.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nodeValue = "Eric Bailly!";
    winnerName.parentNode.setAttribute("class","awardsbox_winner winner_imgDif");
    
},false);


mvpPor.addEventListener("click",function() {
    
    winnerName.lastChild.nodeValue = "Con l'80% dei voti!";
    winnerName.firstChild.nextSibling.firstChild.nodeValue = "portiere";
    winnerName.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nodeValue = "Guillermo Ochoa!";
    winnerName.parentNode.setAttribute("class","awardsbox_winner winner_imgPor");
    
},false);



