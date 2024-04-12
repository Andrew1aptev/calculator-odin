// Select the calculator's display element
const display = document.querySelector(".calculator__display");
// Select all the buttons of the calculator
const buttons = document.querySelectorAll(".calculator__btn");
// Loop over each button
buttons.forEach(button => {
    // Add a click event listener to each button
    button.addEventListener("click",(event) => {
        // Get the text inside the clicked button
        const buttonText = event.target.innerHTML;
        // Get the current text in the display
        const currentValue = display.textContent;
        // Concatenate the current display text and the button text to form a new value
        let newValue = `${currentValue}${buttonText}`;
        // If the "Clear" button is clicked, clear the display
        if(buttonText === "Clear"){
            newValue = ""
        }
        // If the "<<" button is clicked, remove the last character from the display
        if(buttonText === "&lt;&lt;"){
            newValue = currentValue.slice(0, -1);
        }
        // If the "=" button is clicked, calculate the result
        if(buttonText === "="){
            // Split the current value into terms by the operators
            let terms = currentValue.split(/(?=[+\-*/])/);
            // Convert the first term to a number and store it as the result
            let result = Number(terms[0]);
            // Loop over the rest of the terms, starting from index 1
            for(let index = 1; index < terms.length; index++){
                // Perform the operation based on the operator in the term
                switch(terms[index][0]){
                    case "+":
                        result += Number(terms[index].slice(1));
                        break;
                    case "-":
                        result -= Number(terms[index].slice(1))
                        break;
                    case "*":
                        result *= Number(terms[index].slice(1))
                        break;
                    case "/":
                        result /= Number(terms[index].slice(1))
                        break;
                }
            }
            // Set the new value to the result
            newValue = result;
        }
        // Update the display with the new value
        display.textContent = newValue;
    })
});


