let prices = document.querySelectorAll(".price");

let priceOne = parseInt(prices[0].textContent);
let priceTwo = parseInt(prices[1].textContent);
let priceThree = parseInt(prices[2].textContent);
let priceFour = parseInt(prices[3].textContent);

let total = priceOne + priceTwo + priceThree + priceFour;
let currency = " руб.";
let textTotal = "Итого: "
console.log(total);

let parent = document.getElementById("total");
parent.textContent = textTotal + total + currency;

let button = document.getElementById("applyDiscount");
button.addEventListener("click", function (){
    parent.textContent = `${textTotal}${total - (total * 0.2)}${currency}`
    button.setAttribute("disabled", "true");
    button.style.opacity = "0.7";
})