let a = prompt('Введи в меня')
++a;
--a;
if (isNaN(+a)||a==null) {
    alert('Упс, кажется,вы ошиблись');
}
else {
    if ((typeof a == "number") && (a % 2 )== 0)
        alert(a + ' Четное')
    else alert(a+ ' Не четное');

}