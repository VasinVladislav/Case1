import { inputDay, inputMonth, inputYear } from "./utils/inputDate.js";
import { isLeapYear, isValidDate } from "./utils/isValidDate.js";
import { getUserYearOld } from "./utils/getUserYearOld.js";
import { printLargeNumber } from "./utils/printLargeNumber.js";

const currentYear = new Date().getFullYear();
const currentDate = new Date();
const daysOfWeek = [
    "Воскресенье", // 0
    "Понедельник", // 1
    "Вторник",     // 2
    "Среда",       // 3
    "Четверг",     // 4
    "Пятница",     // 5
    "Суббота"      // 6
];

// Дата рождения юзера. Параметры: день рождения, месяц рождения, год рождения, текущий год, функция проверки високосный ли год
const userData = getUserYearOld(inputDay, inputMonth, inputYear, currentYear, isLeapYear);

// функция, которая определяет какому дню недели дата рождения
const userBirthDate = () => `День рождения: ${daysOfWeek[userData.getDay()]}`;

// функция, которая выводит - високосный это был год, или нет
const isLeapYearPrint = () => `${isLeapYear(userData.getFullYear()) ? 'Год високосный' : 'Год не високосный'}`;

// функция, которая определяет сколько сейчас лет пользователю
const userAge = () => {
    let age = currentDate.getFullYear() - userData.getFullYear();

    // Создаем дату дня рождения в текущем году для сравнения
    const birthDateThisYear = new Date(currentDate.getFullYear(), userData.getMonth(), userData.getDate());

    // Если текущая дата меньше (раньше) дня рождения в этом году, то год еще не исполнился
    if (currentDate < birthDateThisYear) {
        age--;
    }
    return `Возраст: ${age}`;
};

alert(`${userBirthDate()}\n
    ${isLeapYearPrint()}\n
    ${userAge()}`);

// Функция вывода в консоль даты рождения пользователя звёздочками
printLargeNumber(userData.getDate(), userData.getMonth() + 1, currentDate.getFullYear());