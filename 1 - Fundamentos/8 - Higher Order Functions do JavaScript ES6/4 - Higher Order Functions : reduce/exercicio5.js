const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((aTimes, curr) => {
    for (let index = 0; index < names.length; index += 1) {
      if (curr[index] === 'a' || curr[index] === 'A') {
        aTimes += 1;
      }
    } return aTimes;
  }, 0);
}

// OUTRA FORMA DE RESOLVER: UM REDUCE DENTRO DE UM REDUCE DENTRO DA FUNÇÃO
// function containsA() {
//   return names.reduce((acc, currWord) =>
//      acc + currWord.split('').reduce((acumulator, currLetter) => {
//         if (currLetter === 'a' || currLetter === 'A') return acumulator + 1;
//         return acumulator;
//      }, 0), 0);
// }

console.log(containsA(names));