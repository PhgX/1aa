
function myFunc() {
    let a = parseFloat(document.getElementById("cannang").value);
    let b = parseFloat(document.getElementById("chieucao").value);
    let bmi = a / Math.pow(b, 2);
    if (bmi < 18.5) {
        document.getElementById("demo").innerHTML = "Underweight";
    } else if (bmi < 25) {
        document.getElementById("demo").innerHTML = "Normal";
    } else if (bmi < 30) {
        document.getElementById("demo").innerHTML = "Overweight";
    } else {
        document.getElementById("demo").innerHTML = "Obese";
    }
}

