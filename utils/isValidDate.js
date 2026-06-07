// Функция которая определяет - високосный это был год, или нет

export const isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// Проверка введённых данных
export const isValidDate = (day, month, year, isLeapYear) => {
    if ([4, 6, 9, 11].includes(month) && day > 30) return false;
    if (month === 2) {
        if (isLeapYear(year) && day > 29) return false;
        if (!isLeapYear(year) && day > 28) return false;
    }
    return true;
};