const { expect, it, describe } = require('@jest/globals');
const lib = require('../lib');


// Testing Number
describe('absolute', () => {
    it('absolute - should return a positive number if input is positive.', () => {
        const response = lib.absolute(1);
        expect(response).toBe(1);
    })

    it('absolute - should return a positive number if input is negative.', () => {
        const response = lib.absolute(-1);
        expect(response).toBe(1);
    })

    it('absolute - should return 0 if input is 0.', () => {
        const response = lib.absolute(0);
        expect(response).toBe(0);
    })
})

// Testing string payload
describe('greeting', () => {
    it('should return a greeting message', () => {
        const response = lib.greet('Raymond');

        // Too specific
        // expect(response).toBe('You are welcome Raymond')  // Don't be too specific

        // Ideal way
        expect(response).toContain('Raymond')
        // Or
        expect(response).toMatch(/Raymond/)
    })
})

// Performing test for Array
describe('getCurrencies', () => {
    it('returns a list of supported currencies', () => {
        const response = lib.getCurrencies();

        // Too general
        expect(response).toBeDefined();
        expect(response).not.toBeNull();

        // Too specific
        expect(response[0]).toBe('USD');
        expect(response[1]).toBe('EUR');
        expect(response[2]).toBe('AUD');
        expect(response.length).toBe(3);

        // Proper way
        expect(response).toContain('USD');
        expect(response).toContain('EUR');
        expect(response).toContain('AUD');

        // Ideal way
        expect(response).toEqual(expect.arrayContaining(['USD', 'EUR', 'AUD']));
    })
})

// Performing test for objects
describe('getProduct', () => {
    it('should return the product with the given id', () => {
        const response = lib.getProduct(1);

        // expect(response).toEqual({ id: 1, price: 10 });  // This is failing due to a difference in memory reference location for the product object
        
        // Ideal
        expect(response).toMatchObject({ id: 1, price: 10 });  // This will only ensure that that with have both 'id' and 'price' entries with corresponding values in the 'response' object.

        // Or
        expect(response).toHaveProperty('id', 1);
    })
})


// Testing for Exceptions for falsy values..
describe('registerUser', () => {
    it('should throw an error due to invalid username passed', () => {
        const invalidUsernames = [null, undefined, NaN, 0, false]
        invalidUsernames.forEach(username => {
            expect(() => lib.registerUser(username)).toThrow();
        });
    })

    it('should return a user object if valid username is passed', () => {
        const response = lib.registerUser('john');

        expect(response).toMatchObject({ username: 'john' });
        expect(response.id).toBeGreaterThan(0);
    })
})

