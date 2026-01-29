let data=[12,56,78,'js',true, ,null]
console.log("Original Array: "+ data)
data.pop()
console.log("Modified  Array: " , data)
data.push('Test')
console.log("Modified  Array: " , data)
data.unshift(false)
console.log("Modified  Array: " , data)
data.shift()
console.log("Modified  Array: " , data)
data.splice(2,3,'New','98','Value')
console.log("Modified  Array: " , data)

//Descending order number
let nums = [23,56,45,12,45,26,78,4]
nums.sort((a,b)=> b-a)
console.log("Descending order: " , nums)

//Ascending order number
nums.sort((a,b)=> a-b)
console.log("Ascending order: " , nums)