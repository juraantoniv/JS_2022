//
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:


//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

// let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
//
//
// for (const citiesWithIdElement of usersWithId) {
//     for (const citiesWithIdElement1 of citiesWithId ) {
//         if(citiesWithIdElement.id===citiesWithIdElement1.user_id)
//         console.log(`${citiesWithIdElement["id"]} - ${citiesWithIdElement["name"]} - ${citiesWithIdElement["status"]}-${citiesWithIdElement1["user_id"]} -${citiesWithIdElement1["country"]}-${citiesWithIdElement1["city"]}`)
//     }
// console.log('------------------------')
// }

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr= [2,3,4,5,6,7,8,10,3,50]
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if(arrElement%2==0){
//         console.log(arrElement)
//     }
//
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arr= [2,3,4,5,6,7,8,10,3,50]
// let arr2=[]
// for (let i = 0; i < arr.length; i++) {
//     arr2[i] = arr[i];
// }
// console.log(arr2)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.