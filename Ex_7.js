let arr=[];
let iLength = 10;

for (let i=0;i<iLength;i++){
    arr[i]=Math.round(Math.random(100)*100);
}
let a = 0, b = 0; nul=0;
for (i = 0; i < iLength; i++) {

    if (arr [i] % 2 == 0) {
        ++a
    }
    else
        ++b
    }
console.log('Количество четных чисел в массиве '+ a);

console.log('Количество не четных чисел в массиве '+ b);

if (nul>0){
    console.log(`Количество нулевых элементов ` +nul);
}