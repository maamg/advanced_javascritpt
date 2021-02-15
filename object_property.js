const student = [
    {id: 001, name:'Ahsan'},
    {id: 002, name:'Ahnaf'},
    {id: 003, name:'Ahbab'},
    {id: 002, name:'sakib'},
    {id: 002, name:'shahed'}
]

const sList =[];

for (let i = 0; i < student.length; i++) {
    sList.push(student[i].name);  
}
console.log(sList);