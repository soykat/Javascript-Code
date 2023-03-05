var persons = [
    {
        name: 'A',
        age:24
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'C',
        age: 26
    },
    {
        name: 'D',
        age: 30
    }
]


var arr =[4, 8, 5, 9, 4,6, 0, -3,5, 6, 2, 3, 1, 7, 5, 1 ,2]


// arr.sort()
// console.log(arr)

arr.sort(function(a,b){
    if(a>b){
        return -1
    } else if(a<b){
        return 1
    } else{
        return 0
    }
})
console.log(arr)


persons.sort(function(a,b){
    if(a.age>b.age){
        return 1
    } else if (a.age<b.age) {
        return -1
    } else {
        return 0
    }
})

console.log(persons)

var res1 =arr.every(function(value){
    return value % 2 == 0
})
console.log(res1)



var res2 =arr.every(function(value){
    return value >=0
})
console.log(res2)

var res3 =arr.some(function(value){
    return value % 2== 1
})
console.log(res3)

var res4 = arr.some(function(value){
    return value <0
})
console.log(res4)