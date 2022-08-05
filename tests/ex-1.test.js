// import displayAccountBalance from "../ex-1";
// import fs from "fs/promises";
// const content = await fs.readFile("../ex-1.js");
// console.log(content);

describe("Exercise 1", () => {
  it("Balance account message should display correctly", async () => {
    const code = `
      let accountBalance = 400;
      let depositAmountFromUser = +"10";

      accountBalance = accountBalance + depositAmountFromUser;
      let accountBalanceMessage = "Your account balance is " + accountBalance;
      
      return accountBalanceMessage;
      `;

    const func = new Function(code);

    const result = func();

    expect(result).toEqual("something");
  });
});
