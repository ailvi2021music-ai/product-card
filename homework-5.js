function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура ${temperature} градусов по Цельсию`)
}

showWeather("Москва", +10)

const SPEED_OF_LIGHT = 299792458;

function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость")
  } else if (speed < SPEED_OF_LIGHT) {
    console.log("Субсветовая скорость")
  } else {
    console.log("Скорость света")
  }
}

checkSpeed(102)

const product = "MacPro";
const price = 1000;

function checkBudget(budget) { 
  if (budget >= price) { 
  console.log(`${product} приобретён. Спасибо за покупку!`)
  } else {
    const difference = price - budget
    console.log(`Вам не хватает ${difference}$, пополните баланс`)
  }
}

checkBudget(730)
checkBudget(1000)

function greet(name) {
  console.log(`Здравствуйте, ${name}! Добро пожаловать в Интернет-Магазин`)
}

greet("Виктор")

const products = ["MacPro", "IPad", "IPhone"];
const userName = "Виктор";
const address = "Москва, ул. Гагарина 13, кв 55"
