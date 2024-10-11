//condition statement

//IF ELSE STATEMENT
var num = 18
if(num<15){
   console.log("try hard")
}else{
console.log("keep it up!")
}

//nested if else statement
var age = 21
if(age>25){
   console.log("you are not eligible")}
       else if(age<=18){
           console.log("Try next year")}
           else{
           console.log("you are eligible")
           }
       

   //switch statement
   var age=13;
   switch(age){
       case 21 :
           console.log("you are eligible")
           break;
           case 25:
               console.log("yes, you can apply")
               break;
                   case 18:
               console.log("Try next year")
               break;
               case 17:
                   console.log("sorry , you are not eligible")
                   break;
                   case 14:
                       console.log("sorry, Teenagers are not eligible")
                       break;
                       default:
                           console.log("Better next time")
   }        
   
//if-else statement
var number = 30;
if(number > 50){
    console.log("number is greator than 50")
}else if(number == 50){
    console.log("number is equal to 50" )
}else{
    console.log("number is less than 50")
}


var age = 17;
var isAdult = (age == 18) ? console.log("you are adult"): console.log("you are teenager");

//switch
let fruit = "orange";
switch(fruit){
case 'orange' :
    console.log("you chose orange")
break;
case 'stawberry' :
console.log("you chose stawberry")
break;
default: 
    console.log("invalid fruit")
}

//asynchronous control flow
function fetchData(callback) {
    setTimeout(() =>{
    console.log("Network Data")
    callback()
},1000);
}
function processData()
{
    console.log("Processed Network Data")
}
fetchData(processData)
//PROMISES
/*pomises are objects that represent the eventual completion (or failure)
 of an asynchronous operation and its resulting value*/
 let promise = new Promise((resolves , reject)  => {
        let success = false

        if(success){

           resolves("opeartion successful")
        } else{
            reject("Operation failed")
        }

        

    } );

    promise
    .then((message)   => {
        console.log(message);
    })
    .catch((err)  => {
        console.log(err);
    })

//await
    async function fetchData(){
        let promise = new Promise ((res , rej)  => {
            setTimeout(() =>   res ("Data fetched") , 1000)
        })

        let result = await promise;
        console.log(result)

    }


    fetchData();