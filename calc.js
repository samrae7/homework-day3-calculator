var mode = prompt ('Choose a calculator mode: N - normal / M- Mortage Calculator');
  console.log('mode', mode);

if (mode=='N') {
  var op = prompt ("choose an operation: 'add', 'subtract', 'multiply' or 'divide'");
  console.log('op', op);

  var num1 = prompt('choose a number');
  console.log('num1', num1);

  var goodNum1 = parseFloat(num1);
  console.log('goodNum1',goodNum1);

    if (isNaN(goodNum1)==true) {
      alert('Please reload the page and enter a valid number');
    }

    else if (op!=='sqRoot') {
    var num2 = prompt('choose the second number');
    console.log('num2', num2);

    var goodNum2 = parseFloat(num2);
    console.log('goodNum2',goodNum2);

      if (isNaN(parseFloat(num2))==true) {
          alert('Please reload the page and enter a valid number');
      };
    
    };

    var result;

    if (op=="add") {
      result = goodNum1+goodNum2;
    }

    else if (op=='divide') {
    result = goodNum1 / goodNum2;

  } else if (op=='subtract') {
    result = goodNum1 - goodNum2;

  } else if (op=='multiply') {
    result = goodNum1 * goodNum2;
  }
    else if (op=='sqRoot') {
    result =Math.sqrt(goodNum1);
  }
    else if (op=='power') {
    result = Math.pow(num1,num2);
  }

  console.log('result', result);
  alert('The result is '+result);
}
else if (mode=='M') {
  var principal = prompt ("Enter principal:");
  console.log('principal', principal); 
  var principalNo = parseFloat(principal); 

  var interestRate = prompt ("Enter interest rate:");
  console.log('interestRate', interestRate);
  var interestRateNo = parseFloat(interestRate)/(100*12);

  var noPayments = prompt ("Enter number of payments:");
  console.log('noPayments', noPayments);
  var noPaymentsNo = parseFloat(noPayments);

  var monthlyPayment = (((Math.pow((1+interestRateNo),noPaymentsNo))*interestRateNo)/((Math.pow((1+interestRateNo),noPaymentsNo))-1))*principalNo;

  console.log('monthlyPayment', monthlyPayment);
  alert('Your monthly payment is '+monthlyPayment.toFixed(2));
 } else {
  alert('Please reload the page and choose a valid mode');
 }