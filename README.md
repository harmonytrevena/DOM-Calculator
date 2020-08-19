# Calculator DOM Assignment

## Create a Calculator using HTML/CSS/JS

### Step 1

Create a _new_ repo called "DOM Calculator Exericse" that contains the following files:

- `index.html` file (you can use our boilerplate code as inspiration/starter code)
- `js` or `scripts` folder for the Javascript
- `css` or `styles` folder for the CSS

#### HTML Structure
Your goal is to make it look like a calculator.

* Create a `.calculator` class that wraps all the buttons
* Create `button` or `div` elements that contain the Calculator "buttons"
  * Assign a `.number` class to the numbers
  * Assign a `.operator` class to the operators (`+`, `-`, `*`, `/`, `c`, `.`)
  * Assign a `.equal` class and `#result` id to the equals button (`=`)
  * Assign a `#clear` id to the clear button (`c`)
* Create a `div` with the class `.input` and id `#input` that will _display_ the numbers a user clicked, and the result of the operation (i.e. the sum, difference, etc...)

### Step 2

1. Add click handlers to the number buttons
   - Create an array of the numbers clicked, in order
1. Add click handlers to the calculation buttons
   - Create an array of the operators
   - Don't let a user start with an operator
   - Don't let a user type multiple operators (i.e. you can't type '--' or '++' or "\*+")
1. Add click handler to the 'equals' button
1. The 'equals' button needs to trigger a few events (**NOTE:** These will be functions)
   - Loop through the array of numbers (**NOTE:** These are currently strings)
   - Convert the strings to integers
   - Write a new array of integers
   - Get an array of the operators
   - Perform each math operation (**NOTE:** You'll probably want to use 4 `while` loops)
1. Add click handler clearing the input when a user clicks the `c`, "clear," button

### Hints
You'll want to track whether or not a result has been displayed. So, perhaps something like this: 
`let resultDisplayed = false;`
