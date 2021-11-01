const db = require('./db');

module.exports.greet = name => {
    return `You are welcome ${name}.`
}

module.exports.addition = (a, b) => {
    const c = a + b;
    return c;
}

module.exports.getProduct = (productId) => {
    return {id: productId, price: 10}
}

module.exports.getCurrencies = () => {
    return ['USD', 'EUR', 'AUD']
}

module.exports.absolute = number => {
    if (number > 0) return number;
    if (number < 0) return -number;
    return 0
}

module.exports.registerUser = username => {
    if (!username) throw new Error('Username is required.')
    return {id: new Date().getTime(), username: username}
}

module.exports.applyDiscount = order => {
    const customer = db.getCustomerSync(order.customerId);

    if (customer.points > 10) {
        order.totalPrice *= 0.9;
    }
}

module.exports.notifyCustomer = order => {
    const customer = db.getCustomerSync(order.customerId);

    mail.send(customer.email, 'Your order was placed successfully.');
}
