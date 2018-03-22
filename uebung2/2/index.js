function evenWords(input) {
  const cleanedInput = input.replace(/[\.,!_\?]?/g, '');

  const splitInput = cleanedInput.split(' ');

  const result = splitInput.map(word => {
    if (word.length % 2 !== 0) {
      return word + word.substr(-1);
    }
    return word;
  });

  return result.join(' ');
}

console.log(evenWords('How did we end up here? We go?'));
