//Number Type Assignment
console.log("Number Type Assignment:")
let num = -5
if(num >0)
{
    console.log("Positive")
}
else if (num < 0 )
{
     console.log("Negative")
}
else 
{
    console.log("Zero")
}


//Odd or Even Assignment
console.log("Odd or Even Assignment:")
let n = 25
if(n%2 == 0)
{
    console.log("Provided number is Even Number")
}
else{
    console.log("Provided number is Odd Number")
}

//Grade Calculation
console.log("Grade Calculation Assignment:")
let score = 75
switch(true)
{
    case (score>=90):
         console.log("Grade: A")
         break
    case (score>=80 && score<=89):
        console.log("Grade: B")
        break
    case (score>=70 && score<=79):
        console.log("Grade: C")
        break
    case (score>=60 && score<=69):
        console.log("Grade: D")
        break
    default:
        console.log("Grade: F")
}