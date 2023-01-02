// import displayAccountBalance from "../ex-1";
import fs from "fs/promises";

describe("Exercise 1 : Type Conversion", () => {
  test("Exercise 1 : ต้องมีการทำ Type Conversion", async () => {
    const data = await fs.readFile("./ex-1.js");
    let accountBalance = 400;
    let depositAmountFromUser = "10";

    const code = `${data}
    return accountBalance;
      `;

    const func = new Function(code);
    const result = func();

    expect(result).toBe(accountBalance + Number(depositAmountFromUser));
  });

  test('Exercise 1 : accountBalanceMessage จะต้องมีค่าเป็น "Your account balance is 410"', async () => {
    const data = await fs.readFile("./ex-1.js");

    const code = `${data}
    return accountBalanceMessage;
      `;

    const func = new Function(code);
    const result = func();

    expect(result).toEqual("Your account balance is 410");
  });
});
