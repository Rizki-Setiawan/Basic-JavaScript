// contoh 1
const jsonBad = '{ "age": 20 }';
 
try {
  const user = JSON.parse(jsonBad);
 
  if (!user.name) {
    // melemparkan error program ke catch
    throw new SyntaxError("'name' is required.");
  }
 
  console.log(user.name); // undefined
  console.log(user.age);  // 20

} catch (error) {

  console.log(`JSON Error: ${error.message}`);

}

// contoh 2
const json = '{ "name": "Yoda", "age": 20 }';
 
try {
  const user = JSON.parse(json);
 
  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }
 
  errorCode;
 
  console.log(user.name); // Yoda
  console.log(user.age);  // 20

} catch (error) {

  if (error instanceof SyntaxError) { // jika syntaxError
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) { // jika ReferenceError
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
  
}