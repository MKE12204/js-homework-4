/* Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на Анг. языке */
/* function week (){
    let pr = parseInt(prompt('Select the number day of the week'))
    if(isNaN(pr)){
        document.write('The entered data is incorrect')
    }else if(pr > 7 || pr <= 0){
        document.write('Invalid week number')
    }else if(pr === 1){
        document.write('Selected day of week: Monday')
    }else if(pr === 2){
        document.write('Selected day of week: Tuesday')
    }else if(pr === 3){
        document.write('Selected day of week: Wednesday')
    }else if (pr === 4){
        document.write('Selected day of week: Thursday')
    }else if(pr === 5){
        document.write('Selected day of week: Friday')
    }else if (pr === 6){
        document.write('Selected day of week: Saturday')
    }else {
        document.write('Selected day of week: Sunday')
    }
}
week() */
/* Создайте функцию которая будет заполнять массив 10-ю иксами с помощью цикла. */
/* function x (){
    let arr = [];
    for(let writeX = 1; writeX <= 10; writeX++){
        arr.splice(0, 0, 'x' );
    }
    document.write(arr);
}

x() */
/* Если переменная a больше нуля - то в ggg запишем функцию, которая выводит один !, иначе запишем функцию, которая выводит два ! */
/* let a = 1;
if(a > 0){
    let ggg = function (){
        document.write('!');
    }
    ggg();
}else{
    function secondGGG (){
        document.write('!!');
    }
    secondGGG();
} */
/*     Функция ggg принимает 2 параметра: анонимную функцию, которая возвращает 3 и анонимную функцию, которая возвращает 4. Верните результатом функции ggg сумму 3 и 4. */
/* function ggg (){
    function anonimOne(){
       return 3;
    };
    function anonimTwo(){
        return 4;
    };
    let firstMove = anonimOne();
    let secondMove = anonimTwo();
    return firstMove + secondMove;
}
document.write(ggg()); */
/* Сделайте функцию, которая считает и выводит количество своих вызовов. */
/* let calkFunction = 0;  // Глобальная переменная для отслеживания количества вызовов

function howCalk () {
    calkFunction++;  // Увеличиваем счетчик вызовов
    return calkFunction;  // Возвращаем текущее значение счетчика
}
howCalk();
howCalk();
howCalk();
howCalk();
howCalk();
howCalk();
howCalk();
document.write(howCalk() -1); */