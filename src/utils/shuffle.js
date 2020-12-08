module.exports = (array) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // enquanto existir elementos para embaralhar
  while (currentIndex !== 0) {
    // pegue um elemento aleatoriamente
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // e troque de posição com o elemento atual
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};
