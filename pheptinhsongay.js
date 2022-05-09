function myFunc() {
    let a = parseInt(document.getElementById("nhapthang").value);
    let b = document.getElementById("demo");
    if (a > 0 && a < 13) {
        switch (a) {
            case 1:
                b.innerHTML = "Tháng 1 có 31 ngày";
                break;
            case 2:
                b.innerHTML = "Tháng 2 có 28 hoặc 29 ngày";
                break;
            default:
                b.innerHTML = "Tháng " + a + " " + "có 30 ngày";
                break;
        }
    }
    else {
        b.innerHTML = "Xin nhập đúng tháng"
    }
}