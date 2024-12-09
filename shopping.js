// Create an empty cart object to store the items
var cart = {};

// Function to add an item to the cart
function addItemToCart(itemId, itemName, itemPrice, quantity) {
  // Check if the item is already in the cart
  if (cart[itemId]) {
    // If the item is already in the cart, increment the quantity
    cart[itemId].quantity += quantity;
  } else {
    // If the item is not in the cart, add it with a quantity of 1
    cart[itemId] = {
      name: itemName,
      price: itemPrice,
      quantity: quantity
    };
  }
  // Update the cart count and total
  updateCartCountAndTotal();
}

// Function to update the cart count and total
function updateCartCountAndTotal() {
  var cartCount = 0;
  var cartTotal = 0;
  for (var itemId in cart) {
    cartCount += cart[itemId].quantity;
    cartTotal += cart[itemId].price * cart[itemId].quantity;
  }
  // Update the cart count and total in the UI
  document.getElementById("cart-count").innerHTML = cartCount;
  document.getElementById("cart-total").innerHTML = cartTotal.toFixed(2);
}

// Example usage:
// Add an item to the cart when a button is clicked
document.getElementById("add-to-cart").addEventListener("click", function() {
  addItemToCart("item-1", "Item 1", 19.99, 1);
});

// Add another item to the cart when another button is clicked
document.getElementById("add-to-cart2").addEventListener("click", function() {
  addItemToCart("item-2", "Item 2", 9.99, 2);
});