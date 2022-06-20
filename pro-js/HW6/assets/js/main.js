let period;

while (true) {
    period = prompt("Please choose winter or summer?");
    if (!period) {
        continue;
    }
    period = period.replaceAll(" ", "").toLowerCase();
    if (period === "winter" || period === "summer") {
        break;
    }
}

let price;

if (period === "winter") {
    price = 2;
} else if (period === "summer") {
    price = 0.8;
}

while(true) {
    category = prompt("Do you want to buy vegetables or fruits?");

    if (!category) {
        continue;
    }
    category = category.replaceAll(" ", "").toLowerCase();
    if (category === "vegetables" || category === "fruits") {
        break; 
    }
}

let vegetables = ["cabbage", "avocado", "tomato"];
let fruits = ["grapes", "raspberry", "coconut"];
let productOfChoise;

if (category === "vegetables") {
    productOfChoise = vegetables;
} else {
    productOfChoise = fruits;
}

let product;

label: while(true) {
    product = prompt(`Available products are ${productOfChoise}. Which one you want to buy?`);

    if (!product) {
        continue;
    } 
    product = product.replaceAll(" ", "").toLowerCase();

    for (i = 0; i < productOfChoise.length; i++) {

        if(productOfChoise[i] === product) {
            break label;
        }
    }
}

let productPrice;
let img;

switch(product) {
    case "cabbage": 
        productPrice = 8;
        img = "./assets/images/vegetables/cabbage.svg";
        break;
    case "avocado": 
        productPrice = 30;
        img = "./assets/images/vegetables/avocado.svg";
        break;
    case "tomato": 
        productPrice = 10;
        img = "./assets/images/vegetables/tomato.svg";
        break;
    case "grapes": 
        productPrice = 20;
        img = "./assets/images/fruits/grapes.svg";
        break;
    case "raspberry": 
        productPrice = 25;
        img = "./assets/images/fruits/raspberry.svg";
        break;
    case "coconut": 
        productPrice = 50;
        img = "./assets/images/fruits/coconut.svg";
        break;
}

let productQuantity;

do { 
    productQuantity = parseInt(prompt("How many products do you want to buy?"));
} while(productQuantity == null || isNaN(productQuantity) || productQuantity < 1 || productQuantity > 50);

let finalPrice = price * productPrice * productQuantity;

document.write(`
    <div class="product">
        <img src="${img}">
        <p>Selected product: <b>${product}</b></p>
        <p>Count of cabbages: <b>${productQuantity}</b></p>
        <p>Selected period: <b>${period}</b></p>
        <p>Selected category: <b>${category}</b></p>
        <p>Final sum: <b>${finalPrice}</b></p>
    </div>
`)






