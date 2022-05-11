
let kebang = '<table border="1" width="300" cellspacing="0" cellpadding="3">'  

for(let i = 1; i <= 10; i++) {
    kebang += "<tr>" ;    
        for(let j = 1; j <= 10; j++) {
            kebang+="<td>" + i*j + "</td>";            
        }
    kebang += "</tr>";   
}
kebang += "</table>";
document.write(kebang);