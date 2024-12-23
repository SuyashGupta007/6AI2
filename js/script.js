// //strings
//         //0123456789
// var str = "Javascript"
//           //        --3-2-1
// var strn = "Js is a good for DSA Js"
// console.log(str.length)
// console.log(str.charAt(5))
// console.log(str.charCodeAt(3))
// console.log(str.concat(" is king"))
// console.log(strn.split(""))
// console.log(strn.includes("JS"))
// console.log(strn.indexOf("Js"))
// console.log(strn.lastIndexOf("Js"))
// console.log(strn.replaceAll("Js","C++"))
// console.log(strn.slice(0,3))

// var brr =[1,"king",3.14,12234455]
// var arr = [1,2,3,4,5,0,9,2,4]
// // arr.push(6)
// // console.log(arr)
// // arr.pop()
// // console.log(arr)
// // arr.unshift(0)
// // console.log(arr)
// // console.log(arr.shift())
// // console.log(arr)

// console.log(arr.toString())
// console.log(arr.join(" and "))
// console.log(arr.concat(brr))

// //splice & slice
// // console.log(arr.splice(0,2))
// // console.log(arr)
// // console.log(arr.slice(0,2))
// // console.log(arr)
// //Arrow function
// //()=>{}

// //forEach
// let count =0;
// arr.forEach((n)=>{
//   count++
// })

// console.log(count)

// //map()

// let doubled=arr.map((n)=>{
//         return n*n;
// })
// console.log(doubled)

// //reduce()

// let sum = arr.reduce((total,curr)=>{
//         return total+curr
// })
// console.log(sum)

// //filter 

// console.log(arr.filter((n)=>n>2))

// console.log(arr.indexOf(4))
// console.log(arr.find((n)=>n===2))
// console.log(arr.sort())







// //objects

// var obj = {
//         "firstName":"Suyash",
//         "lastName":"Gupta",
//         "Phno":7080249355,
//         "isEmployed":true ,
//         "sayHello": function(){ console.log("hiiii")},
//         "eat":()=>console.log("I like Indian food")

        
// }

// console.log(obj.Phno)
// console.log(obj.sayHello)
// for (var key in obj){
//       //console.log(key + obj[key])
// console.log(`${key}: ${obj[key]}`)  
// }

//function statment

// a()
// //b()
// function a (){
//         console.log(" hi i am a")
// }
// //a();

// //function Expression

// var b = function(){
//         console.log("b");
// }
// b()


// // function (){}
// var square =  function(param1){
//         return function(){
//                 return param1*param1;
//         }
// }

// console.log(square(2)())

//async JS
//callbacks
   //setTimeout
   //setinterval
//promises
//fetch
//axios
//XTMLHttpRequest
//async await 

// console.log("hiiii")

// setTimeout(function(){
//         console.log("hiii2")
// },5000)
// console.log("hiii3")

//fetch 
// var ans = fetch(`https://randomuser.me/api/`)
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err))


//promise 
// var promise = new Promise((resolve,reject)=>{
   
//         if(false){
//                resolve("Sucess")
//         }else{
//                 reject("Err")
//         }

// })
// promise.then((result)=>{
//         console.log("Bhai result aa gaya",result)
// }).catch((err)=>{
//         console.log("bhai result nhi err aaya hai",err)
// })

// console.log(promise)


//async await
async function user(){
var ans = await fetch(`https://randomuser.me/api/`)
var data = await ans.json()
 console.log(data)
}
user();





