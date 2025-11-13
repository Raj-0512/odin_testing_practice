export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


export function reverseString(string)
{
    return string.split('').reverse().join('')

}

export const calculator = {
    constructor(num1 , num2)
    {
        this.num1 = num1;
        this.num2 = num2;
    } ,

    add(num1  , num2)
    {
       return num1 + num2;
    },

    subtract(num1 , num2)
    {
        return num1 - num2;
    },

    multiply(num1 , num2)
    {
        return num1 * num2;
    },

    divide(num1 , num2)
    {
        return num1 / num2;
    }
}

export function caesarCipher(str, shift) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        let code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            let shifted = ((code - 65 + shift) % 26 + 26) % 26 + 65;
            result += String.fromCharCode(shifted);
        } else if (code >= 97 && code <= 122) {
            let shifted = ((code - 97 + shift) % 26 + 26) % 26 + 97;
            result += String.fromCharCode(shifted);
        } else {
            result += c;
        }
    }
    return result;
}

export function analyzeArray(array)
{
    let sum = array.reduce(function(a, b) { return a + b; }, 0);

    const object = {
        average: sum / array.length,
        min: Math.min(...array),
        max : Math.max(...array),
        length : array.length
    }
    return object;
}
