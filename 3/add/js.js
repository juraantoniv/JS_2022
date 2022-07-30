// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
//
// let a = 10
// let b = 20
// let result
// (a + b < 4)?result = 'Мало':result = 'Багато';
// console.log(result)

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
//
// let a = +prompt('enter a');
// let b = +prompt('enter b');
// let c = +prompt('enter c');
// if ((a<b && a>c) ||(a>b && a<c)) {
//     console.log(`${a}`,' is middle')
// } else if ((b<c && b>a) || (b>c && b<a)){
//     console.log(`${b}`,' is middle')
// } else if ((c<b && c>a) || (c>b && c<a)) {
//     console.log(`${b}`,' is middle')
// }

// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]
//
// if (friends.length>=3){
//     console.log('big array')
// } else {
//     console.log('small array')
// }

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let question = prompt('Яка «офіційна» назва JavaScript?')
// if (question==='ECMAScript'){
//     console.log('Правильно!')
// } else {
//     console.log('Не знаєте? ECMAScript')
//
// }

//
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let number = +prompt('Please enter number float')
//
//
// if (number>=1 && number<20) {
//     console.log(`${number}`, " fist  ")
// } else if(number>=21 && number<48) {
//     console.log(`${number}`, " second  ")
// } else if (number>=49 && number<=90){
//     console.log(`${number}`," third")
// } else {
//     console.log("Please enter correct number")
// }

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let question = +prompt('enter number')
// if (question===10){
//     console.log('Правильно!')
// } else {
//     console.log('НЕВІРНО')
//
// }


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temperature = +prompt('enter temperature ')
// if (temperature>=10 && temperature<=22){
//     console.log('йдемо ВЧИТИСЯ')
// } else {
//     console.log(' вчимося ОНЛАЙН')
//
// }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// let  number = +prompt('Please enter number')
// switch (number) {
//     case number===1:
//         console.log(`${number}`, "Auto")
//         break;
//     case number===2:
//         console.log(`${number}`, "Moto")
//         break;
//     case number===3:
//         console.log(`${number}`, "Phones")
//         break;
//     case number===4:
//         console.log(`${number}`, "Truck")
//         break;
//     case number===5:
//         console.log(`${number}`, "Game")
//         break;
//     default:
//         console.log("Please enter correct number")
// }

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

// let n = +prompt('enter number from -100 to 100')
//
// const result =  n >= -100 && n < 0  ? 'negative' :
//      n === 0 ? 'zero' : 'positive';
// console.log(result)