let calculation='';

function one() {
    calculation += '1';
    console.log(calculation);
}

function two() {
    calculation += '2';
    console.log(calculation);
}

function three() {
    calculation += '3';
    console.log(calculation);
}

function plus() {
    calculation += ' + ';
    console.log(calculation);
}

function four() {
    calculation += '4';
    console.log(calculation);
}

function five() {
    calculation += '5';
    console.log(calculation);
}

function six() {
    calculation += '6';
    console.log(calculation);
}

function minus() {
    calculation += ' - ';
    console.log(calculation);
}

function seven() {
    calculation += '7';
    console.log(calculation);
}

function eight() {
    calculation += '8';
    console.log(calculation);
}

function nine() {
    calculation += '9';
    console.log(calculation);
}

function multiply() {
    calculation += ' * ';
    console.log(calculation);
}

function zero() {
    calculation += '0';
    console.log(calculation);
}

function dot() {
    calculation += '.';
    console.log(calculation);
}

function equal() {
    if(calculation) {
        calculation = eval(calculation);
        console.log(`= ${calculation}`)
    }

}

function divide() {
    calculation += '/';
    console.log(`= ${calculation}`)
}

function onClear() {
    calculation = '';
    console.log('Cleared.');
}
