function BMICalculator() {
};

BMICalculator.prototype.metric_bmi = function(obj) {
  let weight = obj.weight;
  let height = obj.height;
  if (weight > 0 && height > 0) {
    var finalBMI = weight / (height/100 * height/100);
    obj.bmiValue = parseFloat(finalBMI.toFixed(2));
    setBMIMessage(obj); 
  };
};

BMICalculator.prototype.imperial_bmi = function(obj) {
  let weight = obj.weight;
  let height = obj.height;
  if (weight > 0 && height > 0) {
    var finalBMI = weight / (height**2) * 703;
    obj.bmiValue = parseFloat(finalBMI.toFixed(2));
    setBMIMessage(obj); 
  };
};

function setBMIMessage (obj) {
  if (obj.bmiValue < 18.5) {
    obj.bmiMessage = "Underweight"
  };
  if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = "Healthy"
  }
  if (obj.bmiValue > 25 && obj.bmiValue < 30) {
    obj.bmiMessage = "Overweight"
  }
  if (obj.bmiValue > 30) {
    obj.bmiMessage = "Obese"
  }
}