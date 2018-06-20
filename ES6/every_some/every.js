const students = [
    {name: 'Francis', grade: 6},
    {name: 'Martin', grade: 6},
    {name: 'Martha', grade: 7}
];

//iterates through each student
//if at least one student fails, grade is < 6, the loop breaks and is false
//else it is true
//simply stating, returns true if EVERY student passes, false otherwise
let allStudentsPassedTheCourse = students.every(function (item) {
    return item.grade >= 6;
});

console.log(allStudentsPassedTheCourse);

