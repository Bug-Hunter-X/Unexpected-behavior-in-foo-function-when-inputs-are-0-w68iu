function foo(a, b) {
  if (a === null || b === null) {
    return 0;
  }
  if(a===0 && b===0){
    return 0;
  }
  return a + b;
}