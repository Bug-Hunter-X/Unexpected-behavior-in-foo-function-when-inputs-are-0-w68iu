function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This will cause unexpected behavior if a and b are both 0
  }
  return a + b;
}