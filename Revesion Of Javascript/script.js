// let body = document.body;
// let inp = prompt("Enter message : ")
// body.innerHTML = inp
// let date = new Date();
// if (date.getHours() < 12) {
//     body.innerHTML = "Good, Morning!"
// } else if (date.getHours() >= 12 && date.getHours() <= 18) {
//     body.innerHTML = "Good, Afternoon!"
// }

// ******************************** Chapter 1 : Variables And Data Types ********************************

// var can be changed and redeclare
// var namee = "Ajay";
// var namee = "Rahul";
// namee = "Ajey";

// let can be changed but not redeclare
// let namee = "Ajay";
// namee = "Rahul"

// const can not be changed and redeclared
// const namee = "Ajay"

// const data = {
//     name : "Ajay",
//     age : 20,
//     Phone_Number : 8857822354,
//     marks : 99.9
// };

// console.table(data)

// Primitive Data types : There are 7 primitive data types

// 1. String
// 2. Symbol
// 3. null
// 4. Number 
// 5. BigInt 
// 6. boolean
// 7. undefined


// ********************************Chapter 2 Expression And Condition********************************


// let a = 10;
// let b = 5;

// 1. Arithmetic Operators

// var c = a + b; // Addition
// c = a - b; //  Substraction
// c = a / b; //  Division
// c = a * b; //  Multiplication
// c = a ** b; // Exponentiation
// c = a % b; //  Modulus
// c = a++ && ++a; //  Increment
// c = a-- && --a; //  Decrement


// 2. Assignment Operators

// a = b;   // same as a = b
// a += b;  // same as a = a + b
// a -= b;  // same as a = a - b
// a *= b;  // same as a = a * b
// a /= b;  // same as a = a / b
// a %= b;  // same as a = a % b
// a ** b;  // same as a = a ** b

// 3. Comparison Operators

// Comparison Operators will return true and false

// a == b;
// a != b;
// a === b;
// a !== b;
// a > b;
// a < b;
// a >= b;
// a <= b;
// ? // ternery operator


// 4. Logical Operators

// && this is "and"
// || this ir "or"
// ! this is logical not operator


// 5. Conditional Statement

// if(condition){
//     code
// }else if(condition){
//     code
// }else if(condition){
//     code
// }else{
//     code
// }

// ************ Chapter 2 : Practice Set ************ // 

// 1. Solution 

// let age = prompt("Enter your age : ");

// if(age > 10 && age < 20){
//     body.innerHTML = ("The age is lies between 10 And 20")
// }else{
//     body.innerHTML = "The Age is not lies between 10 and 20"
// }

// 2. Solution

// let elem = prompt("Enter your name : ")

// switch (elem){
//     case "Ajay" : 
//         body.innerHTML = "You are a Software Engineer"
//         break;
//     case "Rahul" :
//         body.innerHTML = "you are a shopkeeper";
//         break;
//     case "Deepak" :
//         body.innerHTML = "you are a farmer";
//         break
//     default : 
//         body.innerHTML = "You Exist?"
// }

// 3. Solution && 4. Solution

// let num = prompt("Enter a number : ");

// if(num % 2 == 0){
//     body.innerHTML = "your number is divisible by 2"
// }else if(num % 3 == 0){
//     body.innerHTML = "Your number is divisible by 3"
// }else{
//     body.innerHTML = "your number is not divide by 2 and 3"
// }

// 5. Solution

// let age = prompt("Enter your age : ");
// body.innerHTML = (age >= 18) ? "you can drive" : "You can not drive"


// ********************************Chapter 3 : Loops And Functions ********************************

// Types of loops in Javascript

// 1. For loop 

// for(let i = 0; i<= 100; i++){
//     console.log(i)
// }

// 2. For in loop

// let list = [1,2,3,4,5,6,7,8, "hey"]
// for(i in list){
//     console.log(i)
// }

// 3.  For of loop

// let str = "Hey are you coding me ";

// for(key of str){
//     console.log(key)
// }

// 4. While loop

// let num = 0;

// while (num <= 10){
//     console.log(num)
//     num += 2
// }

// 5 . Do While Loop 

// let num = 0;

// do{
//     console.log(num)
//     num++
// }while(num < 10)

// Functions in Javascript

// function Ajay(a, b, c){
//     return a + b + c;
// }
// console.log(Ajay(10, 20, 30))

// Array Function 

// let Ajay = (a, b) => {return a + b;}
// console.log(Ajay(10,20))

// ************ Chapter 3 : Practice Set ************ // 

// 1. Solution  && 2. Solution

// obj = {
//     harry : 98,
//     rohan : 70,
//     aakash : 7
// }

// Using For loop
// for(let i = 0; i< Object.keys(obj).length; i++){
//     console.log(Object.keys(obj)[i] + " marks are " + obj[Object.keys(obj)[i]])
// }

// Using For in loop
// for(key in obj){
//     console.log(`The Marks of ${key} are ${obj[key]}`)
// }

// 3. Solution 

// let num;

// while(num != 20){
//     alert("Try Again")
//     num = prompt("Enter the number : ");
// }

// 4. Solution

// function mean(a,b,c,d){
//     return (a+b+c+d) / 4
// }
// body.innerHTML = (mean(10,20,302,02))

// ********************************Chapter 4 : String ********************************

// three types to write string

// let str = "Hey My name is 'Ajay'"; // double coute you can use single in this but not double
// let str = 'Hey My name is "Ajay"'; // single coute you can use double in this but not single
// let str = `Hey my 'name' is "Ajay"`; // template litrel you can use single and double coute 

// Escape Sequence Character 

// console.log("you can use \n like this for create a new line")
// console.log("you can use \t like this for createing tab between line")
// console.log("you can use \rlike this for create a new line")

// String Properties And Methods 

// let nem = "Ajay Kharat";
// body.innerHTML = nem.length // This will return length of string (4)
// body.innerHTML = nem.toUpperCase() // convert to upper case
// body.innerHTML = nem.toLowerCase() // convert to lower case

// body.innerHTML = nem.slice(2,4) // return "ay"
// body.innerHTML = nem.replace("Kharat", "Shivarkar"); // replace "ay" to "AY";

// let nam = "         Kharat          ";

// body.innerHTML = nem.concat(nam + "yes")
// body.innerHTML = nam.trim()

// Strings are immutable 
// For accessing character of an index we use the following syntex

// let str = "Ajay Kharat";

// body.innerHTML = str[0]  // return "A"
// body.innerHTML = str[str.length -3 ] // return "j"
// body.innerHTML = str.length - 3

// ************ Chapter 4 : Practice Set ************ // 

// 1. Solution

// body.innerHTML = "har\"ry".length // this will return 6

// 2. solution

// let str = "Ajay Kharat";

// body.innerHTML = str.includes("Ajay") // this will return true and false 
// body.innerHTML = str.startsWith("A") // this will return booleans
// body.innerHTML = str.endsWith("t") // this will return booleans

// 3. solution

// let str = "AjAy GanESh KHArat";
// body.innerHTML = str.toLowerCase()
// body.innerHTML = str.toUpperCase()

// 4. Solution

// let string = "Please give rs 1000";
// body.innerHTML = string.slice(15,19)

// 5. Solution

// let str = "Hey are you code in vs"
// str = str.replace(str[4], "Y");
// body.innerHTML = str

// STRINGS ARE IMMUTABLE WE CAN'T CHANGE THEM BUT WE CREATE NEW


// ******************************** Chapter 5 : Arrays ********************************

// const arra = ["Ajay", "Rahul", "Rohit", 23, 32, true, false, null , undefined]
// array can store any type of data in it

// body.innerHTML = typeof(arra)
// arra[3] = "Rohan"
// Arrays are mutable they can be change
// Arrays are type of object
// body.innerHTML = arra

// Arrays Methods

// body.innerHTML = typeof(arra) // return object

// tostring()
// body.innerHTML = typeof(typeof(arra)) // return string

// join()
// body.innerHTML = arra.join("*") // join the array with "-"

// pop() will remove the last element of an array
// Push() will add element to the end of an array

// shift() will remove first element of an array
// unshift() will add element to the starting of an array

// delete[index] will delete the element from an array

// array.concat(array1, array2) 
// this will  returs a new array does not change the exising array
// used to join arrays to given array

// sort()
// let arr = [2,43,532,4,23,5,53,43,23,25,5,4,23,234,]
// body.innerHTML = arr.sort() 
// this will sort array alphabetically

// splice()
// Array.splice(position to add, number of element to remove, element to be added)

// slice()
// slice out a piece from an array It creates a new array 

// const num = [1,2,3,4]
// body.innerHTML = num.slice(2) // return [3,4]
// num.slice(1,3) // return [2,3]


// reverse()
// this will reverse the array elements 
// let arr = [1,2,3,4,5,6,23,42,12]
// body.innerHTML = arr.reverse() // return [6,5,4,3,2,1]

// Loops methods for array

// for of 

// let array = [1,2,3,353,53, "Harry", "Ajay", "Rahul", true]

// for(items of array){
//     console.log(items)
// }

// for(key in array){
//     console.log(array[key])
// }

// map 

// let arr = [5, 1, 3, 2, 6]

// function double(x){
//     return x * 2;
// }

// function triple(x){
//     return x * 3;
// }

// function binary(x){
//     return x.toString(2)
// }

// const output = arr.map((x)=>{
//     return x * 3
// });
// body.innerHTML = (output) 

// Filter 

// const arr = [5,2,3,4,7];

// filter odd values

// return odd values
// function toOdd(x){
//     return x % 2; 
// }

// return Even values
// function toEven(x){
//     return x % 2 === 0;
// }

// return values that greater than 4
// function togret(x){
//     return x >= 4;
// }

// let output = arr.filter((x) => {
//     return x % 2 === 0
// })
// body.innerHTML = output

// reduce 

// const arr = [2,4,315
// const user = [
//     {name : "Ajay", surname : "kharat", age : 20},
//     {name : "Rahul", surname : "Dawle", age : 27},
//     {name : "Ajey", surname : "Shivarkar", age : 27},
//     {name : "Deepak", surname : "Kadavne", age : 29}
// ]

// const output = user.map(function(x){
//     return x.name + " " + x.surname
// })

// const output = user.reduce(function(x,y){
//     return x + y
// }, {})
// body.innerHTML = output

// let arr = [12,3,43,56,4543,34,4354,456,45,4,645,634,345];

// let tot = arr.reduce((total, num)=>{
//     return total + num
// })

// body.innerHTML = tot


// Checking Map, filter and reduce 

// let arr = [2,5,32,66,21];

// let output = arr.reduce((x, y) =>{
//     return x - y
// })


// body.innerHTML = output

// ************ Chapter 5 : Practice Set ************ // 

// 1. Solution

// let arr = [1,2,3,4,5,6];
// for(let i = 0; i< 5; i++){
//     let user = prompt("Enter the number : ")
//     arr.unshift(user)
// }
// body.innerHTML = arr

// 2. Solution

// let arr = [];
// let inp;
// while(inp != 0){
//     inp = prompt("Enter the number to add on this array : ") 
//     arr.push(inp)
// }
// body.innerHTML = arr

// 3.Solution

// let arr = [12,15,24,35,50,51,100,70,60,50];
// let output = arr.filter((x)=>{return x % 10 == 0})
// body.innerHTML = output


// 4.Solution

// let arr = [2,3,5,34,6,23,54,10];
// let output = arr.map((x)=>{return x * x})
// body.innerHTML = output

// 5.Solution

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let output = arr.reduce((x,y)=> { return x + y})
// body.innerHTML = output


// ********************************Chapter 6 : JavaScript in the browser ********************************

// console object methods

// 1. assert
// const errorMsg = 'the # is not even';
// for (let number = 2; number <= 5; number++) {
//   console.log(`the # is ${number}`);
//   console.assert(number % 2 === 0, { number, errorMsg });
// }

// 2. clear
// will clear the console
// console.clear()

// 3. log
// console.log("Hey")

// 4.table
// console.table(Array)

// 5.warn 
// console.warn("This is warning")

// 6. error 
// console.error("This is a error")

// 7. info
// console.info("Same as log")

// Interaction : alert, prompt and confirm

// alert : used to invoke a mini window with a msg
// alert("hello")

// prompt("You can enter string here ")

// confirm("show a massage ")
// show a massage to a user and get input in true and false 

// ************ Chapter 6 : Practice Set ************ // 

// 1. Solution 

// let inp = prompt("Enter your age : ");
// alert(inp >= 18 ? "you can drive" : "you can not drive")

// 2. Solution

// let age;
// let con = true
// while(con == true){
//     age = prompt("Enter your age");
//     alert(age >= 18 ? "you can drive" : "you can not drive")
//     con = confirm("Do you want to enter your age again?")
// }

// 3. Solution

// let age;
// let con = true
// while(con == true){
//     age = prompt("Enter your age");
//     if(age >= 18 && age <= 70){
//         alert("you can drive")
//     }else if(age <= 0){
//         console.error("you entered wront details")
//     }else{
//         alert("you can not drive")
//     }
//     con = confirm("Do you want to enter your age again?")
// }

// 4. Solution

// let inp = prompt("Enter a number : ");
// if(inp >= 4){
//     window.location = "https://google.com"
// }

// 5.Solution

// let inp = prompt("Enter a colour : ")
// body.style.backgroundColor = inp;


// ******************************** Exercise No 1 ********************************

// let Random_Number = Math.random() * 100;
// Random_Number = Number.parseInt(Random_Number);

// let user;
// let chance;

// while(Random_Number != user){
//     user = prompt("Enter a number : ");
//     chance = chance + 1;

//     if(Random_Number == user){
//         alert("Congradulations!! You won")
//     }else if(Random_Number > user && user > 0){
//         alert("you entered a small number enter a big number")
//     }else if(Random_Number < user && user < 100){
//         alert("you entered a big number enter small number")
//     }else{
//         alert("please enter a number between 1 to 100")
//     }
// }

// alert(`you guess correct number in ${chance} chances`)

// ******************************** Exercise No 2 ********************************

// let mar = document.getElementById("mar");
// let inp = prompt("Enter your name");
// mar.innerHTML = `Good Morning ${inp} sir! Please stay on this page for 30 sec`

// function game(come, user) {
//     if (comp == user) {
//         return null
//     } else if (comp == "s") {
//         if (user == "g") {
//             return true
//         } else if (user == "w") {
//             return false
//         }
//     } else if (comp == "w") {
//         if (user == "s") {
//             return true
//         } else if (user == "g") {
//             return false
//         }
//     } else if (comp == "g") {
//         if (user == "w") {
//             return true
//         } else if (user == "s") {
//             return false
//         }
//     }
// }

// let rn = Math.random() * 3 + 1;
// rn = Number.parseInt(rn);

// let comp;

// if (rn == 1) {
//     comp = "s"
// } else if (rn == 2) {
//     comp = "w"
// } else if (rn == 3) {
//     comp = "g"
// }

// let user = prompt("Enter 's' 'w' or 'g")

// let a = game(comp, user);

// if(a == null){
//     body.innerHTML = "The game is Tie"
// }else if(a){
//     body.innerHTML = "Congradulation!! You Won"
// }else{
//     body.innerHTML = "Bad Luck!! You loose"
// }


// console.log(`comp choose ${comp} and you choose ${user}`)


// ******************************** Exercise No 3 ********************************

// let list = ["1. What do you call a boomerang that won’t come back? A stick.",
//   "2. What does a cloud wear under his raincoat? Thunderwear.",
//   "3. Two pickles fell out of a jar onto the floor. What did one say to the other? Dill with it.",
//   "4. What time is it when the clock strikes 13? Time to get a new clock.",
//   "5. How does a cucumber become a pickle? It goes through a jarring experience.",
//   "6. What did one toilet say to the other? You look a bit flushed.",
//   "7. What do you think of that new diner on the moon? Food was good, but there really wasn’t much atmosphere.",
//   "8. Why did the dinosaur cross the road? Because the chicken wasn’t born yet.",
//   "9. Why can’t Elsa from Frozen have a balloon? Because she will 'let it go, let it go.'",
//   "10. What musical instrument is found in the bathroom? A tuba toothpaste.",
//   "11. Why did the kid bring a ladder to school? Because she wanted to go to high school.",
//   "12. What do you call a dog magician? A labracadabrador.",
//   "13. Where would you find an elephant? The same place you lost her.",
//   "14. How do you get a squirrel to like you? Act like a nut.",
//   "15. What do you call two birds in love? Tweethearts",
//   "16. How does a scientist freshen her breath? With experi-mints.",
//   "17. How are false teeth like stars? They come out at night.",
//   "18. What building in your town has the most stories? The public library.",
//   "19. What’s worse than finding a worm in your apple? Finding half a worm.",
//   "20. What is a computer's favorite snack? Computer chips.",
//   "21. What did one volcano say to the other? I lava you.",
//   "22. How do we know that the ocean is friendly? It waves.",
//   "23. What is a tornado’s favorite game to play? Twister",
//   "24. How does the moon cut his hair? Eclipse it.",
//   "25. How do you talk to a giant? Use big words.",
//   "26. What animal is always at a baseball game? A bat.",
//   "27. What falls in winter but never gets hurt? Snow",
//   "28. What did the Dalmatian say after lunch? That hit the spot.",
//   "29. Why did the kid cross the playground? To get to the other slide.",
//   "30. What do you call a droid that takes the long way around? R2 detour.",
//   "31. Why did the cookie go to the hospital? Because he felt crummy.",
//   "32. Why was the baby strawberry crying? Because her mom and dad were in a jam.",
//   "33. What did the little corn say to the mama corn? Where is pop corn?",
//   "34. How do you make a lemon drop? Just let it fall",
//   "35. What did the limestone say to the geologist? Don’t take me for granite.",
//   "36. Why does a seagull fly over the sea? Because if it flew over the bay, it would be a baygull.",
//   "37. What kind of water can’t freeze? Hot water.",
//   "38. What kind of tree fits in your hand? A palm tree.",
//   "39. What do you call a dinosaur that is sleeping? A dino-snore.",
//   "40. What is fast, loud and crunchy? A rocket chip.",
//   "41. Why did the teddy bear say no to dessert? Because she was stuffed.",
//   "42. What has ears but cannot hear? A cornfield.",
//   "43. What did the left eye say to the right eye? Between us, something smells.",
//   "44. What did one plate say to the other plate? Dinner is on me.",
//   "45. Why did the student eat his homework? Because the teacher told him it was a piece of cake.",
//   "46. When you look for something, why is it always in the last place you look? Because when you find it, you stop looking.",
//   "47. What is brown, hairy and wears sunglasses? A coconut on vacation.",
//   "48. What do you say to a rabbit on its birthday? Hoppy Birthday.",
//   "49. What’s the one thing will you get every year on your birthday, guaranteed? A year older.",
//   "50. Why do candles always go on the top of cakes? Because it's hard to light them from the bottom.",
//   "51. What do cakes and baseball teams have in common? They both need a good batter.",
//   "52. What goes up but never comes down? Your age.",
//   "53. What does every birthday end with? The letter Y.",
//   "54. What did the tiger say to her cub on his birthday? It's roar birthday.",
//   "55. Why did the girl put her cake in the freezer? She wanted to ice it.",
//   "56. Does a green candle burn longer than a pink one? No, they both burn shorter.",
//   "57. Why did the little girl hit her birthday cake with a hammer? It was a pound cake.",
//   "58. Yo Mama so small her best friend is an ant.",
//   "59. Yo Mama so old God signed her yearbook.",
//   "60. Yo Mama so short she has to hold a sign up that says, 'Don't spit, I can't swim.'",
//   "61. Yo Mama so small she has to slam-dunk her bus fare.",
//   "62. Yo Mama so old she rode dinosaurs to school.",
//   "63. Yo Mama so old her memory is in black and white.",
//   "64. Why didn't the quarter roll down the hill with the nickel? Because it had more cents.",
//   "65. Why is the obtuse triangle always so frustrated? Because it’s never right.",
//   "66. Why is six afraid of seven? Because seven eight nine.",
//   "67. Why was the equal sign so humble? Because he wasn’t greater than or less than anyone else.",
//   "68. What do you call guys who love math? Algebros.",
//   "69. How do you stay warm in any room? Go to the corner—it’s always 90 degrees.",
//   "70. Why was the fraction nervous about marrying the decimal? Because he would have to convert.",
//   "71. Are monsters good at math? Not unless you count Dracula.",
//   "72. Why was the math book sad? Because it had too many problems.",
//   "73. Why does nobody talk to circles? Because there’s no point.",
//   "74. Why couldn't the pony sing a lullaby? She was a little horse.",
//   "75. What was the first animal in space? The cow that jumped over the moon.",
//   "76. Why don’t elephants chew gum? They do, just not in public.",
//   "77. What did the banana say to the dog? Bananas can’t talk.",
//   "78. How do you make an octopus laugh? With ten-tickles.",
//   "79. What do you call a sleeping bull? A bull-dozer.",
//   "80. How do you fit more pigs on a farm? Build a sty-scraper.",
//   "81. What did the farmer call the cow that had no milk? An udder failure.",
//   "82. What do you call a cow that won't give milk? A milk dud.",
//   "83. Why do fish live in salt water? Because pepper makes them sneeze.",
//   "84. What do you get from a pampered cow? Spoiled milk.",
//   "85. Where do polar bears vote? The North Poll",
//   "86. What sound do porcupines make when they kiss? Ouch!",
//   "87. Why did the snake cross the road? To get to the other ssside.",
//   "88. Why are fish so smart? Because they live in schools.",
//   "89. What did the ocean say to the pirate? Nothing, it just waved.",
//   "90. Why don’t pirates shower before they walk the plank? Because they’ll just wash up on shore later.",
//   "91. What happened when Bluebeard fell overboard in the Red Sea? He got marooned.",
//   "92. How did the pirate get his flag so cheaply? He bought it on sail.",
//   "93. What has 8 legs, 8 arms, and 8 eyes? 8 pirates.",
//   "94. How much does it cost a pirate to get his ears pierced? About a buck an ear.",
//   "95. Why is pirating so addictive? They say once ye lose yer first hand, ye get hooked.",
//   "96. How do pirates know that they are pirates? They think, therefore they arrr.",
//   "97. What is a cat's favorite color? Purrr-ple.",
//   "98. What song does a cat like best? Three Blind Mice.",
//   "99. Where did the school kittens go for their field trip? To the mew-seum.",
//   "100. What kind of kitten works for the Red Cross? A first-aid kit."
// ]


// function random_item(items) {
//   return items[Math.floor(Math.random() * items.length)]
// }

// let container = document.getElementById("container")
// container.innerHTML = (random_item(list));

// ******************************** Chapter 7 : Walking The DOM ********************************


// Dom methods 

// document.body // giver you body tag
// console.log(document.documentElement) // gives you all html

// Nodes in the Dom tree

// 1. Text nodes 
// 2. element nodes
// 3. comment nodes

// browser will auto correct your html tags if you forgot to close 


// Accessing Children of an element 

// firstchild, lastchild, childnodes

// element.firstChild // first child element
// element.lastChild // last child element
// element.childNodes // all child nodes
// element.hasChild // will return booleans

// Following is always true

// elem.childNodes[0] === elem.firstChild 
// elem.childNodes[elem.childNodes.length -1 ] === elem.lastChild

// Parents and Siblings of an Element

// $0 will show you selected element in console

// parent 
// console.log(body.parentElement)
// console.log(body.parentNode)

// siblings
// console.log(body.previousSibling)
// console.log(body.nextSibling)

// Element only navigation

// let b = document.body;
// b.firstChild // will give you text, comment, neither element
// b.firstElementChild // will give you only element

// All element accessing methods of dom

// b.nextElementSibling
// b.previousElementSibling
// b.firstElementChild
// b.lastElementChild
// b.children // gives only element children


// Table Navigation

// table.rows // collection of tr element
// table.caption // reference to caption
// table.thead // reference to thead
// table.foot // reference to foot
// table.bodies

// tbody.rows

// tr.cells
// tr.sectionRowIndex
// tr.rowIndex

// td.cellIndex


// Searchind in DOM

// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByName();
// document.getElementsByTagName();
// document.querySelector();
// document.querySelectorAll();

// matches, closet and contains

// Element.matches(css) 
// to check if element matches the given css selector

// Element.closet(css) 
// to look for a nearest  ancertor that matches the given css selector
// the elem it self is also checker

// elema.contains(elemb) 
// return true if elem b is inside elem a 

// ************ Chapter 7 : Practice Set ************ // 

// 1. Solution

// let nav = document.getElementsByTagName("nav")[0];
// nav.firstElementChild.style.background = "red"

// 2. Solution 
// No 

// 3. Solution

// console.log(document.getElementsByTagName("footer")[0].firstElementChild.style.color = "green")
// console.log(document.getElementsByTagName("footer")[0].lastElementChild.style.color = "green")

// 4. Solution

// let li = document.getElementsByTagName("li");
// for(let i = 0; i< li.length; i++){
//     li[i].style.background = "green"
// }

// Array.from(li).forEach((elem) =>{
//     elem.style.background = "cyan"
// })

// 5. Solution

// none we cannot access the farthest css selectors


// *************************** Chapter 8 : Events And Other DOM Properties ******************************

// console.dir() Vs console.log()

// let y = document.getElementsByTagName("span")[0];
// console.log(y) // return element
// let x = document.getElementsByTagName("span")[0];
// console.dir(x) // return element as an object

// tagName / nodeName
// tagName only exist for element nodes
// NodeName exist for any node (text, comment, element, etc)

// innerHTML or outerHTML

// let span = document.getElementById("first");
// console.log(span.innerHTML) // return inner html 
// inner html can change element nodes inside it
// console.log(span.outerHTML) // return full tag html

// innerHTML only valid for element nodes for other node types we can use nodevalue or data 
// data, nodevalue return text, comment  


// textContent
// console.log(document.body.textContent) // only return full text

// hidden property 
// document.element.hidden = true;
// document.element.hidden = false;

// HTML attributes and their methods

// Attributes Method

// let first = document.getElementById("first");

// hasAttribute("attribute name")
// method to check for existance of an attribute
// console.log(first.hasAttribute("class")) // return false
// console.log(first.hasAttribute("id")) // return true

// getAttribute("name")
// method used to get the value of an attribute
// console.log(first.getAttribute("id")) // return id

// setAttribute("name")
// method used to set the value of an attribute
// first.setAttribute("class","cls") // this will add this attribute
// console.log(first)

// removeAttribute("name")
// method to remove the attribute from an element
// first.removeAttribute("id")
// console.log(document.getElementsByTagName("span")[0])

// Attributes
// method to get the collection of all attributes
// console.log(first.attributes)

// data-* attributes
// data- is reserved for programmers use 
// they are available in a property named dataset 
// if an element has an attribute named "data-one" its available as element.dataset.one
// console.log(first.dataset)
// console.log(first.dataset.game)
// console.log(first.dataset.player)


// insertion Method

// let a = document.getElementsByTagName("span")[0]
// a.innerHTML = a.innerHTML + `<h1>Hello World!</h1>`;

// let div = document.createElement("div"); // created element 

// div.innerHTML = `<h1>Hello World </h1>` // adding inner html to the created element
// div.className = "container" // adding class to div
// div.id = "second" // adding id to div

// let a = document.getElementsByTagName("span")[0];

// a.append(div) // add div to the last 
// a.prepend(div) // add div to the start
// a.before(div) // add div before targeted element
// a.after(div) // add div after targeted element
// a.replaceWith(div) // replace the targeted element with div

// Insert Adjasent HTML/TEXT/ELEMENT

// let a = document.getElementsByTagName("div")[0];
// a.insertAdjacentHTML("beforebegin", '<div class="test">beforeBegin</div>') // before the targeted element
// a.insertAdjacentHTML("afterbegin", '<div class="test">afterBegin</div>') // at started to targeted element
// a.insertAdjacentHTML("beforeend", '<div class="test">beforeEnd</div>') // at last to targeted element
// a.insertAdjacentHTML("afterend", '<div class="test">afterEnd</div>') // after targeted element
// a.remove() // will remove the element in a sec

// ClassList && ClassName

// let first = document.getElementById("first")
// let second = document.getElementById("second")

// first.className = "red" // this can add and remove and whatever you want

// first.classList.remove("red") // this will remove class "red"
// first.classList.add("red") // this will add class "red"
// first.classList.toggle("red") // adds the class if it doesn't exist, otherwise removes it
// console.log(first.classList.contains("red")) // return true or false

// setInterval and setTimeout 

// setTimeout(() => {
//     alert("hello Brother!!")
// }, 2000); // this will run after 2 sec

// function a(a,b,c){
//     console.log("hey I am working" +" " + (a + b + c))
// }

// let b = setTimeout(a,5000,12,12,12) // (func, delay, argument1, argument2 )
// clearTimeout(b)

// setInterval(() => {
//     alert("Hey its working")
// }, 2000); // this will run repeatedly

// setTimeout and setInterval are come with same syntex 
// setInterval is just repeat itself

// setInterval(a,2000,12,23,43) // (func, delay, argu1, argu2)

// Browser Events 

// MouseEvent : click , context menu (right click), mouseover / mouseout , mousedown/mouseup, mousemove
// KeyboardEvent : keydown and keyup
// form Event: submit, focus , etc.
// Document events DOMContent Loaded

// let a = document.getElementsByClassName("container")[0]

// a.onclick = () => {
//     let b = document.getElementsByClassName("container")[0];
//     b.innerHTML = "Hey its working"
// }

// addEventListener and removeEventLIstener

// let btn = document.getElementById("btn");

// let a = function(e){
//     alert("Hello World")
// }
// let b = function(e){
//     alert("Hello World222")
// }

// btn.addEventListener('click',a)
// btn.addEventListener('click',b)
// let num = prompt("Enter a number ")
// if(num == "2"){
//     btn.removeEventListener('click', a)
// }

// ************ Chapter 8 : Practice Set ************ // 

// 1.Solution

// let Rahul = document.getElementsByClassName("first")[0]
// let Ajay = document.getElementsByClassName("first")[1]
// let Rohit = document.getElementsByClassName("first")[2]
// let Rohan = document.getElementsByClassName("first")[3]

// Rahul.addEventListener("click", ()=>{
//     alert("Rahul")
// })
// Ajay.addEventListener("click", ()=>{
//     alert("Ajay")
// })
// Rohit.addEventListener("click", ()=>{
//     alert("Rohit")
// })
// Rohan.addEventListener("click", ()=>{
//     alert("Rohan")
// })

// 2.Solution && 3. Solution

// let Ajay = document.getElementsByClassName("first")[1];

// Ajay.addEventListener("click", function(){
//     a = prompt("Enter a href of a website")
//     console.log(a)
// })

// 4.Solution

// 5. Solution

// let bulb = document.getElementById("bulb");
// setInterval(() => {
//     bulb.classList.toggle("container")
// }, 1000);


if(1===1){
    console.log("yes its work")
}