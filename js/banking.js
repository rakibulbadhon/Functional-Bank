//Get input value of deposit and withdraw
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);

    //Cleaer input field
    inputField.value = '';
    return inputAmount;
}
//Add total deposit and withdarw
function totalField(totalId, inputAmount) {
    const total = document.getElementById(totalId);
    const totalAmount = parseFloat(total.innerText) + inputAmount;
    total.innerText = totalAmount;
}

//Add total balance
function balanceField(balanceId, inputAmount) {
    const balanceTotal = document.getElementById(balanceId);
    const totalBalanceAmount = parseFloat(balanceTotal.innerText) + inputAmount;
    balanceTotal.innerText = totalBalanceAmount;
}
//Get balance amount
function getBalanceAmount() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceAmount = parseFloat(balanceTotal.innerText);
    return balanceAmount;
}

//For Deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    //call for deposit input
    const depositAmount = getInputValue('deposit-input');

    if (depositAmount > 0) {
        //call for total deposit
        totalField('deposit-total', depositAmount);
        //call for add balance
        balanceField('balance-total', depositAmount);
    }
    else {
        alert('please input positive number!!');
    }
});

//For Withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    //call for withdraw input
    const withdrawAmount = getInputValue('withdraw-input');
    //call for get balance amount
    const balanceAmount = getBalanceAmount();
    if (withdrawAmount > 0 && balanceAmount >= withdrawAmount) {
        //call for total withdraw
        totalField('withdraw-total', withdrawAmount);
        //call for reduce balance
        balanceField('balance-total', -withdrawAmount);
    }
    else if (withdrawAmount > balanceAmount) {
        alert('Insufficient balance!!');
    }
    else {
        alert('please input positive number!!');
    }
})