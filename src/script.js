const descInput = document.getElementById('desc');
const amountInput = document.getElementById('amount');
const incomeList = document.getElementById('incomeList');
const expenseList = document.getElementById('expenseList');
const balanceDisplay = document.getElementById('balance');

descInput.addEventListener("input", function() {
    descInput.value = descInput.value.replace(/[0-9]/g, "");
});

amountInput.addEventListener("input", function() {
    amountInput.value = amountInput.value.replace(/[^0-9]/g, "");
});

document.getElementById('incomeBtn').addEventListener('click', function() {
    addTransaction('income');
});

document.getElementById('expenseBtn').addEventListener('click', function() {
    addTransaction('expense');
});


let balance = 0;


function addTransaction(type) {
    const desc = descInput.value;
    const amount = Number(amountInput.value);


if (desc === "" || amountInput.value === "") {
    return;
}

if (isNaN(amount)) {
    return;
}

const li = document.createElement('li');

if (type === 'income') {
    li.textContent = desc + " - " + amount + " kr (Inkomst)";
    incomeList.appendChild(li);
    balance = balance + amount;
} else {
    li.textContent = desc + " - " + amount + " kr (Utgift)";
    expenseList.appendChild(li);
    balance = balance - amount;
}
balanceDisplay.textContent = balance;

descInput.value = "";
amountInput.value = ""; 

}