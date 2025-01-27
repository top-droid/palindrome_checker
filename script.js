// variable declarations
const input = document.getElementById("text-input")
const button = document.getElementById("check-btn")
const result = document.getElementById("result")
const regExpPattern = /\W|_/gi;


// function declarations




// toggle hidden class
const hide = () => {
    if (result.classList.contains("hidden")) {
        result.classList.toggle("hidden");
    } else {
        // do nothing
    }
    
}

// alert shows up, if input is empty
const requiredInput = () => {
    if (input.value.trim().length === 0) {
        if (!result.classList.contains("hidden")) {
            result.classList.toggle("hidden");
        } else {
            // do nothing
        }
        alert("Please input a value")
        return false;
    }
    return true;
}

// regex removes punctuation, spaces and symbols
const cleanInput = () => {
    const cleanedInput = input.value.toLowerCase().replace(regExpPattern, "");
    return cleanedInput;
     
}

// invert cleanInput
const invertedCleanInput = () => {
    let invertedInput = "";
    const integerNumber = cleanInput().length - 1;

    for (let i = integerNumber; i >= 0; i--) {
        invertedInput += cleanInput()[i];
    }
    return invertedInput;
}

// check if input is a palindrome
const palindromeCheck = () => {
    hide();
    if (cleanInput() === invertedCleanInput()) {
        result.innerHTML = `${input.value.trim()} is a palindrome`;
    } else {
        result.innerHTML = `${input.value.trim()} is not a palindrome`;
    }
}

// complete palindrome check function (final function)

const finalFunction = () => {
    if (requiredInput() === true) {
        palindromeCheck();
    } else {
        // do nothing
    }
}


// event listeners
button.addEventListener("click", finalFunction);


