// For
let z = [3,5,12]
let total = 0
for(let x = 0 ; x < z.length ; x++)
{ 
   total += z[x]
}
console.log("Total nilai adalah "+ total +" karena " + z[0] + " + " + z[1] + " + " + z[2] + " = "+total);
// While
let y = 0
let total2 = 0
while (y < z.length){
   total2 += z[y]
   y++;
}
console.log('')
console.log("Total nilai adalah "+ total2 +" karena " + z[0] + " + " + z[1] + " + " + z[2] + " = "+total2);
// Do While
let a = 0
let total3 = 0
do {
   total3 += z[a]
   a++
} while (a < z.length)
console.log('')
console.log("Total nilai adalah "+ total3 +" karena " + z[0] + " + " + z[1] + " + " + z[2] + " = "+total3);

