function kiemtra() {
    let nam = parseInt(document.getElementById("input").value);

    if (nam % 4 == 0) {
        if (nam % 100 == 0) {
            if (nam % 400 == 0) {
                document.getElementById("demo").innerHTML = "là năm nhuận";
            } else {
                document.getElementById("demo").innerHTML = "Không phải là năm nhuận";
            }
        } else {
            document.getElementById("demo").innerHTML = "Là năm nhuận";
        }
    } else {
        document.getElementById("demo").innerHTML = "Không là năm nhuận";
    }
}