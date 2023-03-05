//Traverse an array //

var arr = [4, 5, 1, 6, 8, 9, 40]
// arr[0]
// arr[1]
// arr[2]
// arr[3]
// arr[arr.length-1]

for(i=0; i<arr.length; i++){
   // console.log(arr[i])
   arr[i] = arr[i] + 2
}
console.log(arr)


// sum *****

var sum = 0
for (i = 0; i <arr.length; i++){
    sum +=  arr[i]

}
 console.log(sum)  

// even number

for(var i=0; i<arr.length; i++) {
    if (arr[i]%2 ==0){
        console.log(arr[i])
    }
}