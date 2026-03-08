import { comments } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.filter(number => number >= 5);

console.log(result);

const fruits = ["Яблоки", "Бананы", "Апельсины"];

console.log(fruits.includes("Бананы"));

function reverse(array) {
  return array.reverse();
}

console.log(reverse(numbers));
console.log(reverse(fruits));


console.log(comments);

console.log(comments.filter(comment => comment.email.includes(".com")));

comments.forEach(comment => {
if (comment.id <= 5) {
  comment.postId = 2;
} else {
  comment.postId = 1;
}
});

console.log(comments);

const shortComments = comments.map(comment => ({
  id: comment.id,
  name: comment.name
}));

console.log(shortComments);

comments.forEach(comment => {
  comment.isInvalid = comment.body.length > 180;
});

console.log(comments);

const emails = comments.map(comment => comment.email);
console.log(emails);

const emailsReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(emailsReduce);

const emailString = emailsReduce.toString();
console.log(emailString);

const emailsJoin = emailsReduce.join(" | ");
console.log(emailsJoin);