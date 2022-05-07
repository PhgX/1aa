function convert(){
    let input = document.getElementById("input").value;
    
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;

    if(fromCurrency!= toCurrency) {
       let output = input;
        document.getElementById("demo").innerHTML= "Result =" + " " + output;
    }
    if (fromCurrency === "VND" && toCurrency === "USD") {
       let output1 = input / 23000;
        document.getElementById("demo").innerHTML = "Result =" + " " + output1;
    }
    if (fromCurrency === "USD" && toCurrency === "VND") {
        let output2 = input * 23000;
        document.getElementById("demo").innerHTML = "Result =" + " " + output2;
    }
}