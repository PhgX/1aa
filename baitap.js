    
function cong() {
    let input1 = parseFloat(document.getElementById("so1").value);
    let input2 = parseFloat(document.getElementById("so2").value);      
    let output = input1 + input2;
    document.getElementById("demo").innerHTML = "Kết quả: " + output;   
}

function tru() { 
    let input1 = parseFloat(document.getElementById("so1").value);
    let input2 = parseFloat(document.getElementById("so2").value);   
    let output1 = input1 - input2;
    document.getElementById("demo1").innerHTML = "Kết quả: " + output1;
}

function nhan() {
    let input1 = parseFloat(document.getElementById("so1").value);
    let input2 = parseFloat(document.getElementById("so2").value);     
    let output2 = input1 * input2;
    document.getElementById("demo2").innerHTML = "Kết quả: " + output2;
}

function chia() {
    let input1 = parseFloat(document.getElementById("so1").value);
    let input2 = parseFloat(document.getElementById("so2").value);    
    let output3 = input1 / input2;
    // document.getElementById("demo3").innerHTML = "Kết quả: " + output3;
    document.getElementById("demo3").innerHTML =`Kết quả: ${output3}`;

    
}
