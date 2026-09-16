 

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

let show=students.map((e)=>{

    console.log(e);
    return e;   

   // console.log(e.name);
   // return e.name;

});

console.log(show);

students[0].age = 23;
students[2].department = "IT";


//console.log(students[0]);
