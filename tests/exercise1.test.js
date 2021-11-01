const { describe, it, expect } = require("@jest/globals");
const { fizzBuzz } = require("../exercise1");

describe('fizzBuzz', () => {
    it('should throw an exception for invalid input', () => {
        const invalidInputs = [null, undefined, 'string', [], {}, false];

        invalidInputs.forEach(input => {
            expect(() => fizzBuzz(input)).toThrow();
        });
    });

    it('should return Fizz', () => {
        const response = fizzBuzz(3);
        expect(response).toBe('Fizz');
    });

    it('should return Buzz', () => {
        const response = fizzBuzz(5);
        expect(response).toBe('Buzz');
    });

    it('should return Buzz', () => {
        const response = fizzBuzz(15);
        expect(response).toBe('FizzBuzz');
    });

    it('should return input if not visible by 3 or 5', () => {
        const response = fizzBuzz(7);
        expect(response).toBe(7);
    });
});
