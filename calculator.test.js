import {calculator} from "./main.js";


test("Calculator Addition works" , () => {
    expect(calculator.add(3,4)).toBe(7);
})

test("Calculator Subtraction Works" , () => {
   expect(calculator.subtract(5,4)).toBe(1);
})

test("Calculator Multiplication works" , () => {
    expect(calculator.multiply(3,4)).toBe(12);
})

test("Calculator Division works" , () => {
    expect(calculator.divide(10,5)).toBe(2);
})