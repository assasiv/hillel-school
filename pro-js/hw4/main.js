let qnOne = prompt('Сколько будет 2+2?');
let qnTwo = prompt('Солнце встает на востоке?');
let qnThree = prompt('Сколько будет 5/0?');
let qnFour = prompt('Какого цвета небо?');
let qnFive = prompt('Какой правильный ответ на главный вопрос жизни, вселенной и всего такого?');

let anOne = '4';
let anTwo = 'да';
let anThree = 'бесконечность';
let anFour = 'синего';
let anFour2 = 'голубого';
let anFive = '42';

result = 0;
score = 10;

if(qnOne === anOne) {
    result += score;
}

if(qnTwo === anTwo){
    result += score;
}

if(qnThree === anThree){
    result += score; 
}

if(qnFour === anFour || qnFour === anFour2){
    result += score;
}

if(qnFive === anFive){
    result += score;
}

alert(`Ваш результат: ${result}`)