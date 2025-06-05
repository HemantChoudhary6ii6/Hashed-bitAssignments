// Question 1
let states = ["Andhra Pradesh", "Bihar", "Odisha", "Uttar Pradesh", "Maharashtra", "Kerala"];
let filteredStates = states.filter(state => !["A", "E", "I", "O", "U"].includes(state[0].toUpperCase()));
console.log("Q1:", filteredStates); // States not starting with vowels

// Question 2
let str = 'I love my India';
let reversed = str.split(" ").reverse().join(" ");
console.log("Q2:", reversed); // 'India my love I'

// Question 3
let string = "INDIA".split('');
string.splice(2, 3, 'O', 'N', 'E', 'S', 'I', 'A');
let result = string.join('');
console.log("Q3:", result); // 'INDONESIA'

// Question 4
let sentence = "JavaScript is a powerful language";
let vowels = 'aeiouAEIOU';
let vowelCount = 0, consonantCount = 0;

for (let char of sentence) {
  if (/[a-z]/i.test(char)) {
    if (vowels.includes(char)) vowelCount++;
    else consonantCount++;
  }
}
console.log("Q4: Vowels =", vowelCount, "Consonants =", consonantCount);

// Question 5
function correctfn(sentence, wrong, correct) {
  return sentence.replace(new RegExp(wrong, 'g'), correct);
}
console.log("Q5:", correctfn("I luv coding", "luv", "love")); // 'I love coding'

// Question 6
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let answer = inputArr.filter(num => num > 5);
console.log("Q6:", answer); // [9, 10, 7]

// Question 7
const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students.map(student => {
  const avg = student.scores.reduce((sum, s) => sum + s, 0) / student.scores.length;
  return { name: student.name, average: avg };
});
console.log("Q7:", output);

// Question 8
function repeatedSum(num) {
  while (num >= 10) {
    num = num.toString().split('').reduce((sum, d) => sum + parseInt(d), 0);
  }
  return num;
}
console.log("Q8:", repeatedSum(456)); // 6

// Question 9
function countWords(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}
console.log("Q9:", countWords("This is a sample paragraph with multiple words.")); // 8

// Question 10
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log("Q10:", reverseString("Hello")); // olleH

// Question 11
let studentsData = {
  student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

let finalOutput = {};

for (let student in studentsData) {
  let marks = Object.values(studentsData[student]);
  let avg = marks.reduce((sum, m) => sum + m, 0) / marks.length;
  finalOutput[student] = { average: avg };
}

console.log("Q11:", finalOutput);
