let num = [2, 3, 4, 5, 6, 7, 8, 9];
// let sq = [];
// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     const result = element * element;
//     sq.push(result);
// }


// sq= num.map(x => x * x);


let bigger = num.filter(x => x>3);  //[ 4, 5, 6, 7, 8, 9 ] it's a array

let nextBigger = num.find(x => x>3);  // 4, not an array it's a element


console.log(nextBigger);