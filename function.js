//function: it is the block code that we used to re-use the code

//main function
function main() {
    var sum = 1 + 1;
    console.log(sum)
}


//anonymous function
var sum = function (){
    console.log(1 + 10)
}
sum()



//arrow function
var sum = () => {console.log(10 + 12)}

sum()

//array (order list , random data can be added )
var arr = [1,"add", true, [1,2,3,4]]
console.log(arr[2])

//object
var obj ={name:"AbdulRafay" , age: 17}
console.log(obj.name)

//set(it brings unique value , unorder list)
var arr = [1,5,7,6,5,4,1,3]
var set = new Set(arr)
console.log(set)

//add function
function sum (a,b){
    return a+b;}
    var num1=11
    var num2=13
     var sum = (num1+num2)
     console.log(sum)
   
     //date : to display date
     console.log(Date())

     //function with return statement
     function sum(a,b){
        return a+b;

     }
     var total= sum(5,10)
     console.log(total)

     //Recursion
     function factorial(n){
        if(n===1){
            return 1
        }
        return n * factorial(n-1)
     }
     console.log(factorial(6))