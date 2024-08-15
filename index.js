
// let numbers = [1, 2, 4, 5,6,7 , 8, 12, 14,]
// let numbers1 =[21,341,64,865,6782465,356,82,56,856812,456,45,-346,-3426,4,-578,-58,-45,-36,-34]

// First challenge
// let check = (check) => check >=0;

// let check= function (check ) {
//     chek >=0
// } 
// console.log(numbers.filter(check))




// Second challenge
// let check1=(check) => check>0
// console.log(numbers.every(check1))






// Third challenge
// console.log(numbers.concat(numbers1))







// 4th challenge
// console.log(numbers.slice(2 ,10 ), numbers1.slice(3,10))







// // 5th challenge
// console.log(numbers1.sort((a, b) => a-b ));







 // 6th challenge
// console.log(numbers.reverse());
// console.log(numbers1.reverse());









 // 7th challenge
// console.log(numbers.join(',,'));










 // 1st homework

// function showDb (){
//     let noth;
//     let privite = {
//         age: 21,
//         name: 'Damirwbwk',
//         surname:' Kamoliddinov',
//     }
//     // privite=true;
//     // console.log(privite);


//     if (privite){
//         console.log(privite)
//     }else{
//         console.log(noth);
//     }

// }

// showDb()








//  // 2st homework
// function writeGenres () {
   
//  for(let i = 1; i < 4; i++) {
        
//     let chart= prompt(`Yaxshi ko'rgan kinongiz ${i}`)
//    console.log(chart)
//    let massiv =[];
//    console.log(massiv.push(chart));
//     }
  
// }

// writeGenres()










// const fullname = "Damirbek Kamolliddinov"

// // let lastchar=fullname.slice(-1);



// // let firstchar =fullname.slice(0, fullname.indexOf(" "))
// // let lastname =fullname.slice(fullname.indexOf(" ")+1 )

// console.log(firstchar)
// console.log(lastname)





// const email ="damirbekkamoliddinov@gmail.com"


// let username=email.slice(0,email.indexOf("@"))
// let extenction=email.slice(email.indexOf("@")+1)

// console.log(username);
// console.log(extenction);























// Method chaining = Calling one method after another
//                   in one coonsition line of code


// let username = window.prompt("Enter your userame")

// -----------------No Method Chaining------





// username = username.trim();
// let letter = username.charAt(0);
// letter=letter.toUpperCase();

// let extraChart = username.slice(1)
// extraChart=extraChart.toLocaleLowerCase();


// username = letter + extraChart


// console.log(username);






// -------------------Method Chaining------




// username = username.trim().charAt(0).toUpperCase() + username.slice(0).toLocaleLowerCase();

// console.log(username);






// Logical operators = used to combine or manipulate boolean values 
//                            (true or false)




                                //  AND=&&
                                //  OR=||
                                //  Not=!




// const temp = 200;


// if(temp > 0 && temp <= 30  ){
//     console.log("The weather is good");

// }else{
//     console.log("The weather is really bad");
// }



// const isSunny =false;

// if (!isSunny){
//     console.log("It is SUNNY")
// }else{
//     console.log("It is cloudy")
// }






// const minNum =1;
// const maxNum =10;
// const answer =Math.floor(Math.random() * (maxNum-minNum+1)+ minNum)



// let attemps=0;
// let gues;
// let running=true;

// while(running){

//     gues =window.prompt(`Choose any Number from ${minNum} to ${maxNum}`)
//     gues=Number(gues)


//     if (isNaN(gues)){
// window.alert("Please enter a number")
//     }
//     else if(gues<minNum || gues>maxNum) {
// window.alert("Please enter valid Number")
//     }
//     else{
//         attemps++;
//         if(gues<answer){
// window.alert("Your answer is pretty low")
// }else if(gues==answer){

// window.alert(`Your answer is correct.The answer was ${answer}.It took you ${attemps} attemps`)
// running=false
//         } else {
//     window.alert("Your answer is very high")


//         }
        
//     }
  
// }

// console.log(answer);
// console.log(typeof gues)










// -------------------------Function----------------------------------//








// function iseven(Number) {

    // if (Number / 2 ===0){
    //     return "It is even"
    // }else{
    //     return "Odd"
    // }


    // return Number%2===0 ? "it is a number":"is not even"
    
// }

// console.log (iseven(11))


// function isemail (email1){
//     if (email1.includes("@")){
// return true
//     }else{
//         return false
//     }

//     return (email1.includes("@")) ? true:false
// }

// console.log(isemail("damirbekgmail,com"));









// --------------------------Temperature CONVERSION PROGRAM------------






// const textBook=document.getElementById("textBook")
// const toFahrenheit=document.getElementById("toFahrenheit")
// const toCelsius=document.getElementById("toCelsius")
// const result=document.getElementById("result")
// let temp;



// function convert(){

//     if(toFahrenheit.checked){
//         // result.textContent="You selected to Fahrenheit"
//         temp=Number(textBox.value);
//         temp=temp*9/5+32
//         result.textContent=temp.toFixed(1)+("°F")


//     }
//     else if(toCelsius.checked) {
//         // result.textContent="You selected to Celsius"

//         temp=Number(textBox.value);
//         temp=(temp-32)*(5/9);
//         result.textContent=temp.toFixed(1)+("°C")

//     }
//     else {
//         result.textContent="Select the unit"
//     }
// }










// ------------------------------ARRAY-----------------------


// array = a variable like structure that can hold
//                        more than 1 value





// let fruits =["apple","watermelon","banana","cartofel"]

// fruits.sort().reverse
// for(let i=fruits.length-1; i>=0; i--){
//     console.log(fruits[i])
// }



// let vegetables=["melon","watermelon","potato","tomato"]

// vegetables.sort().reverse
// for(let vegetable of vegetables){
// console.log(vegetable)
// }

// fruits.concat(vegetables)














// spread operator = ... alows an iterable such as an
//                  array or string to be expanded
 //                 into seperate Elements
//                  (unpacks the elemenst)







// let numbers= [1,2,3,4,5,6,7,8,]
// let maximum =Math.max(...numbers);
// let mimimum=Math.min(...numbers)


// console.log(maximum)
// console.log(mimimum)







// let username ="Damirbek Kamoliddinov"
// let letters =[...username].sort().reverse().join("-")

// console.log(letters);



// let fruits = ['apple','orange','banana']
// let vegetables=['carrots','celery','potatoes']

// let food=[...fruits, ...vegetables,'egg','milk']

// console.log(food);





















// rest parameters = (...rest) allow a function work with a variable
//                     number of arguments by bundling them into an array

         //   spread = expands an arrat into seperate ElementInternals
         //   rest = bundles seperate elements into an array






// function openfridge(...foods){
//     console.log(...foods)
// }
// function getFood(...foods){
//     return foods;
// }






// const food1="pizza"
// const food2="sushi"
// const food3="humburger"
// const food4="hotdog"
// const food5="ramen"
// const food6="bo'tqa"


// openfridge(food1,food2,food3,food4,food5,food6)

// console.log(getFood(food1,food2,food3,food4,food5,food6));








// function sum(...numbers){
//     let reseult=0;
//     for (number of numbers){
//         reseult+=number
//     }

//     return reseult}

//     const total=sum(1,2,3,4,5,6,564,57,5,856,84,84,678,479479,4,679,84,8,46,8,486,84,88,765,7,4,68,4,84,84,234,435,65,56756,7,8,4,58,458,6,8,4,58,5)
//     console.log(`Your total summ is $${total}`);




//     function getAverage(...numbers){
//         let reseult=0;
//         for (number of numbers){
//             reseult+=number
//         }
    
//         return reseult / numbers.length
//     }
    
        // const total1=getAverage(1,2,3,4,5,6,564,57,5,856,84,84,678,479479,4,679,84,8,46,8,486,84,88,765,7,4,68,4,84,84,234,435,65,56756,7,8,4,58,458,6,8,4,58,5)
        // console.log(`Your total summ is $${total1}`);
    
//     function combineString(...strings){
//         return strings.join(" ")
//     }


//     let fullname= combineString("mr", "Spomgebob", "Squarepants", "III")
// console.log(fullname);





// ----------------------------------Dice Roller Program ---------------------//
























// Masala:1

// let arr= [1,2,3,7,4,5,6,8,9,10,14]
// const find = arr.find((number) => number%7==0 && number<10)
// console.log(find);


// Masala:2



// arr.forEach((num) =>num%2==0  &&  console.log(num*2));



// Masala:3


// let string = ["for",'easy','cucumber','watermelon',"JavaScript"]
// string.map((string)=>console.log(`${string}:  ${string.length}`))


// Masala:4


// console.log( arr.some((number) => number%2==0));



// Masala:5

// const find=string.find((string)=>string=='cat' )
// if (find==undefined){
//     console.log('Not found');
// }else{
//     console.log(find);
// }
// console.log(find);


// Masala:6

// console.log(arr.splice(1, 3, 100 && 200,100));
// console.log(arr); 

// const fruits = ['banana','apple','orange',"mango"]


// console.log(fruits.splice(2, 1, "kiwi")); 
// console.log(fruits);



// Masala:7

// let array = string.indexOf("mango")
// if (array==-1){
// console.log("not found");
// }else{
// console.log(string.indexOf(string));
// }
// console.log(string.indexOf("mango"));



// Masala:8

//     let array1=string.find((string) => string=="JavaScript")
//     if (array1=="JavaScript"){
//  console.log(`${array1} = ${array1.length} words `);
//     }else{
//         console.log('Not found');
//     }
// //  console.log(array1);

// let array= arr.map((string) => )
// console.log(array);

































