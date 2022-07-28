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


//---------------------------------------------------------

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let dayOFweek = prompt('Please enter day of the week')
// switch (dayOFweek) {
//     case 'monday':
//         console.log(`${dayOFweek}`, "GO Work")
//         break;
//     case 'tuesday':
//         console.log(`${dayOFweek}`, "GO Work2")
//         break;
//     case 'wednesday':
//         console.log(`${dayOFweek}`, "GO to swim")
//         break;
//     case 'thursday':
//         console.log(`${dayOFweek}`, "GO to park")
//         break;
//     case 'friday':
//         console.log(`${dayOFweek}`, "GO to game")
//         break;
//     case 'saturday':
//         console.log(`${dayOFweek}`, "GO to lake")
//         break;
//     case 'sunday':
//         console.log(`${dayOFweek}`, "GO to church")
//         break;
//     default:
//         console.log("Please enter correct day or you are drunk)))")
//
// }

//----------------------------------------------------------------------------
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x = prompt("Enter something....") || false;
// if (x){
// }
// else {
//     x="default"
//     console.log(x)
// }

// незнаю чи правильно бо не зрозумів запитання?
//---------------------------------------------------------------------------
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// 1----------------------------

// let number = +prompt('Please enter number from 0 to 60')
//
//
// if (number>=0 && number<15) {
//     console.log(`${number}`, " is fist quarter ")
// } else if(number>=15 && number<30) {
//     console.log(`${number}`, " is second quarter ")
// } else if (number>=30 && number<45){
//         console.log(`${number}`," is third quarter ")
// } else if ( number>=45 && number<=60) {
//     console.log(`${number}`, " is third quarter ")
// } else {
//     console.log("Please enter correct number")
// }

//2------------------------

// let number = +prompt('Please enter day of the month from 0 to 31')
//
//
// if (number>=0 && number<10) {
//     console.log(`${number}`, " is fist quarter ")
// } else if(number>=10 && number<20) {
//     console.log(`${number}`, " is second quarter ")
// } else if (number>=20 && number<=31){
//     console.log(`${number}`," is third quarter ")
// } else {
//     console.log("Please enter correct number")
// }
//--------------------------------------------------------------------
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt('please enter x: ')
//
// if (x){
//     console.log('correct')
// } else if (!x){
//     console.log('not correct')
// }
