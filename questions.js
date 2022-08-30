// Ex1.1 - Yes or No ?
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No"
// string for false.
const isTrueOrFalse = (boolean) => {
  if (boolean === true) {
    console.log('The value that you entered is: True')
  } else if (boolean === false) {
    console.log('The value that you entered is: False')
  } else {
    console.log('Please enter a valid boolean value: either `True` or `False`')
  }
}

// Tests Section
isTrueOrFalse('fd')
isTrueOrFalse(true)
isTrueOrFalse(false)
isTrueOrFalse(123456)
