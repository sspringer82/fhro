function selReverse(array, length) {
  if (length === 0) {
    return array;
  }
  let result = [];
  
  do {
    let arr = array.splice(0, length);
    result.push(...arr.reverse());
  } while(array.length > 0);
  
  return result;
}