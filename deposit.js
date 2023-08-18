//step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',()=>{
//step-2: get the deposit amount from the deposit input field

const depositField = document.getElementById('deposit-field');
const newDepositAmount = parseFloat(depositField.value);
// console.log( typeof newDepositAmount);

//step-3: get the current deposit total
const depositTotalElement = document.getElementById('deposit-total');

const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal= parseFloat(previousDepositTotalString);

// step-4: add numbers to sert the total deposit
const currentDepositTotal = previousDepositTotal + newDepositAmount;
depositTotalElement.innerText = currentDepositTotal;

// step-5:get balance current 
const balanceTotalElement = document.getElementById('balance-total');
const balanceTotalElementString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(balanceTotalElementString);

// step-6: calculate current total balance
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
balanceTotalElement.innerText = currentBalanceTotal;
//step-7: clear the deposit field
depositField.value='';
})