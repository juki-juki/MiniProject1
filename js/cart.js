// Get the cart icon and cart offcanvas
const cartIcon = document.getElementById('cart-icon');
const cartOffcanvas = document.getElementById('cart-offcanvas');

// Add a click event listener to the cart icon to toggle the cart offcanvas
cartIcon.addEventListener('click', () => {
    const offcanvas = new bootstrap.Offcanvas(cartOffcanvas);
    offcanvas.toggle();
});



const cartItems = document.getElementById('cart-items');

// Function to add an item to the cart
function addItemToCart(itemName, itemPrice) {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = `${itemName} - $${itemPrice}`;
    cartItems.appendChild(listItem);
}
