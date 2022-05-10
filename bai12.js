function tinhlai() {
    let money = +document.getElementById("tienvaybandau").value;
    let month = +document.getElementById("sothangchovay").value;
    let monthlyInterest = +document.getElementById("laisuathangthang").value;

    let a = money*(1 + monthlyInterest/12);
    let interest = Math.round(Math.pow(a,month));
    document.getElementById("demo").innerHTML= interest;       
    } 