let myMap = new Map();
myMap.set('key','prop');
myMap.set(1,'prop2');
myMap.set(true,'123');

for (let elem of myMap) {
    console.log(`Ключ - ${elem[0]}, значение - ${elem[1]}`);
}

// Выполнено верно, но очень уж усложнили вывод строки в консоль. Можно сделать проще, выше показала как.