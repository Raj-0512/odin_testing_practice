import {caesarCipher} from "./main.js";

test("CaesarCipher function is working" , () => {
    expect(caesarCipher("World" , 2)).toBe("Yqtnf");
})