//ex1
//let arr = [2,5,100]
// let arr1 = arr.map(e=>e*2)
// console.log(arr1);

//ex2
// let arr = [2,5,100]
// let arr1 = arr.join(' ').split(' ')
// console.log(arr1);


//ex3
// let arr = ["john", "JACOB", "jinGleHeimer", "schmidt"]
// let arr1 = arr.map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())
// console.log(arr1);


//ex4
// let obj = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ];
// function namesOnly(obj){
//     let arr = obj.map(e=>e.name)
//     console.log(arr);
// }
// namesOnly(obj)


//ex5

// let arr = obj.map(e=>e.age>=18?e.name+' can go to The Matrix':e.name+' is under age!')
// console.log(arr);



//ex6
// const input = [ 1, -4, 12, 0, -3, 29, -150]
// if(!input.length) console.log(0);
// let arr = input.filter(e=>e>0).reduce((a,b)=>a+b)
//  console.log(arr);


//ex7
// const input7 = [
//     {
//         name: 'John',
//         age: 13
//     },
//     {
//         name: 'Mark',
//         age: 56,
//     },
//     {
//         name: 'Rachel',
//         age: 45,
//     },
//     {
//         name: 'Nate',
//         age: 67,
//     },
//     {
//         name: 'Jeniffer',
//         age: 65,
//     }
// ];
// let arr = input7.map(e=>e.age)
// let max = Math.max(...arr)
// let min = Math.min(...arr)
// let diff = max-min
// console.log(max,min,diff);


//ex8
// const input8 = [
//     ['a', 'b', 'c'],
//     ['c', 'd', 'f'],
//     ['d', 'f', 'g'],
// ];
// let arr = input8.flat()
// let obj = arr.reduce((acc,item)=>{
//     if(!acc[item]){
//         acc[item] = 1
//     }else{
//         acc[item]++
//     }
//     return acc
// },{})
// console.log(obj);



//ex9
// let nums = [2,2,1,1,1,2,2,5,6,6]
// let obj = nums.reduce((acc,item)=>{
//     let num
//     if(!acc[item]){
//                  acc[item] = 1
//              }else{
//                  acc[item]++
//           }
         
//           for (const key in acc) {
//             //   if(acc[key]>nums.length/2){
//             //       console.log(acc[key]);
//             //   }
//             //if(acc[key]=val)return console.log(key);
//           }

          
//      return acc
// },{})


//ex10
// let val = Object.values(obj).sort((a,b)=>b-a)[2]
// for (const key in obj) {
//     if(obj[key]==val){
//         console.log(key);
//     }
// }





//ex11
// let s = "iloveleetcode", words = ["i","love","leetcode","apples"]
// let str = words.join('')
// console.log(str.startsWith(s));


// //ex12
// const phoneCountryCodes = {
//     '+374': 'Armenia',
//     '+375': 'Somali',
//     '+376': 'Russia',
//     '+377': 'Hoktemberyan',
// }

// const arrOfObjects = [

//     {
//         name: 'sarah',
//         age: 32,
//         phoneNumber: '+374000000',
//         relation: 'nelly'
//     },
//     {
//         name: 'nelly',
//         age: 11,
//         phoneNumber: '+3750020000',
//         relation: 'sarah'
//     }
// ];

// function foo(arr, obj) {
//     for(let key in obj) {
//         arr.map((el) => {
//             if(el.phoneNumber.startsWith(key)) {
//                 el['country'] = obj[key];
//                 el.name = el.name.toUpperCase()
//                 let [referancetoSarahObject,referanceToNellyObject] = arr
//                 el.relation = el.name=='SARAH'?referancetoSarahObject:referanceToNellyObject
//                 return el;
//             }
//         })
//     }

//     return arr
// }
// console.log(foo(arrOfObjects, phoneCountryCodes))
