let kebang = '<table width="70%" border="1" width="300" cellspacing="1" cellpadding="10">';
for (let i = 2; i<=9; i++){
    kebang += "<tr>";
    for (let j = 1; j <= 9; j++){
        kebang += "<td>" + i + "*" + j + " = " + i*j + "</td>"        
    }  
    kebang += "</tr>";  
}
document.write(kebang);

