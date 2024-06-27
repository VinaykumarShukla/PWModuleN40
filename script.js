// Project 1

document.querySelector('.button').onclick = function(){
    let password = document.querySelector('.password').value,
    confirmPassword = document.querySelector('.confirmPassword').value;
   
    if(password == ""){
    alert("Field connot be empty.");
}
else if (password != confirmPassword){
        alert("Password didn't match.Password Validation Unsucceful.");
        return false
}
else if (password == confirmPassword) {
        alert("Password Matched.Password Validation Succeful.");
}
return true
}


// Project 2
    
function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const operator = document.getElementById('operator').value;
  const num2 = parseFloat(document.getElementById('num2').value);
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        result = "Division by zero error!";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = "Invalid operator";
  }

  document.getElementById('result').textContent = result;
}
   


// Project 3


const inputColor = document.querySelector("#inputColorName");
const firstColorInput = document.querySelector("#Color1");
const secondColorInput = document.querySelector("#Color2");
const colorBox = document.querySelector("#resultantColorBox");
const colorName = document.querySelector("#resultantColorName");

inputColor.addEventListener("submit", function (event) {
    event.preventDefault();

  const firstColor = firstColorInput.value.toLowerCase();
  const secondcolor = secondColorInput.value.toLowerCase();

  let mixedColor;
  switch (firstColor) {
    case "red":
      switch (secondcolor) {
        case "blue":
          mixedColor = "purple";
          break;
        case "yellow":
          mixedColor = "orange";
          break;
        default:
          mixedColor = "Invalid color combination";
      }
      break;
    case "blue":
      switch (secondcolor) {
        case "red":
          mixedColor = "purple";
          break;
        case "yellow":
          mixedColor = "green";
          break;
        default:
          mixedColor = "invalid color combination";
      }
      break;
    case "yellow":
      switch (secondcolor) {
        case "red":
          mixedColor = "orange";
          break;
        case "blue":
          mixedColor = "green";
          break;
        default:
          mixedColor = "invalid color combination";
      }
      break;
    default:
      mixedColor = "invalid color combination";
  }

  if (mixedColor == "invalid color combination") {
    resultantColorBox.style.backgroundColor = "white";
  } else {
    colorBox.style.backgroundColor = mixedColor;
  }
  colorName.textContent = mixedColor;
});


// Project 4

function findHighestMarks() {
  const mark1 = parseInt(document.getElementById("mark1").value);
  const mark2 = parseInt(document.getElementById("mark2").value);
  const mark3 = parseInt(document.getElementById("mark3").value);
  const mark4 = parseInt(document.getElementById("mark4").value);
  const mark5 = parseInt(document.getElementById("mark5").value);

  const highest = (mark1 > mark2) ? mark1 : mark2;
  const highestSoFar = (highest > mark3) ? highest : mark3;
  const finalHighest = (highestSoFar > mark4) ? highestSoFar : mark4;
  const finalResult = (finalHighest > mark5) ? finalHighest : mark5;

  document.getElementById("result1").innerHTML = `Highest Marks: ${finalResult}`;
}


// Project 5

function capitalizeName() {
  const name = document.getElementById('name').value;
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  document.getElementById('capitalizedName').textContent = "Capitalized Name: " + capitalizedName;
}


// Project 6

function countVowels() {
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value.toLowerCase(); // Convert input to lowercase
  let vowelCount = 0;

  for (let i = 0; i < name.length; i++) {
    const char = name[i];
    if (["a", "e", "i", "o", "u"].includes(char)) {
      vowelCount++;
    }
  }

  const vowelCountDisplay = document.getElementById("vowelCount");
  vowelCountDisplay.textContent = `Number of vowels: ${vowelCount}`;
}


// Project 7

const cartContainer = document.getElementById('cart-container');
const cartList = document.getElementById('cart-list');
const addItemBtn = document.getElementById('add-item-btn');
const itemInput = document.getElementById('item-input');

let cartItems = [];

addItemBtn.addEventListener('click', () => {
  const itemName = itemInput.value.trim();
  if (itemName!== '') {
    // Check if the item already exists in the cart
    if (!cartItems.includes(itemName)) {
      // Add the item to the cart
      cartItems.push(itemName);
      const cartItem = document.createElement('li');
      cartItem.textContent = itemName;
      cartList.appendChild(cartItem);
      itemInput.value = '';
    } else {
      alert(`You already have ${itemName} in your cart.`);
    }
  }
});


// Project 8

function generateTriangle() {
  const numRows = document.getElementById("numRows").value;
  let pattern = "";
  for (let i = 1; i <= numRows; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    pattern += "<br>";
  }
  document.getElementById("triangle").innerHTML = pattern;
}


// Project 9

document.getElementById('btn9').addEventListener('click', function() {
  let input = document.getElementById('inputDivisible').value;
  let numbers = input.split(',').map(Number);
  

  let outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '';
  

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (num % 2 === 0) {
      continue;
    }
    if (num % 3 === 0) {
      outputDiv.innerHTML += `<p>${num}</p>`;
    }
  }
});

  // Project 10

  let cart = [1, 2, 3, 4, 5]; // initial cart array with incorrect quantities

document.getElementById('addItem').addEventListener('click', () => {
  // add item to cart with incorrect quantity (half of the actual quantity)
  cart.push(Math.floor(Math.random() * 10) / 2);
  updateCartList();
});

function correctCartQuantities(cart) {
  return cart.map(quantity => quantity * 2);
}

function updateCartList() {
  const correctedCart = correctCartQuantities(cart);
  const cartList = document.getElementById('cart-list1');
  cartList.innerHTML = '';
  correctedCart.forEach((quantity, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${index + 1}: Quantity - ${quantity}`;
    cartList.appendChild(listItem);
  });
}

updateCartList();


// Project 11

document.getElementById('convert').addEventListener('click', () => {
  const celsius = document.getElementById('celsius').value;
  const fahrenheit = convertCelsiusToFahrenheit(celsius);
  document.getElementById('result11').innerHTML = `Temperature in Fahrenheit: ${fahrenheit}°F`;
});

function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}



 // Project 12


 document.getElementById('calculate').addEventListener('click', () => {
  const days = document.getElementById('days').value;
  const carType = document.getElementById('carType').value;
  const rentalCost = calculateRentalCost(days, carType);
  document.getElementById('result12').innerHTML = `Rental Cost: Rs. ${rentalCost}/-`;
});

function calculateRentalCost(days, carType) {
  let dailyRate = 0;
  switch (carType) {
    case 'Economy':
      dailyRate = 4000;
      break;
    case 'Midsize':
      dailyRate = 10000;
      break;
    case 'Luxury':
      dailyRate = 20000;
      break;
    default:
      console.error('Invalid car type');
      return 0;
  }
  return days * dailyRate;
}


// Project 13

const form = document.getElementById('bill-form');
const resultDiv = document.getElementById('bill-result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const dishCost = parseInt(document.getElementById('dish-cost').value);
  const numPeople = parseInt(document.getElementById('num-people').value);
  const totalBill = dishCost * numPeople;
  const billPerPerson = totalBill / numPeople;

  const resultHTML = `
    <h2>Bill Result</h2>
    <p>Total Bill: $${totalBill.toFixed(2)}</p>
    <p>Bill per person: $${billPerPerson.toFixed(2)}</p>
  `;

  resultDiv.innerHTML = resultHTML;
});

// Project 14

const cartList1 = document.getElementById('cart-list2');
const calculateTotalButton = document.getElementById('calculate-total');
const totalResultDiv = document.getElementById('total-result');

// sample cart data
const cart1 = [
  { unitPrice: 10.99, quantity: 2 },
  { unitPrice: 5.99, quantity: 3 },
  { unitPrice: 7.99, quantity: 1 },
];

// render cart items
cart1.forEach((item, index) => {
  const listItem = document.createElement('li');
  listItem.textContent = `Item ${index + 1}: $${item.unitPrice} x ${item.quantity}`;
  cartList1.appendChild(listItem);
});

// calculate total cost function
const calculateTotalCost = (cart1) => {
  return cart1.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
};

calculateTotalButton.addEventListener('click', () => {
  const totalCost = calculateTotalCost(cart1);
  const totalResultHTML = `
    <h2>Total Cost:</h2>
    <p>$${totalCost.toFixed(2)}</p>
  `;
  totalResultDiv.innerHTML = totalResultHTML;
});



// Project 15


const originalPriceInput = document.getElementById('original-price');
const discountedPriceInput = document.getElementById('discounted-price');
const discountPercentageDiv = document.getElementById('discount-percentage');

// calculate discount percentage function
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
  const discountAmount = originalPrice - discountedPrice;
  const discountPercentage = (discountAmount / originalPrice) * 100;
  return parseFloat(discountPercentage.toFixed(2));
};

originalPriceInput.addEventListener('input', () => {
  const originalPrice = parseFloat(originalPriceInput.value);
  const discountedPrice = parseFloat(discountedPriceInput.value);
  const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  discountPercentageDiv.textContent = `Discount Percentage: ${discountPercentage}%`;
});

discountedPriceInput.addEventListener('input', () => {
  const originalPrice = parseFloat(originalPriceInput.value);
  const discountedPrice = parseFloat(discountedPriceInput.value);
  const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  discountPercentageDiv.textContent = `Discount Percentage: ${discountPercentage}%`;
});



// Project 16


(() => {
  const randomNumberContainer = document.getElementById('random-number-container');
  const randomNumberElement = document.getElementById('random-number');
  const refreshButton = document.getElementById('refresh-button');

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumberElement.textContent = `Random Number: ${randomNumber}`;
  };

  generateRandomNumber();

  refreshButton.addEventListener('click', generateRandomNumber);
})();


// Project 17

const customerAccounts = {
  "John Doe": { balance: 1000 },
  "Jane Doe": { balance: 500 },
  // Add more customers here
};

const updateAccountBalance = (customerName, amount, transactionType) => {
  if (customerAccounts[customerName]) {
    if (transactionType === "deposit") {
      customerAccounts[customerName].balance += amount;
    } else if (transactionType === "withdrawal") {
      if (customerAccounts[customerName].balance >= amount) {
        customerAccounts[customerName].balance -= amount;
      } else {
        alert("Insufficient balance");
      }
    }
  } else {
    alert("Customer not found");
  }
};

const displayAccountBalance = (customerName) => {
  if (customerAccounts[customerName]) {
    document.getElementById('account-balance').textContent = `Account Balance: ${customerAccounts[customerName].balance}`;
  } else {
    document.getElementById('account-balance').textContent = "Customer not found";
  }
};

document.getElementById('submit-button').addEventListener('click', (e) => {
  e.preventDefault();
  const customerName = document.getElementById('customer-name').value;
  const amount = parseInt(document.getElementById('amount').value);
  const transactionType = document.getElementById('transaction-type').value;
  updateAccountBalance(customerName, amount, transactionType);
  displayAccountBalance(customerName);
});



//  Project 18

const heading = document.getElementById("heading");
    const button = document.getElementById("toggle-button");
    let currentState = "initial";

    button.addEventListener("click", () => {
      if (currentState === "initial") {
        heading.textContent = "PW Skills";
        currentState = "changed";
      } else {
        heading.textContent = "The most affordable learning platform";
        currentState = "initial";
      }
    });


    // Project 19

    const form1 = document.getElementById("login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const validationMessage = document.getElementById("validation-message");

    form1.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent form submission

      const emailValue = emailInput.value;
      const passwordValue = passwordInput.value;

      if (!emailValue.includes("@") || passwordValue.length < 8) {
        validationMessage.textContent = "Invalid email or password!";
        validationMessage.className = "error";
      } else {
        validationMessage.textContent = "Valid email and password!";
        validationMessage.className = "success";
      }
    });


    // Project 20


    const listItemArray = [
      "Learn HTML and CSS",
      "Understand JavaScript fundamentals",
      "Master DOM manipulation",
      "Discover advanced JavaScript concepts",
      "Build real-world projects"
    ];

    const listElement = document.getElementById("list");
    const addItemButton = document.getElementById("add-item");
    const messageElement = document.getElementById("message");

    let currentIndex = 0;

    addItemButton.addEventListener("click", () => {
      if (currentIndex < listItemArray.length) {
        const listItem = document.createElement("li");
        listItem.textContent = listItemArray[currentIndex];
        listElement.appendChild(listItem);
        currentIndex++;
      } else {
        messageElement.textContent = "All items have been added!";
      }
    });


    // Project 21


    const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', addTodoItem);

function addTodoItem() {
    const todoText = todoInput.value.trim();
    if (todoText!== '') {
        const todoItem = document.createElement('li');
        todoItem.textContent = todoText;
        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
}


// project 23

const colors = ['#FF69B4', '#33CC33', '#6666FF', '#FFCC00', '#0099CC'];
const button1 = document.getElementById('color-button');

button1.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  document.body.style.background = randomColor;
});


// Project 24

const paragraph = document.getElementById('paragraph');
const words = paragraph.textContent.split(' ');

words.forEach((word) => {
  if (word.length > 8) {
    const highlightedWord = `<span style="background-color: yellow">${word}</span>`;
    paragraph.innerHTML = paragraph.innerHTML.replace(word, highlightedWord);
  }
});


// Project 25


const image = document.getElementById('image');
let x = 1200;
let y = 2160;
let speed = 5;

document.addEventListener('keydown', (event) => {
  switch (event.keyCode) {
    case 37: // Left arrow
      x -= speed;
      break;
    case 38: // Up arrow
      y -= speed;
      break;
    case 39: // Right arrow
      x += speed;
      break;
    case 40: // Down arrow
      y += speed;
      break;
  }
  image.style.top = `${y}px`;
  image.style.left = `${x}px`;
});