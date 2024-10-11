//ERROR HANDLING
/*try{
    let result = 10/0;
    console.log(result);

   }catch(bug){
    console.log(bug);
   }*/

   //error throw
   var a = 10;
   var  b = 5;
   try{
    if(b===0){
        throw ("there is an error : 0")
    }
    if(b===1){
        throw ("There is an error : 1")
    }
    var result = a/b;
    console.log(result)
   }catch (bug){
   console.log(bug)
   }finally{
    console.log("Thi is final call")
   }
