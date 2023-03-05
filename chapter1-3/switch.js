var date = new Date()

// 0-Sunday,1-Monday,2-Tuesday
var today = date.getDay()
switch (today){
    case 0:
        console.log('Today is Sunday')
        break
    case 1:
        console.log('Today is Monday')
        break
    case 2:
        console.log('Today is Tuesday')
        break     
    case 3:
            console.log('Today is Wednesday')
            break
    case 4:
            console.log('Today is Thursdayday')
            break
    case 5:
            console.log('Today is Friday')
            break  
    case 6:
            console.log('Today i Satarday')
            break   
    // default: console.log('Not a valid Number')                     s

}

