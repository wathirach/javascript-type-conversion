// import displayAccountBalance from "../ex-1";
import fs from "fs/promises";

describe("Exercise 1", () => {
  it("Balance account message should display correctly", async () => {
    const data = await fs.readFile("./ex-1.js");

    const code = `${data}
    return accountBalanceMessage;
      `;

    const func = new Function(code);
    const result = func();

    expect(result).toEqual("Your account balance is 410");
  });
});
