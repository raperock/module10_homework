let x = prompt('Введеди число x = ')

let typeX =typeof x;
alert(typeX);

switch (typeX){
    case "string":
        alert('x - string');
        break;
    case "number":
        alert("x - number");
        break;
    case "boolean":
        alert("x - boolean");
        break;
    default:
        alert("Тип Х не определен")

}

