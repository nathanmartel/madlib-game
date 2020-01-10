// Variable declaration
const madlibInputOne = document.getElementById('input-1');
const madlibInput = [];
const madlibOutput = [];
let i = 0;
const madlibPieces = ['Noun', 'Verb', 'Past Tense Verb', 'Person', '-ing Verb', 'Verb', 'Plural Noun'];


// Get Inputs
while (i < madlibPieces.length) {
    const inputName = 'input-' + i;
    madlibInput[i] = document.getElementById(inputName);
    console.log('Input = ' + madlibInput[i]);
    i++;
}

// Output Madlib Function
function makeMadlib() {
    i = 0;
    while (i < madlibPieces.length) {
        const outputName = 'madlib-word-' + i;
        madlibOutput[i] = document.getElementById(outputName);
        console.log('Output = ' + madlibOutput[i]);
        if (madlibInput[i]) { 
            madlibOutput[i].textContent = madlibInput[i].value;
        }
        i++;
    }
}

// function makeMadlibOld() {
//     console.log('In makeMadlib!');    
//     const madlibOutput1 = document.getElementById('madlib-word-1');
//     madlibOutput1.textContent = madlibInput1.value;
// }

// Define Event Listeners
const mySubmitButton = document.getElementById('submitButton');
mySubmitButton.addEventListener('click', makeMadlib);