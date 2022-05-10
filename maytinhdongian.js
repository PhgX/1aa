
function inputValue(value) {
    document.getElementById("view").value += value;
}

function ketqua() {
    let result = eval(document.getElementById("view").value);
    // alert  (result);
    document.getElementById("view").value = result;
}

function xoa() {
    result = "";
    document.getElementById("view").value = result;
}