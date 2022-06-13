import { createAdder } from "../Ex1.js";

describe("test adder", () => {
    it("make adder0 and verify that it is function" , () => {
        const adder0 = createAdder(0);
        expect(typeof(adder0)).toBe("function");
    }),
    it("make adder5 and add 5 to it, must be 10", () => {
        const adder5 = createAdder(5);
        expect(adder5(5)).toBe(10);
    }),
    it("make adder'5' and add 5 to it, must be '55'", () => {
        const adderString5 = createAdder("5");
        expect(adderString5(5)).toBe("55");
    }),
    it("make adderNull and add 5 to it, must be 5", () => {
        const adderNull = createAdder(null);
        expect(adderNull(5)).toBe(5);
    }),
    it("make adderTrue and add false to it, must be 1", () => {
        const adderTrue = createAdder(true);
        expect(adderTrue(false)).toBe(1);
    }),
    it("make adderUndefined and add 5 to it, must be NaN", () => {
        const adderUndefined = createAdder(undefined);
        expect(adderUndefined(5)).toBe(NaN);
    })
});