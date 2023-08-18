/*
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2-5. also make sure to convert the input into a number by using parseFloat
3. Get previous withdraw total
4. calculate total withdeaw amount
4-5. set total withdraw amount
*/

// step-1
document.getElementById('btn-withdraw').addEventListener('click', () => {
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    //step -2.5
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

       //step-7
       withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('please provide a valid amount');
    }

 

    //step-3
    const previouswithdrawElement = document.getElementById('withdraw-total');
    const previouswithdrawstring = previouswithdrawElement.innerText;
    const previouswithdraw = parseFloat(previouswithdrawstring);




    // step - 4.5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalaceTotal = parseFloat(previousBalanceTotalString);


    if (newWithdrawAmount > previousBalaceTotal) {
        alert('baap er bank e eto taka nai');
        return;
    }
    //step-4
    const totalWithdraw = newWithdrawAmount + previouswithdraw;
    previouswithdrawElement.innerText = totalWithdraw;

    const currentBalanceTotal = previousBalaceTotal - newWithdrawAmount;

    balanceTotalElement.innerText = currentBalanceTotal;



})