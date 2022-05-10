function myFunc() {
    let a = parseInt(document.getElementById("nhapthang").value);
    let b = document.getElementById("demo");
    if (a > 0 && a < 13) {
        switch (a) {
            case 3:
            case 5:
            case 8:
            case 9:
            case 11:
            case 1:
                b.innerHTML = "Tháng" + " " + a + " " +  "có 31 ngày";
                break;
            case 2:
                b.innerHTML = "Tháng" + " " + a + " " +  "có 28 hoặc 29 ngày";
                break;
            default:
                b.innerHTML = "Tháng" + " " + a + " " + "có 30 ngày";
                break;
        }
    }
    else {
        b.innerHTML = "Xin nhập đúng tháng"
    }
}