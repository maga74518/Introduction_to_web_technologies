const temp = parseInt(prompt('Введите температуру в градусах цельсия: '))
let temp1 = (9 / 5) * temp + 32

alert(`Цельсий: ${temp}, Фаренгейт: ${temp1.toFixed(1)}`)