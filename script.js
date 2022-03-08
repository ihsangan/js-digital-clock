window.setTimeout("now()", 10);
function now() {
var now = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
setTimeout("now()", 10);
document.getElementById("jam").innerHTML = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}`;
document.getElementById("hari").innerHTML = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;}
alert("click anywhere to change light/dark mode");
function change() {
var bd = document.body;
bd.classList.toggle("dm");}