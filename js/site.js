//Controller function
function getText(){
    document.getElementById('alert').classList.add('invisible')
    let userInput = document.getElementById('userInput').value 
    let reversedString = checkPalindrome(userInput)
    displayResults(userInput, reversedString)
}

//Logic function
function checkPalindrome(userInput){
    let userString = userInput.toLowerCase().replace(/[^a-zA-Z]/g, ''); //Convert user string to lowercase only then remove all numbers and symbols
    let splitString = userString.split("")  //Returns userString filtered string into array 
    let reversedArray = splitString.reverse();  //Reverses the array
    let joinArray = reversedArray.join("") //Returns the array as a string
    return joinArray
}

//Viewer function
function displayResults(userInput, reversedString){ //Display the results of the palindrome
    let fixedUserString = userInput.toLowerCase().replace(/[^a-zA-Z]/g, '')
    let messageDisplay = document.getElementById('message') //Access html message element
    let headingMessage = document.getElementById('the-heading') //Access html the-heading element

    messageDisplay.innerHTML = ''; //Reset messageDisplay & headingMessage innerHTML to be empty string
    headingMessage.innerHTML = '';

    document.getElementById('alert').classList.remove('invisible') //Make alert div visibile

    if(fixedUserString !== reversedString){
        headingMessage.innerHTML = `${userInput} is not a palindrome`
        messageDisplay.innerHTML = `Your phrase reversed is: ${reversedString}`
    }else{
        headingMessage.innerHTML = `Well done! You entered a palindrome`
        messageDisplay.innerHTML = `Your phrase reversed is: ${reversedString}`
    }
}