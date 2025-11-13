import {analyzeArray} from "./main.js";

test("Analyze array function works" , ()=>{
    expect(analyzeArray([3,2,5,7,4,3,2,5])).toEqual({
        average: 3.875,
        min: 2,
        max: 7,
        length: 8
    })
})