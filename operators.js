//Arithmetic operators (+, -, *, /, %, ++, --)
  //= is an assignment operation (it assigns value)

  console.log(4+4)
  console.log(9-4)
  console.log(20*8)
  console.log(78/2)
  console.log(32%5)
  //increment
  var data=(20)
  console.log(data++)
  console.log(data)
  
  //decrement
  var data=(20)
  console.log(data--)
  console.log(data)
  
  //Comparison operator
  //Equality Operators:
  
  //==: Checks if two values are equal, performing type coercion if necessary.
  
  console.log(5 == '5'); // true
  
  //===: Checks if two values are equal and of the same type (strict equality).
  console.log(5 === '5'); // false
  
  
  //Inequality Operators:
  
  //!=: Checks if two values are not equal, performing type coercion if necessary.
  
  console.log(5 != '5'); // false
  
  
  //!==: Checks if two values are not equal or not of the same type (strict inequality).
  console.log(5 !== '5'); // true
  
  
  //Relational Operators:
  
  //<: Checks if the left value is less than the right value.
  console.log(5 < 10); // true
  
  
  //>: Checks if the left value is greater than the right value.
  
  console.log(10 > 5); // true
  
  
  //<=: Checks if the left value is less than or equal to the right value.
  
  console.log(5 <= 5); // true
  
  
  //>=: Checks if the left value is greater than or equal to the right value.
  
  console.log(10 >= 5); // true
  
  
  
  //Not a comparison operator per se, but often used in conditional expressions to return the right-hand operand if the 
  //left is null or undefined.
  let value = null;
  console.log(value ?? 'default'); // 'default'
  
  
  //Notes:
  //Type Coercion: When using == and !=, JavaScript may convert types to compare values. 
  //This can lead to unexpected results, so using === and !== is generally recommended to avoid issues.
  //NaN: Note that NaN (Not-a-Number) is unique in that it is not equal to itself. Use Number.isNaN() to check for NaN.
  //Example:
  
  let a = 5;
  let b = '5';
  
  console.log(a == b);  // true (type coercion)
  console.log(a === b); // false (strict equality)
  console.log(a != b);  // false (type coercion)
  console.log(a !== b); // true (strict inequality)
  
  //LOGICAL OPERATORS
  /*AND (&&)
  Returns true if both operands are true.*/
  var sum = ( 10==10 && 20==20)
  console.log(sum)
  
  /*OR (||)
  Returns true if at least one of the operands is true*/
  
  /*NOT (!)
  Negates a boolean value. Returns true if the operand is false, and vice versa. 
  true hoga tw false kr dy ga false hoga tw true*/
  var sum =(20==20)
  console.log(!sum)
  
  
  //ASSIGNMENT OPERATORS
  /*Basic Assignment (=)
  Assigns the value on the right to the variable on the left.*/
  
  let x = 10;
  console.log(x); // 10
  
  
  /* Addition Assignment (+=)
  Adds the right operand to the left operand and assigns the result to the left operand.*/
  
  let g = 5;
  g += 3; // Equivalent to a = a + 3;
  console.log(a); // 8
  
  
  /* Subtraction Assignment (-=)
  Subtracts the right operand from the left operand and assigns the result to the left operand.*/
  
  let f = 10;
  f -= 2; // Equivalent to b = b - 2;
  console.log(b); // 8
  
  
  //Multiplication Assignment (*=)
  //Multiplies the left operand by the right operand and assigns the result to the left operand.
  
  let c = 4;
  c *= 2; // Equivalent to c = c * 2;
  console.log(c); // 8
  
  
  //Division Assignment (/=)
  //Divides the left operand by the right operand and assigns the result to the left operand.
  
  let d = 20;
  d /= 4; // Equivalent to d = d / 4;
  console.log(d); // 5
  
  
  // Modulus Assignment (%=)
  //Takes the modulus using two operands and assigns the result to the left operand.
  
  let e = 10;
  e %= 3; // Equivalent to e = e % 3;
  console.log(e); // 1