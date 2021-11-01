module.exports.getCustomerSync = customerId => {
    console.log('Reading customer from database.');
    return { id: customerId, points: 11 };
}

module.exports.getCustomer = async customerId => {
    console.log('Reading customer from database.');
    resolve({ id: customerId, points: 11 });
}
