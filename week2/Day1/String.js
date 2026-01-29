// print string in reverse order
 let emp = 'Pavithra'
let result = emp.split('').reverse().join('')
console.log(result) 


// Find the occurence of the given character
let text ="Given string i want to print count of target occurence "
let targetChar='t'
let count = 0
for(let i = 0;i<text.length;i++ ) {
    if(text.charAt(i)===targetChar)
        { 
            count++ 
        }
} 

console.log("Target Character: " + targetChar + " "+ "count:"+ count)