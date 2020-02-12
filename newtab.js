document.addEventListener('DOMContentLoaded', loadtime);


function loadtime() {

    var myDate = new Date();
    var hours = myDate.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var minutes = myDate.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var myTime = hours + " : " + minutes + " " + ampm;
    document.getElementById("result").innerHTML = myTime;
}
