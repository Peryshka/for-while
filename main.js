 'use strict'
/*
1) Напишите программу, где пользователь вводит любое целое положительное число.
 А программа суммирует все числа от 1 до введенного пользователем числа.
*/

let enteredNumber = prompt("Введите любое положительное число:");

if (enteredNumber === null || enteredNumber === "") {
    console.log("Вы ничего не ввели");
} else {
    enteredNumber = parseFloat(enteredNumber); // Преобразование введенной строки в число
    if (!isNaN(enteredNumber) && enteredNumber >= 0) {
        let sum = 0;
        for (let i = 1; i <= enteredNumber; i++) {
            sum += i;
        }
        console.log(sum);
    } else {
        console.log("Вы ввели отрицательное число или нечисловое значение. Введите положительное число.");
    }
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
Напишите программу, которая выводит через console.log все числа от 1 до 100,
с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’,
 а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел,
 которые делятся и на 3, и на 5.
*/
for(let i=1; i <= 100; i++) {
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz");
    } else if(i%3===0) {
        console.log("Fizz");
    } else if (i%5===0) {
        console.log("Buzz");
    } else{
        console.log(i);
    }
}
