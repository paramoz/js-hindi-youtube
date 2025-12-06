// const playerId = 1245
// const playerName = 'kl'
// const playerEmail = 'kl@gmail.com'
// playerCity = 'bbsr'
// console.table([playerId,playerName,playerEmail,playerCity]);
// let score = '33'
// let valueInNumber = Number(score)
// console.log(valueInNumber);
// let isLoggedIn = 0
// let valueInBoolean = Boolean(isLoggedIn)
// console.log(valueInBoolean);
// let negValue = -3
// console.log(negValue);
// console.log(2**4);
// console.log('1'+2);
// console.log('1'+2+2);
// console.log(1+2+'2');
// console.log((3+4)*5);
// console.log('2'>1);
// console.log(2!='2');
// console.log(2!=='2')
// let myObj ={
//     name:'param',
//     age:24
// }
// console.log(myObj);
// myObj.name='ti'
// console.log(myObj);
// let playerName = 'xyz'
// newPlayer=playerName
// playerName='zzz'
// console.log(newPlayer);
// console.log(playerName);

// function addTwoNums(num1 , num2) {
//  console.log(num1+num2)
// }
// addTwoNums(17,18)
// function loginUserMessage(username){
//     return`${username} just logged in`
// }   
// console.log(loginUserMessage('harry'));
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,500,300,800,1000))
// const user ={
//     username:'param',
//     price:999,
//     WelcomeMessage:function(){
//         console.log(`${this.username},welcome to the website`)
//     }
// }
// user.WelcomeMessage()
// user.username = 'ti'
// user.WelcomeMessage()
// const name = 'param'
// const bodyCount = 22
// console.log(`Hello my name is ${name} and my bodycount is ${bodyCount}`);
// const email = 'param%20@gmail.com'
// console.log(email.replace('%20','kalyan99'));
// console.log(email.includes('hit'));
// console.log(email.split('.'));
// console.log(Math.floor(Math.random()*10) + 1);
// const min = 10
// const max = 40
// console.log(Math.floor(Math.random()*(max-min+1))+min)
// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// let myCreatedDate = new Date(2025, 0 , 26);
// console.log(myCreatedDate.toDateString());

// console.log('A',myArr);
// const myArr2 = [50,60,70]
// console.log('b',myArr2)
// const myArr = [10,20,30,40]
// console.log(myArr.splice(1,3));
// const jpnPlayers = ['nishi', 'yuki',' kento']
// const brzPlayers = ['Bruno','darlan','alan']
// // jpnPlayers.push(brzPlayers)
// // console.log(jpnPlayers);
// console.log(...jpnPlayers,...brzPlayers);
// console.log(Array.from("param"));
// console.log(Array.of("param"));
// const pocoUser ={
//     name:'ti',
//     age:22,
//     location:'Iran',
//     duration:'lifelong',
// }
// Object.freeze(pocoUser)
// pocoUser.duration ='1year'
// console.log(pocoUser);
// const user ={
//     username:'param',
//     price:999,
//     WelcomeMessage:function(){
//       console.log(`${this.username},welcome to the website`)
//     }
// }
// user.WelcomeMessage()
// user.username = 'ti'
// user.WelcomeMessage()


// let arr = [5,6,7];
// arr = arr.slice(1);
// console.log(arr);
// let arr2= [10]
// function reverseString(str) 
// {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("GeeksForGeeks"));

// function sortArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 // swap the elements
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// // console.log(sortArray([5, 3, 8, 1]));
// const myArr = [10, 20, 30, 40];
// console.log(myArr[0]);
// const user = {
//     name: 'Ran',
//     age:24,
//     game:"volleyball",
//     team:"japan"

// }
// console.log(user.game);
// console.log(user['team']);
// console.log(user['age']);
// console.log(user['name']);
// user.age = 25;
// console.log(user.age);
// user['game'] = 'football';
// console.log(user.game);
// user.name = 'ronaldo';
// user['team'] = 'brazil';
// console.log(user);
// user.greeeting = function() {
//     console.log(`Hello user, ${this.name}`);
// }
// console.log(user.greeting());

// const jsUser = [10,20,30]
// console.log(jsUser[2]);
// const BlinkUser = {
//     Userid : 'Its Blink',
//     Username :'oreo',
//     Userpasskey :'79zz'
// }
// console.log(BlinkUser);  








// BlinkUser.Userid = 'cartlane'
// console.log(BlinkUser.Userid);
// const user = {
//     name: 'Ran',
//     age: 24,
//     game: "volleyball",
//     welcomeMessage: function() {
//         console.log(`Hello   ${this.name},welcome to the game of ${this.game}`);
//     }
// }
// user.welcomeMessage();
// user.name = 'ronaldo';
// user.game = 'football';
// user.welcomeMessage(); 
// console.log(user);  
// const addTwoNums = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwoNums(10,20));
// const addTwoNums=(num1,num2)=>(num1+num2)
// // console.log(addTwoNums(10,20));   
// function chai () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Your Chai is ready')
//         }, 3000);
//     })
// }


// kitchen().then((res) => {
//     console.log(`person 1: here is your ${res}`);
// })  
// const score = 271
// if (score > 100) {
//     console.log('you are a pro player');
// } else if (score >= 50) {
//     console.log('you are an average player');
// } else {
//     console.log('you are a beginner player');
// }

// switch (score) {
//     case 100:
//         console.log('you are a pro player');
//         break;
//     case 50:
//         console.log('you are an average player');
//         break;
//     case 0:
//         console.log('you are a beginner player');
//         break;
//     default:
//         console.log('invalid score');
// }
// let i = 0
// while (i < 50) {
//     console.log(`value of i is ${i}`);
//     i = i++
// }
// const myArr = [10,20,30,true,'pasha']
// console.log(myArr[4]);
// myArr.push(40,50)
// console.log(myArr);
// console.log(myArr.length);
// myArr.pop()
// console.log(myArr);
// console.log(myArr.indexOf('pasha'));
// // myArr.join()
// console.log(myArr.join());
// console.log(myArr.slice(2,4));
// console.log(myArr.splice(2,4));
// const brazilPlayers = ['neymar', 'bruno', 'darlan']
// brazilPlayers.push('alan','richarlison','vinicius')
// console.log(brazilPlayers);
// const japanPlayers = ['nishi', 'yuki', 'kento']
// const polandPlayers=['leon','fornal']
// const allPlayers = [...brazilPlayers, ...japanPlayers,...polandPlayers]
// console.log(allPlayers);
// const allPlayers = brazilPlayers.concat(japanPlayers).concat(polandPlayers)
// console.log(allPlayers);
// const nums=[1,2,3,[4,5,6],[7,8,9]]
// console.log(nums.flat());
// const Arr2 =[1,2,3,[4,5,6],7, [6,7, [4,5]]]
// console.log(Arr2.flat(Infinity));
// const myObj = {
//     name:'param',
//     age:25,
//     email:'pasha@gmail.com',
//     isLoggedIn:false
// }

// jsUser.age =28
// // console.log(jsUser['age']);
// jsUser.greeting = function() {
//     console.log(`Hello user, ${this.name}`);
// }
// jsUser.greeting()
// jsUser.greeting = function() {
//     console.log('Hello jsUser');
// }
// jsUser. greeting()
// const myObj = Object.freeze(jsUser)
// myObj.age = 30
// myObj.isLoggedIn = true
// console.log(myObj);
// let score1 = 100
// let score2 = 200
// let score3 = 300
// let score4 = 400
// let totalScore = score1 + score2 + score3 + score4
// console.log(totalScore);
// let bonus = 50
// totalScore += bonus
// let penalty = 20
// totalScore -= penalty
// let double = 2
// totalScore *= double
// let divisor = 4
// totalScore /= divisor
// let remainder = 3
// totalScore %= remainder
// let exponent = 3
// totalScore **= exponent
// console.log(totalScore);
// let gameOver = false
// console.log(!gameOver);
// console.log(!!gameOver);
// function myFunction() {
//     console.log('hello world');
// }
// myFunction()
// for (let i = 2; i *=2; i++) {
//     console.log(`value of i is ${i}`);
// }
// var colors = ['red', 'blue', 'green', 'yellow', 'purple']
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }
// colors.forEach(function(color) {
//     console.log(color);
// });
// Math.round(4.6)
// Math.ceil(4.2)
// Math.floor(4.7) 
// console.log(Math.floor(Math.random()*10)+1);    
// Boolean(10>9)
// console.log(Boolean(10>9));
// const arr = [1,2,3,4]
// for (const num of arr) {
//     console.log(num);
// }
// const prog = ['js','py','c++']
// for (const key in prog) {
//     console.log(prog[key]);
// }
// const myObj ={
//     js:'javascript',
//     cpp:"c++",
//     py:'python'
// }
// for (const key in myObj) {
//     console.log(`${key} stands for ${myObj[key]}`);
        
//     }
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
        
//     }
// function addTwoNums(number1, number2){
//     console.log(number1 + number2 )
// }
// addTwoNums(5,10)
// const tinderUser = {}
// tinderUser.id = 'uhuhu'
// tinderUser.isLoggedIn = false
// console.log(tinderUser);
// const regUser = {
//     email:'pasha@gmail.com',
//     fullname:{
//         firstname:'pa',
//         lastname:'sha'
//     }
// }
// // console.log(regUser);
// console.log(regUser.fullname.firstname);
// const Obj1 ={1:'t', 2:'s'}
// const obj2 ={3:'p', 4:'r'}
// const obj4 ={5:'a', 6:'m'}
// const obj3 = Object.assign({},Obj1,obj2,obj4)
// console.log(obj3);   
// const regUser = {
//     email:'pasha@gmail.com',
//     fullname:{
//         firstname:'pa',
//         lastname:'sha'
//     }
// }
// console.log(Object.keys(regUser));
// console.log(Object.values(regUser));
// console.log(Object.entries(regUser));
// console.log(regUser.hasOwnProperty('email'));
// console.log(regUser.hasOwnProperty('pass'));
// const temp = 48
// if (temp <= 0) {
//     console.log('extremely cold outside');  
// } else if (temp > 0 && temp <= 16) {
//     console.log('it is cold outside');
// } else if (temp > 16 && temp <= 25) {
//     console.log('wheather is okay');
// }  else if (temp > 25 && temp <= 35) {
//     console.log('lets go for swim');
// } else {
//     console.log('Please stay home , drink water , stay cool and Turn on the AC');
// }
// function sayMyName(){
//     console.log('param');
// }
// sayMyName()
// function addTwoNumsNums(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumsNums(100000,500000)
// const temp = 48
// if (temp <= 0) {
//     console.log('extremely cold outside');  
// } else if (temp > 0 && temp <= 16) {
//     console.log('it is cold outside');
// } else if (temp > 16 && temp <= 25) {
//     console.log('wheather is okay');
// }  else if (temp > 25 && temp <= 35) {
//     console.log('lets go for swim');
// } else {
//     console.log('Please stay home , drink water , stay cool and Turn on the AC');
// }
// let score1 = 100
// let score2 = 200
// let score3 = 300
// let score4 = 400
// let totalScore = score1 + score2 + score3 + score4
// console.log(totalScore);
// let bonus = 50
// totalScore += bonus
// let penalty = 20
// totalScore -= penalty
// let double = 2
// totalScore *= double
// let divisor = 4
// totalScore /= divisor
console.log('hello world');
