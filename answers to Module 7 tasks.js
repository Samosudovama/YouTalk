// // Задание 7.6.1 - Напишите проверку, которая позволит определить, является слово палиндромом или нет.
// Если является, то выведите в консоль фразу «Слово <слово> является палиндромом». 
// Если нет — «Слово <слово> не является палиндромом».

let palindrome = prompt('Введите слово')

let newPalindrome = Array.from(palindrome.toLowerCase());

let backNewPalindrome = Array.from(palindrome.toLowerCase());

backNewPalindrome = backNewPalindrome.reverse();

if ( backNewPalindrome.join('') === newPalindrome.join('')){
    console.log ( `Слово ${palindrome} является палиндромом.`);
} else {  console.log ( `Слово ${palindrome} не является палиндромом.`); 
}



// Задание 7.6.2 - Есть массив:  
// const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
// Создайте новый массив и запишите в него только уникальные значения из массива arr. 
// Выведите получившийся массив в консоль.

const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
const setOfArr = new Set (arr);
const newArr = Array.from(setOfArr);
console.log ( newArr);



// Задание 7.6.3 - Запросите у пользователя любое число.
// На основании ответа создайте массив и заполните его числами от нуля до введённого числа.
// Не забудьте привести полученное от пользователя значение к типу number.

let num = +prompt ( 'Введите число' );
let fromNullToNum = [];
if ( num !== null ){
    for ( let i = 0; i < num; i += 1 ){
        fromNullToNum.push (i);
    }
}
alert ( fromNullToNum);



// Задание 7.6.4 - С помощью цикла нарисуйте в консоли заполненное поле для игры «Крестики-нолики». 
// Выведите результат в консоль.
// Выходные данные:
// x o x
// o x o
// x o x

const xox = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
const xoxArray = [];
let index = 0;
for ( let i = 0; i < 3; i += 1 ){
    xoxArray[i] = [];
    for ( let j = 0; j < 3; j+=1){
        xoxArray[i][j] = xox[index];
        index += 1;
    }
}
console.log(xox);

let xoxRealiz = "";
for ( let i = 0; i < xoxArray.length; i += 1 ){
    for ( let j = 0; j < xoxArray[i].length; j += 1 ){
        xoxRealiz += `${xoxArray[i][j]}`;                
    }
    xoxRealiz += `\n`;
}
 
console.log (xoxRealiz);



// Задание 7.6.5 - Есть объект obj. В одном из ключей объекта — массив.
// Добавьте в новый массив arrValues значения всех ключей объекта. 
// Если значение — массив, добавьте каждый элемент в массив arrValues.
// Выведите получившийся массив в консоль.

// Входные данные:

//     const obj = {
//         some: 'some',
//         dom: 'text',
//         arr: [1, 2, 3, 4, 5],
//         tom: 'there'
//     };

// Выходные данные: ["some", "text", 1, 2, 3, 4, 5, "there"]

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

let arrValues = [];
const arr1 = Object.values(obj);

for (let elem of arr1){
    if(!Array.isArray ( elem )){
        arrValues.push ( elem );       
    } else if ( Array.isArray ( elem )){
        for ( let el of elem){
                arrValues.push ( el );
            }
    }
}
console.log ( arrValues );