import { isValidDate } from "./isValidDate.js";

export const getUserYearOld = (inputDay, inputMonth, inputYear, currentYear, isLeapYear) => {

    let userDay = inputDay();
    let userMonth = inputMonth();
    let userYear = inputYear(currentYear);

    while (!isValidDate(userDay, userMonth, userYear, isLeapYear)) {
        alert(`Введены некорректные данные!\nВ выбранном месяце (${userMonth}) года (${userYear}) не может быть ${userDay} дней.`);
        userDay = inputDay();
    }

    let userYearOld = new Date(userYear, userMonth - 1, userDay);

    return userYearOld;
}