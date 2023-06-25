export const isRequired = val => ({
    hasPassed: !!val,
    message: 'Пожалуйста заполните это поле'
})

export const chartLimit = limit => val => ({
    hasPassed: val.length <= limit,
    message: 'Вы превысели лимит'
})

export const emailValidation = val => ({
    hasPassed: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(val),
    message: 'Неверный имейл'
})

export const passwordValidation = val => ({
    hasPassed: /^(?=.*[A-Za-z])(?=.*[\d]).{7,256}$/.test(val),
    message: 'Пароль должен содержать одну большую букву и один символ'
})