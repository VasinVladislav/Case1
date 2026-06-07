// Ввод числа
export const inputDay = () => {
    let day = prompt('Введите день рождения (1-31)');
    while (!Number.isFinite(+day) || 1 > parseInt(day) || parseInt(day) > 31) {
        day = prompt('Введены некорректные данные\nВведите день рождения (1-31)');
    }
    return parseInt(day);
}

// Ввод месяца
export const inputMonth = () => {
    let month = prompt('Введите месяц рождения (1-12)');
    while (!Number.isFinite(+month) || 1 > parseInt(month) || parseInt(month) > 12) {
        month = prompt('Введены некорректные данные\nВведите месяц рождения (1-12)');
    }
    return parseInt(month);
}

// Ввод года
export const inputYear = (currentYear) => {
    let year = prompt('Введите год рождения');
    while (!Number.isFinite(+year) || 1 > parseInt(year) || parseInt(year) > currentYear) {
        year = prompt('Введены некорректные данные\nВведите год рождения');
    }
    return parseInt(year);
}