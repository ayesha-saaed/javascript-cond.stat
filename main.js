//if-else statement
/*var number = 30;
if(number > 50){
    console.log("number is greator than 50")
}else if(number == 50){
    console.log("number is equal to 50" )
}else{
    console.log("number is less than 50")
}*/


/*var age = 17;
var isAdult = (age == 18) ? console.log("you are adult"): console.log("you are teenager");*/

//switch
/*let fruit = "orange";
switch(fruit){
case 'orange' :
    console.log("you chose orange")
break;
case 'stawberry' :
console.log("you chose stawberry")
break;
default: 
    console.log("invalid fruit")
}*/

//FOR LOOP
/*for (let i=0 ; i<10 ; i++){
    console.log(i);
}*/

// DO WHILE LOOP
/*let count = 0;

do{
    console.log(count);
    count++;
}while(count<6)
//for..of loop
let data =['one','two','three','four','five']
for(let i of data){
    console.log(i)
}
//for..in loop
/*let car =
{make:'toyota',
model:'Corolla',
year:2021}
for(let key in car){
    console.log[key + ":" + car[key]];
}
const person = {
    name: "Alice",
    age: 30,
    job: "Developer"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
    
}
    //FOR OF LOOP
    let data=['one','two','three','four','Five']
    for(let i of data){
    console.log(i)
    }
//Break,Continue statement
for (let i=0; i<10; i++){
    if(i===3){
    console.log("validation checked")
     continue;}
   console.log(i);}*/
//ERROR HANDLING
   /*try{
    let result = 10/0;
    console.log(result);

   }catch(bug){
    console.log(bug);
   }*/

   //error throw
   var a = 10;
   b = 0;
   try{
    if(b===0){
        throw("there is an error : 0")
    }
    var result = a/b;
    console.log(result)
   }catch (bug){
   
    console.log(bug)
   }
