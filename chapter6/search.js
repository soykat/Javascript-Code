var arr =[4, 7, 2, 6, 8, 4, 55, 88, 66, 95, 25]
var find = 555
var isFound = false

for(var i = 0; i<arr.length; i++) {
   if(arr[i]==find) {
    console.log('Data Found at Index' + i)
    isFound =true
    break;
   } 
}
if(!isFound){
    console.log('Data Not Found ')
}