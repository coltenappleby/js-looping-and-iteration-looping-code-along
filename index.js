// Code your solutions in this file


function countDown(num) {

    for ( num; num >= 0; num-- ) {
        console.log(num)
    }
}


function writeCards(names, giftType) {
    let tempArry = []
    for ( let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${giftType} gift!`)
        tempArry.push(`Thank you, ${names[i]}, for the wonderful ${giftType} gift!`)
    }
    return tempArry
}

