const user = {
  name: "Victor",
  age: 35,
  email: "ailvi@yandex.ru",
  job: "Frontend Developer",
  country: "Russia"
}

const car = {
  brand: "Porsche",
  model: "Boxster Spyder",
  year: 2026,
  color: "white",
  transmission: "manual"
}

car.owner = user;

function addMaxSpeed (car){
  if (car.maxSpeed === undefined) {
    car.maxSpeed = 250;
  }
}

addMaxSpeed(car);
console.log(car);

function logObjectProperty (object, propertyName){
  console.log(object[propertyName]);
}

logObjectProperty(car, "color");

const products = ["Молоко", "Мясо", "Апельсины"];

const libraryBooks = [
  {
    title: "Коран",
    author: "Аллах",
    year: 651,
    coverColor: "Коричневый",
    genre: "Религия"
  },
  {
    title: "Хадисы",
    author: "Аль-Бухари",
    year: 846,
    coverColor: "Чёрный",
    genre: "Религия"
  }
];

libraryBooks.push({
  title: "Война и мир",
  author: "Л.Н.Толстой",
  year: 1869,
  coverColor: "Коричневый",
  genre: "Роман-Эпопея"
});

const universeBooks = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    coverColor: "Красный",
    genre: "Фэнтези"
  },
  {
    title: "Гарри Поттер и Тайная комната",
    author: "Дж. К. Роулинг",
    year: 1998,
    coverColor: "Зелёный",
    genre: "Фэнтези"
  },
  {
    title: "Гарри Поттер и узник Азкабана",
    author: "Дж. К. Роулинг",
    year: 1999,
    coverColor: "Синий",
    genre: "Фэнтези"
  }
];

const allBooks = [
  ...libraryBooks,
  ...universeBooks
];

const booksWithRare = allBooks.map(book => {
  return { 
    ...book, 
    isRare: book.year > 2000
  }
});

console.log(booksWithRare);