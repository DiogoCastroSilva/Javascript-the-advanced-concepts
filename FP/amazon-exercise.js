// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
};

// Implement a cart feature:
// 1. Add items to cart;
// 2. Add 3% tax to item in cart
// 3. Buy item cart -> purchases
// 4. Empty cart

// Bonus:
// 1. Accept refunds
// 2. Track user history

console.log(purchaseItem(
    emptyCart,
    buyItem,
    AddTax,
    addItemToCart
)(user, { name: 'Laptop', price: 200 }));

const history = [];

const compose = (f, g) => (...args) => f(g(...args));

function purchaseItem(...fns) {
    history.push(`Purchasing item`);
    return fns.reduce(compose);
}

function addItemToCart(user, item) {
    history.push(`Purchasing item: ${item}, for user: ${user}`);
    const updatedCart = user.cart.concat(item);
    return Object.assign({}, user, { cart: updatedCart });
}

function AddTax(user) {
    history.push(`Adding tax: ${user}`);
    const { cart } = user;
    const tax = 1.3;
    const updatedCart = cart.map(item => ({
        name: item.name,
        price: item.price * tax
    }));
    history.push(`After adding tax: ${user}`);
    return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
    history.push(`Buying item(s): ${user}`);
    return Object.assign({}, { purchases: user.purchases.concat(user.cart) });
}

function emptyCart(user) {
    history.push(`Emptying cart: ${user}`);
    return Object.assign({}, user, { cart: [] });
}

function acceptRefunds(user, item) {
    history.push(`Accepting refunds: ${item}, for user: ${user}`);
    const newPurchases = user.purchases.filter(i => i.name !== item.name);
    const newCart = [...cart, item];
    history.push(`Refund accepted: ${user}`);
    return Object.assign({}, user, { cart: newCart, purchases: newPurchases });
}