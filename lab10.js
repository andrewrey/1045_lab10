///////////////////////////////
/////// selectors /////////////
///////////////////////////////
let balanceDisplay = document.querySelector(`#display`);
let depositInput = document.querySelector("#dField");
let withdrawalInput = document.querySelector(`#wField`);
let outputMessage = document.querySelector("#message");
let makeDepButton = document.querySelector('[value="Make Deposit"]');
let makeWithdrawalButton = document.querySelector(`[value="Make Withdrawal"]`);
//////////////////////////////
//// Global Variables ////////

let balance = 0;

//////////////////////////////
///////// Functions //////////
//////////////////////////////

const makeDeposit = () => {
  let depositAmount = +depositInput.value;
  deposit(depositAmount);
  depositInput.value = "";
};

const deposit = (amnt) => {
  if (amnt <= 0 || isNaN(amnt)) {
    display("Invalid Amount", balance);
  } else {
    balance += amnt;
    display(`Your balance is: ${balance}.`, balance);
  }
};

const display = (msg, acctBal) => {
  outputMessage.innerHTML = `${msg}`;
  balanceDisplay.innerHTML = `${balance}`;
};

const makeWithdrawal = () => {
  let withdrawalAmount = +withdrawalInput.value;
  withdraw(withdrawalAmount);
  withdrawalInput.value = "";
};

const withdraw = (amnt) => {
  if (amnt <= 0 || isNaN(amnt)) {
    display(`Invalid Amount`, balance);
  } else if (amnt > balance) {
    display(`Insufficient Funds`, balance);
  } else {
    balance -= amnt;
    display(`Your balance is: ${balance}`, balance);
  }
};

//////////////////////////////
///////// Events /////////////
//////////////////////////////

makeDepButton.addEventListener("click", () => makeDeposit());
makeWithdrawalButton.addEventListener("click", () => makeWithdrawal());
