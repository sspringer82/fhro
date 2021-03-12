function list(names){
  if (names.length === 0) {
    return '';
  }
  const mappedNames = names.map((name) => name.name);
  if (mappedNames.length === 1) {
    return mappedNames[0]
  }
  
  let lastName = mappedNames.pop();
  
  let joinedNames = mappedNames.join(', ');
  return joinedNames += ' & ' + lastName;
}