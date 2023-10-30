// Validate the bill total input field and only allow numbers
function validateBillTotal(billTotal) {
  if (isNaN(billTotal) || (billTotal === " ")) {
    alert("Bill total must be a number.");
    return false;
  } else {
    return true;
  }
}

  

// Update the calculateTip() function to call the validateBillTotal() function
function calculateTip() {

  var billTotal ,tipPercentage,tipAmount,totalBillWithTip;
  var rangeSlider = document.getElementById("tip-percentage-input");



  billTotal = document.getElementById('bill-total-input').value;

  // Validate the bill total input field
  if (!validateBillTotal(billTotal)) {
    return;
  }

  // Get the tip percentage
  tipPercentage = parseFloat(document.getElementById('tip-percentage-input').value);

  // Calculate the tip amount and total bill with tip
   tipAmount = parseFloat(billTotal) * parseFloat(tipPercentage) / 100;
   totalBillWithTip = parseFloat(billTotal)+parseFloat(tipAmount);
 

  if(billTotal === ""){

    tipAmount=0;
    totalBillWithTip=0;
    tipPercentage=0;
    rangeSlider.value=0;


  }
  

  // Set the values of the tip amount and total bill with tip fields
  
  document.getElementById('tip-percentage-display').value = tipPercentage.toFixed(2);
  document.getElementById('tip-amount-input').value = tipAmount.toFixed(2);
  document.getElementById('total-bill-with-tip-input').value = totalBillWithTip.toFixed(2);

}

// Add event listeners to the bill total and tip percentage input fields
document.getElementById('bill-total-input').addEventListener('input', calculateTip);
document.getElementById('tip-percentage-input').addEventListener('input', calculateTip);

