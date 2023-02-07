// Using the following variables:
// var goodDrivingRecord = true;
// var age = 24;

// Write a program that evaluates the status of the variables above, and uses logic to print one of 
// three possible messages:
// - If the driving record is good and user is over 25 years old, 
// they should get a discount on the car rental
// - If the user either has a good record or is over 25 years old, 
// they should pay full price
// - If the user is not over 25 and has a bad driving record, they 
// need to have someone else sign for the rental

var goodDrivingRecord = true;
var age = 24;

if(goodDrivingRecord && age>25) {
    console.log("They should get a discount on the car rental.")
} else if (goodDrivingRecord || age>25) {
    console.log("They should pay full price.")
} else { //the final condition is the same as the previous two conditions not being true. So 
     // instead of defining it extensively as Else if, we can directly use "else". 
    console.log("They need to have someone else sign for the rental.") 
}
