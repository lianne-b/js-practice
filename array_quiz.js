// Q1. make a string out of an array
// join() (Array API)
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.join("|"));
  }
  
  // Q2. make an array out of a string
  // split() (String API): Split a string into substrings using the specified separator and return them as an array
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log(fruits.split(","));
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  // reverse() (Array API)
  {
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse());
  }
  
  // Q4. make new array without the first two elements
  // slice() (Array API)
  {
    const array = [1, 2, 3, 4, 5];
    console.log(array.slice(2, 5));
  }
  

  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  // find() (Array API)
  {
    console.log(students.find((student) => student.score === 90));
  }
  
  // Q6. make an array of enrolled students
  // filter() (Array API)
  {
    console.log(students.filter((student) => student.enrolled));
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  // map() (Array API)
  {
    console.log(students.map((student) => student.score));
  }
  
  // Q8. check if there is a student with the score lower than 50
  // some() / every() (Array API)
  {
    console.log(students.some((student) => student.score < 50));
  }
  
  // Q9. compute students' average score
  // reduce() (Array API)
  {
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
  }
  
  // Q10. make a string containing all the scores above 50
  // result should be: '80, 90, 66, 88'
  // map(), filter, join()
  {
    const scoreArray = students
    .map(student => student.score)
    .filter(score => score >= 50) // use a different parameter that represents the resulting value
    .join();
    console.log(scoreArray);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const scoreArray = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();

console.log(scoreArray);

  }
  
