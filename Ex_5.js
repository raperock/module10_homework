let arr=[];
let iLength = 10;
for (i=0;i<iLength;i++){
    arr[i]=Math.round(Math.random()*100);
}
console.log('Кол-во элеметов в массиве ' + arr.length);
for (i=0;i<iLength;i++) {
    console.log(arr[i]);
}