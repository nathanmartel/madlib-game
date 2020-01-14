// Variable declaration
const madlibPieces = [{
    type : 'Plural Noun',
    enteredLyric : '',
    originalLyric : ''
}, {
    type : 'Verb',
    enteredLyric : '',
    originalLyric:  ''
}, {
    type : 'Past-tense Verb',
    enteredLyric : '',
    originalLyric:  ''
}, {
    type : 'Noun',
    enteredLyric : '',
    originalLyric:  ''
}, {
    type : '-ing Verb',
    enteredLyric : '',
    originalLyric:  ''
}, {
    type : 'Plural Noun',
    enteredLyric : '',
    originalLyric: ''
}];


// Output user input fields in HTML
function outputMadlibQuestions() {
    for (let i = 0; i < madlibPieces.length; i++) {
        document.getElementById('user-input').innerHTML += `
        <div class="madlib-question">
            <label><span class="question-number">` + (i+1) + `.</span> <span class="question-label">` + madlibPieces[i].type + `:</span> 
                <input id="input-` + i + `" />
            </label>
        </div>`;
    }
}


// Output Madlib Function from Object
function makeMadlibObject() {
    for (let i = 0; i < madlibPieces.length; i++) {
        // Get input
        let madlibInput = document.getElementById('input-' + i);
        // Preserve original word 
        madlibPieces[i].enteredLyric = madlibInput.value;

        // Target output
        let madlibOutput = document.getElementById('madlib-word-' + i);
        madlibPieces[i].originalLyric = madlibOutput.textContent;
        // Write output if user entered anything and add class
        if (madlibPieces[i].enteredLyric) { 
            madlibOutput.textContent = madlibPieces[i].enteredLyric;
            madlibOutput.className = "entered";
        }
    }
    document.getElementById('madlib').style.display = 'inherit';
}


// Define Event Listeners
const mySubmitButton = document.getElementById('submitButton');
mySubmitButton.addEventListener('click', makeMadlibObject);


// Init!
outputMadlibQuestions();