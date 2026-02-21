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

function checkMaxSpeed (car){
  if (car.maxSpeed === undefined) {
    car.maxSpeed = 250;
  }
 }

 checkMaxSpeed(car);
 console.log(car);

function getProperty (object, propertyName){
  console.log(object[propertyName]);
}

getProperty(car, "color");

const products = ["Молоко", "Мясо", "Апельсины"]

const books = [{
  title: "Коран",
  author: "Аллах",
  year: 651,
  coverColor: "Коричневый",
  genre: "Религия"
}, {
  title: "Хадисы",
  author: "Аль-Бухари",
  year: 846,
  coverColor: "Чёрный",
  genre: "Религия"
}
]

books.push({
  title: "Война и мир",
  author: "Л.Н.Толстой",
  year: 1869,
  coverColor: "Коричневый",
  genre: "Роман-Эпопея"
});

const universeBooks = []

universeBooks.push({
  title: "Гарри Поттер и философский камень",
  author: "Дж. К. Роулинг",
  year: 1997,
  coverColor: "Красный",
  genre: "Фэнтези"
});

const allBooks = [...books,...universeBooks]
const booksWithRare = allBooks.map(book => {
  return { ...book, isRare: book.year > 2000 }
})

console.log(booksWithRare);