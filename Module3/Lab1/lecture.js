//create a function getBMI(height, weight) which calculates and returns a person's BMI (google the formula)

function getBMI(height, weight){
    const bmi = weight / (height * height);
    return bmi;
}

const bmi = getBMI(1.8, 90);
console.log(bmi); 
