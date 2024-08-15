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






    const minNum =1;
    const maxNum =10;
    const answer =Math.floor(Math.random() * (maxNum-minNum+1)+ minNum)



    let attemps=0;
    let gues;
    let running=true;

    while(running){

        gues =window.prompt(`Choose any Number from ${minNum} to ${maxNum}`)
        gues=Number(gues)


        if (isNaN(gues)){
window.alert("Please enter a number")
        }
        else if(gues<minNum || gues>maxNum) {
window.alert("Please enter valid Number")
        }
        else{
            attemps++;
            if(gues<answer){
window.alert("Your answer is pretty low")
}else if(gues==answer){
    
    window.alert(`Your answer is correct.The answer was ${answer}.It took you ${attemps} attemps`)
    running=false
            } else {
        window.alert("Your answer is very high")
    

            }
            
        }
      
    }

    console.log(answer);
    console.log(typeof gues)










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