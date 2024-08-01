let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  saveCalculation();
}

function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}

function onClear(){
    calculation = '';
    console.log('New Cleared.');

    localStorage.setItem('calculation', calculation);
}

function onEqual(){
    if(calculation) {
        calculation = eval(calculation);
        console.log(calculation);
    
        localStorage.setItem('calculation', calculation);
    }
}