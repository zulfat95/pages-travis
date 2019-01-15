import {cashback} from "../js/lib.js";

test('should calculate cashback under limit', () => {
    const result = cashback(1000);

    expect(result).toBe(50);
});

test('should calculate cashback over limit', () => {
    const result = cashback(1000000);

    expect(result).toBe(3000);
});
