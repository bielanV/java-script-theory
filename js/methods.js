//? Викличте функцію showFullName у контексті об'єкта user

// const showFullName = function () {
//     console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//     firstName: 'Julio',
//     lastName: 'Vaskez',
//     age: 30,

//     showUserFullName: showFullName
// };

// user.showUserFullName(); //виклик функції showFullName у контексті об'єкта user через запис нової властивості у об'єкт та присвоєння їй цю функцію. Простіше кажучи зробили нашу функцію методом об'єкта user


//? Викличте функцію showFullName у контексті об'єкта user за допомогою методу "call" та "apply"

// const showFullName = function (message, number) {
//     console.log(`${message} ${this.firstName} ${this.lastName} your room ${number}`);
// };

// const user = {
//     firstName: 'Julio',
//     lastName: 'Vaskez',
//     age: 30,
// };

// showFullName.call(user, 'Hello', 20);
// showFullName.apply(user, ['Hi', 23]); //Різниця між цими методами в тому що метод 'call' приймає нескінченну кількість аргументів, а 'apply' тільки два, перший аналогічно це сам об'єкт, а другий це масив з аргументами

//? Створіть копію функції changeColor з привʼязаним контекстом за допомогою методу "bind"

// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// console.log(hat);

// const changeHatColor = changeColor.bind(hat); // Метод bind створює і повертає нову функцію, яка має заздалегідь встановлений контекст, і ця нова функція може бути викликана пізніше з будь-якими аргументами.

// changeHatColor('red');

// console.log(hat);