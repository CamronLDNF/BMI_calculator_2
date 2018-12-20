document.addEventListener('DOMContentLoaded', () => {

  // When the page has loaded, we create a set of global variables holding elements that we will use
  // The attribute names speak for themselves   

  const global = {}

  global.calculateForm = document.querySelector('#calculate');
  global.displayValueElement = document.querySelector('#display_value');
  global.displayMessageElement = document.querySelector('#display_message');

  // Once the page has loaded, we add listeners to the select tag and the form
  // there's a lot of events that we can listen for. 
  // here, we listen for when a value has changed and when a form has been submitted


    // Submit listener on the form
    global.calculateForm.addEventListener('submit', event => {
        // 'preventDefault' prevents the default action the browser makes on the form
        // we only want some java script to be executed, nothing else
        event.preventDefault();
        // the 'claculateBMI' function will create an instance of Person, calculate the 
        // BMI and return the object. Its a asynchronous function (making use of a Promise)
        // mening we can wait for the result and execute more code once we get the result back. Hence the use of '.then()'
        calculateBMI()
            .then(person => {
                // once we have the result of the calculation, it's time to modify
                // the document and display the results for the user to see. 
                global.displayValueElement.innerHTML = `Your BMI is ${person.bmiValue}`;
                global.displayMessageElement.innerHTML = `and you are ${person.bmiMessage}`;
            })
    })
});

const calculateBMI = () => {
    return new Promise(resolve => {
        // Here, for learning purposes, we will use 'document.getElementById()' to get hold of a element
        let w = parseFloat(document.getElementById('weight').value);
        let h = parseFloat(document.getElementById('height').value);
        let person = new Person({
            weight: w,
            height: h,
        });

        let method = document.getElementById('method').value
        if (method == 'Metric') {
            person.calculate_bmi_metric();
        } else if (method == 'Imperial') {
            person.calculate_bmi_imperial();
        }
        resolve(person);
    })
};