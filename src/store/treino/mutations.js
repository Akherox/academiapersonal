/*
export function someMutation (state) {
}
*/

export function setTreinos(state, treinos) {
  state.treinos = treinos;
}

export function setDia(state, dia) {
  state.dia = dia;
}

export function setTreino(state, treino) {
  state.treino = treino;
}

export function addTreino(state, treino) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  const reducer = (id, treino) => (treino.id > id ? treino.id : id);
  treino.id = state.treinos.reduce(reducer, 0) + 1;

  state.treinos.push(treino);
}

export function updateTreino(state, treino) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  var treinoEncontrado = state.treinos.find((g) => g.id == treino.id);
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  var index = state.treinos.indexOf(treinoEncontrado);
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  state.treinos.splice(index, 1);
  state.treinos.push(treino);
}

export function setCategorias(state, categorias) {
  state.categorias = categorias;
}
