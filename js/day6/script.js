 
/*
const students = [
    { name: "Arun", age: 21, department: "IT" },
    { name: "Priya", age: 22, department: "CSE" },
    { name: "Karthik", age: 21, department: "ECE" },
    { name: "Divya", age: 22, department: "IT" }
];

/*
for(i=0; i<students.length; i++)
    {
    console.log(students[i].name);
    console.log(students[i].age);
}
    */

//let show=students.map((e)=>{

   // console.log(e);
   // return e;   

   // console.log(e.name);
   // return e.name;

//});

//console.log(show);

//students[0].age = 23;
//students[2].department = "IT";


//console.log(students[0]);



let students = [
    {
        name: "Arun",
        age: 21,
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Priya",
        age: 22,
        skills: ["Java", "SQL", "React"]
    },
    {
        name: "Karthik",
        age: 21,
        skills: ["Python", "MongoDB", "Node"]
    }
];

let skills = students.map((element, index) => {
    return element.skills;
});

console.log(skills);

for (let student of students) {
    console.log(student.name);

    for (let skill of student.skills) {
        console.log(skill);
    }
}
let names = students.map((element, index) => {
    return element.name;
});

console.log(names);

students[0].skills[2] = "React";

console.log(students[0]);