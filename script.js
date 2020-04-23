var inputdiameter;
var omtrekcirkel;
var inhoudcircel;


function submit() {
    inputdiameter = document.getElementById('diameter').value;
    omtrekcirkel = inputdiameter * Math.PI;
    inhoudcircel = inputdiameter ** 2 * Math.PI / 4;
    document.getElementById('show2').innerHTML = "Inhoud circel :" + inhoudcircel;
    document.getElementById("show").innerHTML = "Omtrek circel :" + omtrekcirkel;
}

function time() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    minutes = checkSeconds(minutes);
    seconds = checkSeconds(seconds);

    document.getElementById('TimeDate').innerHTML = "Time = " + hours + ":" + minutes + ":" + seconds;

    var t = setTimeout(time, 500);
}
function checkSeconds(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
