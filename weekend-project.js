// Basic  
// Ex1.1 - Yes or No 
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" 
// string for false. 
console.log('---------------------------------- 1 -----------------------------------');
const trueOrFalse = (boolean) => {
        if(boolean){
                console.log('YES!')
        }
        else{
                console.log('NO!!!!!!!!!')
        }
} 
console.log(trueOrFalse(true));

console.log('---------------------------------- 2.1 -----------------------------------');
// Ex2.1 - Sum of lowest numbers 
// Create a function that returns the sum of the two lowest positive numbers given an array of 
// minimum 4 positive integers. No floats or non-positive integers will be passed. 
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7. 
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

const lowestNumbersArr = [19, 5, 42, 2, 77];
const lowestNumbersArrSort = lowestNumbersArr.sort((a, b) => a - b).slice(0, 2);
console.log(lowestNumbersArrSort[0] + lowestNumbersArrSort[1]);

console.log('---------------------------------- 2.2 -----------------------------------');
const convertToInteger = (userInput) => {
        convertToString = userInput.join('');
        return parseInt(convertToString, 2);
}
console.log(convertToInteger([1, 0, 0, 1, 0, 1]));
console.log(convertToInteger([1, 1, 1, 1, 1, 1]));
console.log(convertToInteger([1, 0, 0, 1, 1, 1]));
console.log(convertToInteger([1, 1, 0, 1, 0, 1]));

console.log('---------------------------------- 2.3 -----------------------------------');
const findNextSquare  = (userInput) => {
        const nextNumber = Math.sqrt(userInput) + 1;
        if(nextNumber % 1 !== 0){
                console.log(-1);
        }else{
        return nextNumber * nextNumber;
        }
}
console.log(findNextSquare(16.2));

console.log('---------------------------------- 2.4 -----------------------------------');
const uniqueNumber = (userInput) => {
         userInput.sort((a, b) => a- b);
        if(userInput[0] === userInput[1]){
        return userInput[userInput.length -1]
}else{
        return userInput[0];
}
}
console.log(uniqueNumber([ 1, 1, 1, 2, 1, 1 ]));
