// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

// const destructivelyAppendCat = cats.push("Ralph");
function destructivelyAppendCat(name) {
    cats.push(name);
  }
//   console.log(cats);
function destructivelyPrependCat(name) {
    cats.unshift(name);
  }

  function destructivelyRemoveLastCat(name) {
    cats.pop(name)
  }

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}

function appendCat(name) {
    const newcatsArray = cats.slice();
    newcatsArray.push(name);
    return newcatsArray;
}

function prependCat(name) {
    const newcats = cats.slice();
    newcats.unshift(name);
    return newcats;
}

function removeLastCat(name) {
    const lastCatOff = cats.slice(0, -1);
    return lastCatOff;
}

function removeFirstCat(name) {
    const firstCatOff = cats.slice(1);
    return firstCatOff;
}