/**
 * @author cfp
 * @date 20-11-20
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const numbers=[3,62,234,7,23,74,23,76,92];
const arr=[];
 
// const largeNumbers =numbders.forEach(function(e,i){
//     if(e>70){
//         arr.push(e);
//     }
// })
//filter 内置函数
const cb = number => number >70
//相当于
// const cb = number =>{ 
//    return number >70；
// }

const largeNumbers =numbers.filter(cb);//回调函数

console.log(largeNumbers);
