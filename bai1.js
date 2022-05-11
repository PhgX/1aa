
let num = parseInt(prompt("Nhập số"));
let total = 0;
while (num != 0) {
    num = parseInt(prompt("Nhập số"));
    total += num;
}
document.getElementById("demo").innerHTML = total;
