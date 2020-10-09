let arr=[1,1,'9',1,1,1,1,1];
let a=arr[0];

let ifs=false;

for (let i=0; i<arr.length; i++){
    if (a===arr[i+1]){
        ifs=true
    }
    else ifs=false;
}
console.log(ifs);
