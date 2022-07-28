// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.


// let number1= +prompt("Please enter first number")
// let number2= +prompt("Please enter second number")
//
// if (number1>number2){
//     console.log(`${number1} > ${number2}`)
//     console.log(" The first number is more "then" second")
// }else if (number1<number2) {
//     console.log(`${number1} < ${number2}`)
//     console.log(" The second number is more "then" fist number")
// }else if (number1===number2) {
//     console.log(`${number1} = ${number2}`)
//     console.log("You enter the same numbers ")
// } else {
//     console.log("Please enter correct numbers")
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayOFweek = prompt('Please enter day of the week')
switch (dayOFweek) {
    case 'monday':
        console.log(`${dayOFweek}`, "GO Work")
        break;
    case 'tuesday':
        console.log(`${dayOFweek}`, "GO Work2")
        break;
    case 'wednesday':
        console.log(`${dayOFweek}`, "GO to swim")
        break;
    case 'thursday':
        console.log(`${dayOFweek}`, "GO to park")
        break;
    case 'friday':
        console.log(`${dayOFweek}`, "GO to game")
        break;
    case 'saturday':
        console.log(`${dayOFweek}`, "GO to lake")
        break;
    case 'sunday':
        console.log(`${dayOFweek}`, "GO to church")
        break;
    default:
        console.log("Please enter correct day or you are drunk)))")

}