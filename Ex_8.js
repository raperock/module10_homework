let myMap = new Map();
myMap.set('key','prop');
myMap.set(1,'prop2');
myMap.set(true,'123');
let key='Ключ - ',value='-значение ';
let resultKey = `${key}`;
let resultValue = `${value}`;

for (let elem of myMap) {
    console.log(resultKey + elem + resultValue);

}