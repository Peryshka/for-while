'use strict'
/*
1) Напишите программу, где пользователь вводит любое целое положительное число.
 А программа суммирует все числа от 1 до введенного пользователем числа.
*/

let enteredNumber = prompt("Введите любое положительное число: ");
let sum=0;
if(enteredNumber >= 0) {
    for(let i = 1; i <= enteredNumber; i++ ) {
       sum += i;
    }
    console.log(sum);
} else if(enteredNumber < 0) {
    console.log("Вы ввели отрицательное число. Введите положительное число");
} else if(typeof enteredNumber === 'string') {
    console.log("Вы ввели строку! Введите положительное число!");
} else if(enteredNumber === "" || enteredNumber === null){
    console.log("Вы ничего не ввели");
}

/*
Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:
* */
let star="#";
while (star.length <= 7) {
    console.log(star + "\n");
    star += "#";
}
/*

*/