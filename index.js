// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat() {
  cats.push('Ralph');
}

function destructivelyPrependCat() {
  cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  const catClone = cats.slice();
  catClone.push(name);
  return catClone;
}

function prependCat(name) {
  const catClone = cats.slice();
  catClone.unshift(name);
  return catClone;
}

function removeLastCat() {
  const catClone = cats.slice(0, -1);
  return catClone;
}

function removeFirstCat() {
  const catClone = cats.slice(1);
  return catClone;
}
