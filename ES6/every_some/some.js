const students = [
    {name: 'Francis', grade: 4},
    {name: 'Martin', grade: 4},
    {name: 'Martha', grade: 4}
];

//if at least one student passes, returns true.
//only returns false if all of the students fail
let allStudentsPassedTheCourse = students.every(function (item) {
    return item.grade >= 6;
});

console.log(allStudentsPassedTheCourse);