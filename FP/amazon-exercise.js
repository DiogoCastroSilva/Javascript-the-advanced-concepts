// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchase: []
};

// Implement a cart feature:
// 1. Add items to cart;
// 2. Add 3% tax to item in cart
// 3. Buy item cart -> purchases
// 4. Empty cart

// Bonus:
// 1. Accept refunds
// 2. Track user history

function addItemToCart(cart, item) {
    return [...cart, item];
}

function AddTax(cart, tax = 3) {
    return cart.map(item => {
        item.price *= tax / 100;
        return item;
    });
}

function buyItem(purchase, item) {
    return [...purchase, item];
}

function emptyCart() {
    return [];
}

function acceptRefunds(purchase, cart, item) {
    const newPurchase = purchase.filter(i => i.name !== item.name);
    const newCart = [...cart, item];
    return {
        cart: newCart,
        purchase: newPurchase
    };
}