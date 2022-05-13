// let i;
// let n=2;

// let fib = [];
// fib[0]= 0;
// fib[1]= 1;

// let total = 0;
// let count = 1;
// while (count<=20){
//     for (i = 2; i<=n; i++) {
//         fib[i]= fib[i-2] + fib[i-1];        
//     } 
//     n++;         
//     total += Number(fib[i]);  
//     count++;  
// }
// document.write(total);

let a = 1;
let b = 1;
let sum = a + b;
temp = sum
document.write(a + ' , ' + b)
for( let i = 0 ; i < 20 ; i ++){
    sum = a + b ;
    a = b ;
    b = sum;
    temp += sum
    document.write(' , ' +sum )
}
document.write('<br>')
document.write(temp)
