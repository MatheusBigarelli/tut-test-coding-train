const sum = require("./script");

test("Adds 1 and 2. Should be 3", () => {
    expect(sum(1, 2)).toBe(3);
});
