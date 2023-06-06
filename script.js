const loanForm = document.getElementById('loan-form'),
  amountInput = document.getElementById('loan-amount'),
  interestInput = document.getElementById('loan-interest'),
  yearsInput = document.getElementById('loan-years'),
  loanResults = document.getElementById('loan-results'),
  monthlyResult = document.getElementById('monthly-result'),
  paymentResult = document.getElementById('payment-result'),
  interestResult = document.getElementById('interest-result'),
  errMsg = document.getElementById('error');

function onLoanFormSubmit(e) {
  e.preventDefault();

  // Validate input
  if (
    amountInput.value === '' ||
    interestInput.value === '' ||
    yearsInput.value === ''
  ) {
    alert('Please fill in all fields!');
    return;
  }
}

function onLoanFormSubmit(e) {
  e.preventDefault();

  // Validate input
  if (
    amountInput.value === '' ||
    interestInput.value === '' ||
    yearsInput.value === ''
  ) {
    alert('Please fill in all fields!');
    return;
  }

  const principal = parseFloat(amountInput.value);
  const monthlyInterest = parseFloat(interestInput.value) / 100 / 12;
  const numberOfPayments = parseFloat(yearsInput.value) * 12;

  calculateResults(principal, monthlyInterest, numberOfPayments);
}

function calculateResults(principal, monthlyInterest, numberOfPayments) {
  const x = Math.pow(1 + monthlyInterest, numberOfPayments);
  // Get monthly payment
  const monthly = ((principal * x * monthlyInterest) / (x - 1)).toFixed(2);
  // Get total payment
  const total = (monthly * numberOfPayments).toFixed(2);
  // Get total interest
  const interest = (monthly * numberOfPayments - principal).toFixed(2);

  // console.log(monthly, total, interest);

  if (isNaN(monthly)) {
    alert('Please check your numbers');
    return;
  } else {
    console.log('Success');
  }
}

loanForm.addEventListener('submit', onLoanFormSubmit);
