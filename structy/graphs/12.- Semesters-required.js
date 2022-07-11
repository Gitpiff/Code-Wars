// Write a function, semestersRequired, that takes in a number of courses (n) and a list of prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. Return the minimum number of semesters required to complete all n courses. There is no limit on how many courses you can take in a single semester, as long the prerequisites of a course are satisfied before taking it.

// Note that given prerequisite [A, B], you cannot take course A and course B concurrently in the same semester. You must take A in some semester before B.

// You can assume that it is possible to eventually complete all courses.

const semestersRequired = (numCourses, prereqs) => {
    
};

const numCourses = 6;
const prereqs = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];

console.log(semestersRequired(numCourses, prereqs))