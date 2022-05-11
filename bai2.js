function myFunc() {
let nhapso = +prompt("Nhập số");
let text = "";
for (let i = 0; i<=nhapso; i++) {
    text += i + "<br>" ;
}
document.getElementById("demo").innerHTML = text;
}