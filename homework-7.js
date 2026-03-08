import { comments } from "./comments.js";

const filteredNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filteredNumbers.filter(number => number >= 5);

console.log(result);

const fruits = ["Яблоки", "Бананы", "Апельсины"];

console.log(fruits.includes("Бананы"));

function reverse(array) {
  return array.reverse();
}

console.log(reverse(numbers));
console.log(reverse(fruits));


console.log(comments);

const comEmails = comments.filter(comment => comment.email.includes(".com"));
console.log(comEmails);

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

const emailsByReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(emailsByReduce);

const emailString = emailsByReduce.toString();
console.log(emailString);

const emailsJoin = emailsByReduce.join(" | ");
console.log(emailsJoin);