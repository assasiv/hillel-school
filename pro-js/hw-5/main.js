let operator;

do {
   operator = prompt('Какое вычисление вам необходимо произвести? (+ - / *)').replaceAll(" ", "");
} while (operator !== "+" && operator !== "-" && operator !== "/" && operator !== "*");

let operandQuantity; 
 
do {
 operandQuantity = +prompt('Какое количество вычеслительных операций вы будете производить? (Допустимое количество операций от 1 до 7)').replaceAll(" ", "");
} while(isNaN(operandQuantity) || operandQuantity <= 1 || operandQuantity >= 7);

let number;
let result = 0;

for (i = 1; i <= operandQuantity; i++) {

   do {
      number = +prompt(`Введите число ${i}`).replaceAll(" ", "");
   } while (isNaN(number));

   if (operator === "+") {
      result += number;
      
   } else if (operator === "-") {

      if (i === 1){
         result = number;
      } else {
         result -= number;
      }

   } else if (operator === "*") {

      if (i === 1){
         result = 1;
      }
      result *= number;

   }  else {

      if (i === 1){
         result = number;
      } else {
         result /= number;
      }
   }
}

alert(result);



