function addAll() {
    var sum = 0
    for(var i = 0; i<arguments.length; i++){
        sum +=arguments[i]

    }
    return sum
}
var result = addAll(1,2,3)
console.log(result)

// 
function persion( name, email){
    return{
        name: name,
        email:email
    }
}
var p1 =persion('md ariful', 'arifulcse1112@gmail.com')
console.log(p1)










