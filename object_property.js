const student = [
    {id: 21, name:'Ahsan'},
    {id: 32, name:'Ahnaf'},
    {id: 43, name:'Ahbab'},
    {id: 52, name:'sakib'},
    {id: 62, name:'shahed'}
]


//...........>traditional looping method<.......
// const sList =[];
// for (let i = 0; i < student.length; i++) {
//     sList.push(student[i].name);  
// }
// console.log(sList);


// .......<map method>.........
// console.log(student.map(x => x.name));
// console.log(student.map(x => x.id));
console.log(student.find(x => x.id > 42));