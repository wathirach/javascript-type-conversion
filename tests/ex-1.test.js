import displayAccountBalance from "../ex-1";

describe("Exercise 1", () => {
  it("Balance account message should display correctly", () => {
    const result = displayAccountBalance();
    expect(result).toEqual("Your account balance is 410");
  });
});
