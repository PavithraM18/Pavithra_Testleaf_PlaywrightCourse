//union
let empDetails:string|boolean|number
empDetails = 84
empDetails = false
empDetails = 'testmultiple variable'
console.log(empDetails)

//intersection -> &
// using type alias  -> create custom name of the type
type api1= {
    statuscode1:number
}
type api2= {
    statuscode2:string
}
 type status = api1& api2

let apiStatus : status = {
    statuscode2 : 'ok',
    statuscode1 : 100
} 

console.log(apiStatus)