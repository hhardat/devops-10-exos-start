const { getCurrentMonth } = require("../app");
const { isAdmin } = require("../app");
const { removeXNames } = require("../app");

jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));

describe("app tests suites - getCurrentMonth", () => {
    test("should return the current month", () => {
        const result = getCurrentMonth();
        expect(result).toBe("January");
    });
});

describe("app tests suites - isAdmin", () => {
    test("should return false as user is not admin", () => {
        const result = isAdmin();
        expect(result).toBe(false);
    });

    test("should return true as user is admin", () => {
        const result = isAdmin("admin");
        expect(result).toBe(true);
    });
});


describe("remove X names from all names test suite", () => {
    test("should not remove anyone from names ", () => {
        const names = ["John", "Peter", "Sara"];
        const result = removeXNames(names, "X");
        expect(result).toEqual(names);
    });

    test("should remove DMX from names ", () => {
        const names = ["DMX", "Peter", "Sara"];
        const result = removeXNames(names, "X");
        expect(result).toEqual([ "Peter", "Sara"]);
    });

    test("should remove xeo and Xzibit from names ", () => {
        const names = ["xeo", "Xzibit", "Sara"];
        const result = removeXNames(names, "X");
        expect(result).toEqual([ "Sara"]);
    });
});