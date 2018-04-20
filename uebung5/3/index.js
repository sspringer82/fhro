function negationValue(string, value) {
  for(let i = 0; i < string.length; i++){
    value = !value;
  }
  
  return value;
}