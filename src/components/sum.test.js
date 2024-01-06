import {Sum} from "./Sum";
test("test sum of 2 numbers", () =>{
    const result = Sum(2, 5);
    expect(result).toBe(7);
})