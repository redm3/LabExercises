const Calculator = require('../libraries/Calculator');

const myCalc = new Calculator();

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  let sum = myCalc.add(number1, number2);

  res.status(200)
  res.json({ result: sum })
}

const subtractNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  let diff = myCalc.subtract(number1, number2);

  res.status(200);
  res.json({ result: diff });
};

const multiplyNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let product = myCalc.multiply(number1, number2);

  res.status(200)
  res.json({ result: product })
}

const divideNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);

  try {
    let quotient = myCalc.divide(number1, number2);
    res.status(200); 
    res.json({ result: quotient });
  } catch (err) {
    res.status(400);
    res.json({ error: err.message });
  }
}

module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers
}
