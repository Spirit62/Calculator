# Modern Calculator

A simple web-based calculator built with HTML, CSS, and JavaScript. It features a dark mode interface with smooth button interactions.

## Preview

![Calculator Preview](image_b0f020.png)

## Features

* Basic math operations (addition, subtraction, multiplication, division).
* Ability to chain calculations together.
* Error handling for invalid expressions.
* Clear button to reset the calculator.

## Files

* `index.html` - The structure of the calculator.
* `calculator.css` - The dark mode styling and layout.
* `calculator.js` - The calculation logic.

## How to Run

1. Download the project files into the same folder.
2. Open `index.html` in any web browser.

## Code Example

This JavaScript function evaluates the expression and updates the display screen:

```javascript
function evaluateResult() {
  if (calc === '') return;
  
  try {
    let result = eval(calc);
    document.querySelector('.Result').innerHTML = result;
    calc = result.toString(); 
  } catch (error) {
    document.querySelector('.Result').innerHTML = "Error";
    calc = '';
  }
}
