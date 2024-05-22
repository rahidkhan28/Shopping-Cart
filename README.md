# Shopping Cart Application

## Overview

This is a simple shopping cart application built with vanilla JavaScript. The application allows users to view a list of products, add products to a cart, adjust quantities, remove products from the cart, and view the total and average price of items in the cart.

## Features

- Display a list of products
- Add products to the cart
- Adjust the quantity of products in the cart
- Remove products from the cart
- View total price and average price of items in the cart
- Clear the entire cart
- Toggle the visibility of the cart

## Files

- `index.html`: The HTML file containing the structure of the application.
- `style.css`: The CSS file containing the styles for the application.
- `script.js`: The JavaScript file containing the logic for the application.

## How to Use

1. Clone the repository or download the files.
2. Open `index.html` in a web browser.
3. Interact with the product list and cart using the provided buttons.

## JavaScript Functions

### Product Display and Cart Management

- `displayProducts()`: Displays the list of products and updates the buttons based on the cart's state.
- `displayCart()`: Displays the list of items in the cart, along with the total and average price.
- `addToCart(productId)`: Adds a product to the cart or increments its quantity if it is already in the cart.
- `removeFromCart(productId)`: Removes a product from the cart.
- `incrementQuantity(productId)`: Increments the quantity of a product in the cart.
- `decrementQuantity(productId)`: Decrements the quantity of a product in the cart or removes it if the quantity is 1.
- `calculateTotalPrice()`: Calculates the total price of items in the cart.
- `calculateAveragePrice()`: Calculates the average price of items in the cart.
- `clearCart()`: Clears all items from the cart and displays a message.
- `toggleCart()`: Toggles the visibility of the cart panel.

### Event Listeners

- `DOMContentLoaded`: When the DOM content is loaded, the `displayProducts` function is called to display the initial list of products.

## Pseudo Code

```plaintext
Initialize product list with unique products and duplicates

Initialize empty cart

Function displayProducts:
    Clear product list HTML
    For each product in product list:
        Find product in cart
        Create a product div with image, name, price
        If product is in cart:
            Add decrement, quantity, increment buttons to product div
        Else:
            Add "Add to Cart" button to product div
        Append product div to product list HTML

Function displayCart:
    Clear cart list HTML
    For each item in cart:
        Create a cart item div with name, price, decrement, quantity, increment, and remove buttons
        Append cart item div to cart list HTML
    Update total price and average price HTML with calculated values

Function addToCart(productId):
    Find product by productId in product list
    Find item by productId in cart
    If item exists in cart:
        Increment item quantity
    Else:
        Add product to cart with quantity 1
    Call displayProducts
    Call displayCart

Function removeFromCart(productId):
    Filter out item by productId from cart
    Call displayProducts
    Call displayCart

Function incrementQuantity(productId):
    Find item by productId in cart
    Increment item quantity
    Call displayProducts
    Call displayCart

Function decrementQuantity(productId):
    Find item by productId in cart
    If item quantity is greater than 1:
        Decrement item quantity
    Else:
        Call removeFromCart
    Call displayProducts
    Call displayCart

Function calculateTotalPrice:
    Initialize total to 0
    For each item in cart:
        Add item price multiplied by quantity to total
    Return total

Function calculateAveragePrice:
    If cart is empty:
        Return 0
    Calculate total price using calculateTotalPrice
    Calculate total items by summing item quantities
    Return total price divided by total items, formatted to 2 decimal places

Function clearCart:
    Clear cart
    Call displayProducts
    Call displayCart
    Show alert with "Your cart is empty" message

Function toggleCart:
    If cart page is visible:
        Hide cart page
    Else:
        Show cart page

Event listener for DOMContentLoaded:
    Call displayProducts


### Pseudo Code

```plaintext
Initialize product list with unique products and duplicates

Initialize empty cart

Function displayProducts:
    Clear product list HTML
    For each product in product list:
        Find product in cart
        Create a product div with image, name, price
        If product is in cart:
            Add decrement, quantity, increment buttons to product div
        Else:
            Add "Add to Cart" button to product div
        Append product div to product list HTML

Function displayCart:
    Clear cart list HTML
    For each item in cart:
        Create a cart item div with name, price, decrement, quantity, increment, and remove buttons
        Append cart item div to cart list HTML
    Update total price and average price HTML with calculated values

Function addToCart(productId):
    Find product by productId in product list
    Find item by productId in cart
    If item exists in cart:
        Increment item quantity
    Else:
        Add product to cart with quantity 1
    Call displayProducts
    Call displayCart

Function removeFromCart(productId):
    Filter out item by productId from cart
    Call displayProducts
    Call displayCart

Function incrementQuantity(productId):
    Find item by productId in cart
    Increment item quantity
    Call displayProducts
    Call displayCart

Function decrementQuantity(productId):
    Find item by productId in cart
    If item quantity is greater than 1:
        Decrement item quantity
    Else:
        Call removeFromCart
    Call displayProducts
    Call displayCart

Function calculateTotalPrice:
    Initialize total to 0
    For each item in cart:
        Add item price multiplied by quantity to total
    Return total

Function calculateAveragePrice:
    If cart is empty:
        Return 0
    Calculate total price using calculateTotalPrice
    Calculate total items by summing item quantities
    Return total price divided by total items, formatted to 2 decimal places

Function clearCart:
    Clear cart
    Call displayProducts
    Call displayCart
    Show alert with "Your cart is empty" message

Function toggleCart:
    If cart page is visible:
        Hide cart page
    Else:
        Show cart page

Event listener for DOMContentLoaded:
    Call displayProducts
