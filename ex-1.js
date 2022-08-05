export default function () {
  // Start coding here
  let accountBalance = 400;
  let depositAmountFromUser = "10";

  accountBalance = accountBalance + depositAmountFromUser;

  let accountBalanceMessage = `Your account balance is ${accountBalance}`;

  return accountBalanceMessage;
}
