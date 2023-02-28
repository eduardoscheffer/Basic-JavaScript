function truthCheck(collection, pre) {
  let counter = 0; // cria um contador pra comparar a quantidade de tryuthy values com a length da array;
  for (let c in collection) { // loop na array
    // se o objeto tem a propriedade 'pre' e é um boolean(truthy):
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++; // adiciona + 1 no contador;
    }
  }
  return counter == collection.length; // retorna true se todos os 'pre' sao truthy, ou false se pelo menos um não for
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");