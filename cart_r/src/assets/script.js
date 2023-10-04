/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

let totalPaid = 0;

let products = [
	{
		"productId": 1,
		"name": "Cherry",
		"price": 5,
		"quantity": 0,
		"image": "./images/cherry.jpg"
	},
	{
		"productId": 2,
		"name": "Orange",
		"price": 15,
		"quantity": 0,
		"image": "./images/orange.jpg"
	},
	{
		"productId": 3,
		"name": "Strawberry",
		"price": 10,
		"quantity": 0,
		"image": "./images/strawberry.jpg"
	},
	{
		"productId": 4,
		"name": "Banana",
		"price": 2,
		"quantity": 0,
		"image": "./images/banana.jpg"
	},
	{
		"productId": 5,
		"name": "Apple",
		"price": 8,
		"quantity": 0,
		"image": "./images/apple.jpg"
	},
	{
		"productId": 6,
		"name": "Lemon",
		"price": 5,
		"quantity": 0,
		"image": "./images/lemon.jpg"
	},
	{
		"productId": 7,
		"name": "Mango",
		"price": 25,
		"quantity": 0,
		"image": "./images/mango.jpg"
	},
	{
		"productId": 8,
		"name": "Pear",
		"price": 15,
		"quantity": 0,
		"image": "./images/pear.jpg"
	},
	{
		"productId": 9,
		"name": "Pineapple",
		"price": 50,
		"quantity": 0,
		"image": "./images/pineapple.jpg"
	},
	{
		"productId": 10,
		"name": "Watermelon",
		"price": 30,
		"quantity": 0,
		"image": "./images/watermelon.jpg"
	}
]
/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function getProductIndexFromCart(productId) {
	let productIndex;
	for (let i = 0; i < cart.length; i++) {
		if (cart[i].productId == productId) {
			productIndex = i;
		} 
	}
	return productIndex;
}

function getProductIndexFromProductList(productId) {
	let productIndex;
	for (let i = 0; i < products.length; i++) {
		if (products[i].productId == productId) {
			productIndex = i;
		}
	}
	return productIndex;
}

function addProductToCart(productId) {
	let itemFound = getProductIndexFromCart(productId);
	let productListIndex = getProductIndexFromProductList(productId);
	products[productListIndex].quantity += 1;
	if (itemFound == undefined) {
		cart[cart.length] = products[productListIndex]
	}
}


/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
	let productIndex = getProductIndexFromProductList(productId);
	products[productIndex].quantity += 1;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
	let productIndex  = getProductIndexFromProductList(productId);
	let cartProductIndex = getProductIndexFromCart(productId)
	products[productIndex].quantity -= 1;
	if (products[productIndex].quantity == 0) {
		cart.splice(cartProductIndex, 1);
	}
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
	let productIndex = getProductIndexFromProductList(productId);
	products[productIndex].quantity = 0;
	cart.splice(getProductIndexFromCart(productId), 1);
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
	let sum = 0;
	cart.forEach(function (item) {
		sum += item.price * item.quantity;
	});
	return sum;
}
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
	cart = [];
	products.forEach(function (product) {
		product.quantity = 0;
	});
	totalPaid = 0;
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount) {
	totalPaid += amount;
	return totalPaid - cartTotal();
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

const EURUSD = 1.06;
const EURYEN = 157.96;
const USDYEN = 149.33;

let currentCurrency = 'USD'

function modifyCurrency(rate) {
	products.forEach((product) => {
		product.price = Math.round(product.price * rate);
	});
}

function currency(currencySymbol) {
	switch(currencySymbol) {
		case 'EUR':
			if (currentCurrency == 'USD') {
				modifyCurrency((1/EURUSD));
			} else if (currentCurrency == 'YEN') {
				modifyCurrency((1/EURYEN));
			}
			currentCurrency = currencySymbol;
			return;
		case 'USD':
			if (currentCurrency == 'EUR') {
				modifyCurrency(EURUSD);
			} else if (currentCurrency == 'YEN') {
				modifyCurrency((1/USDYEN));
			}
			currentCurrency = currencySymbol;
			return;
		case 'YEN':
			if (currentCurrency == 'EUR') {
				modifyCurrency(EURYEN);
			} else if (currentCurrency == 'USD') {
				modifyCurrency(USDYEN);
			}
			currentCurrency = currencySymbol;
			return;
		default:
			return;
	}
}

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   currency
}
