//var declaration
var name = 'Pavi'  //redeclartion
var name = 'Test'
console.log('var name: redeclartion: ' + name)
name = 12   //reassignment
console.log('var new name: reassignment: ' + name)

//let declaration
let id = 12
//let id = 'pavi'  //redeclaration not allowed
id = 'pavi'
console.log('let id : reassignment: ' + id)
{
    let id =  'new value'
    console.log('let id : reassignment: ' + id)

}

//const declaration
const num = 12
//const num = 'pavi'  //redeclaration not allowed
//num = 'pavi'
console.log('const num : reassignment: ' + num)
{
    const num =  'new string'
    console.log('const id : reassignment: ' + num)

}