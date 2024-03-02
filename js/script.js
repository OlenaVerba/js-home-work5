// JavaScript Lesson 5
// IT КУРСИ FullStack-розробник 5.0
// Модуль №25. Замикання, this
// JS HomeWork5

// Домашня робота 5. Олена Верба
// ----------------------------------------------
// *** 1 ***
// 1) Написати об'єкт студента, який буде виводити ім'я,
// спеціальнісь, середній бал і кількість пропущених занять.
// 2) Написати метод, який буде виводити цю інформацію.
// 3) Написати три варіанти студентів.
// 4) Прикріпити знначення за допомогою call apply bind

// const showStudentInfo = {
//   name: 'name',
//   speciality: 'spec',
//   GPA: 1,
//   showInfo: function (hooky) {
//     console.group(`${this.name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Speciality is : ${this.speciality}`);
//     console.log(`GPA is : ${this.GPA}`);
//     console.log(`Hooky is : ${hooky}`);
//     console.groupEnd();
//   },
// };

// const Student1 = {
//   name: 'Maxim',
//   speciality: 'Economist',
//   GPA: 9,
//   hooky: 4,
// };

// const Student2 = {
//   name: 'Vladlen',
//   speciality: 'Bookkeeper',
//   GPA: 10,
//   hooky: 2,
// };

// const Student3 = {
//   name: 'Alexander',
//   speciality: 'Electrician',
//   GPA: 10,
//   hooky: 1,
// };

// showStudentInfo.showInfo.bind(Student1, 4)();

// showStudentInfo.showInfo.call(Student2, 2);

// showStudentInfo.showInfo.apply(Student3, [1]);

// ------------------------------------------------------------------------
// *** 2 ***
// Написати дві кнопки і закріпити на них функції.
// При натисканні на кнопку html - має видати коротке визначення що це таке.
// При натисканні на кнопку css - має видати коротке визначення що це таке.

// const descript = {
//   comment() {
//     alert(this.content);
//   },
// };

// const fileHtml = {
//   content: 'html -- HyperText Markup Language',
// };

// const fileCss = {
//   content: 'css -- Cascading Style Sheets',
// };

// document
//   .querySelector('#html')
//   .addEventListener('click', descript.comment.bind(fileHtml));

// document
//   .querySelector('#css')
//   .addEventListener('click', descript.comment.bind(fileCss));

// ------------------------------------------------------------------------
// *** 3 ***
// Написати функцію магазин, яка отримує назву товару, ціну за кг
// і кількість товару. Функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4.5
// 2) cherry 58, 1.3
// 3) Orange 89, 3.4

// Не було завдання повертати кількість товару

// const store = {
//   name: '',
//   produce: '',
//   price: 1,
//   quantity: 1,
//   showpPoduct() {
//     console.group(`Store info ${this.name} :`);
//     console.log(`Product name is : ${this.produce}`);
//     console.log(`The price is : $ ${this.price} kg`);
//     // console.log('Quantity: ' + this.quantity);
//     console.groupEnd();
//   },
// };

// let sklad1 = {
//   name: 'sklad1',
//   produce: 'Banana',
//   price: 4.5,
//   quantity: 30,
// };

// let sklad2 = {
//   name: 'sklad2',
//   produce: 'Cherry',
//   price: 1.3,
//   quantity: 58,
// };

// let sklad3 = {
//   name: 'sklad3',
//   produce: 'Orange',
//   price: 3.4,
//   quantity: 89,
// };

// store.showpPoduct.bind(sklad1)();
// store.showpPoduct.call(sklad2);
// store.showpPoduct.apply(sklad3);
