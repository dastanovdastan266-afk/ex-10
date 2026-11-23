//
// let score = prompt('Введите ваш возраст', 18);
//
// if (score <= 18) {
//     alert("Несовершеннолетний");
// } else if (score >= 18) {
//     alert("Взрослый");
// } else if (score >= 60) {
//     alert("Пенсионный возраст")
// }

// 1 Задание

// let score = prompt('Сколько вы набрали баллов?')
//
// if (score < 0 || score > 100) {
//     alert("Некорректное количество баллов");
// } else if (score >= 90 && score <= 100) {
//     alert("Отлично (5)");
// } else if (score >= 75 && score <= 89) {
//     alert("Хорошо (4)");
// } else if (score >= 60 && score <= 74) {
//     alert("Удовлетворительно (3)");
// } else if (score >= 0 && score <= 59) {
//     alert("Неудовлетворительно (2)");
// }

// 2 задание

// let login = prompt("Здраствуйте напишете пользователя.");
//
// if (login === "admin") {
//     let password = prompt("Введите пароль:");
//
//     if (password === "12345") {
//         alert("Добро пожаловать |Super Root|");
//     } else if (password === "" || password === null) {
//         alert("Вход отменён");
//     } else {
//         alert("Неверный пароль");
//     }
//
// } else if (login === "" || login === null) {
//     alert("Вход отменён");
// } else {
//     alert("Я вас не знаю");
// }

// 3 задание

//
// let number1 = 20;
// let number2 = 5;
//
// let operation = "+";
//
// switch (operation) {
//     case "-":
//         console.log(number1 + number2);
//         break;
//
//     case "-":
//         console.log(number1 - number2);
//         break;
//
//     case "*":
//         console.log(number1 * number2);
//         break;
//     case "/":
//         if (number1 === 0 ) {
//             console.log("На 0 делить нельзя");
//         }
//
//
//     default:
//         console.log("Неизвестная операция");
// }

// 4 Задание

let age = 20;
let isRegistered = true;
let isBlocked = false;

if (age <= 18 && isRegistered && !isBlocked) {
    console.log("зарегистрирован");
} else {
    console.log("не заблокирован")
}

// Наконец-то 5 GG'S