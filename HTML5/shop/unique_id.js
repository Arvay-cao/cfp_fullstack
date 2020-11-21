/**
 * 功能：获得唯一ID
 * @author cfp
 * @date 20-11-21
 * @return {string}
 */
// const uniqueID = () =>{
//     let t= +new Date(); // + 类型转换
//     let ranNum = Math.ceil( Math.random()*10000 )
//     return t + "" + ranNum ;
// }

const uniqueID = () =>  +new Date() + '' + Math.ceil( Math.random()*10000 )
   // return t + "" + ranNum ;

console.log(uniqueID());