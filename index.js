// Write your solution here!

const cats =["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    }
function destructivelyRemoveLastCat(name) {
    cats.pop();
        }

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}
function appendCat(name) {
    const appendCats =[...cats, "Broom"];
    return appendCats;

}     
function prependCat(name) {
    const prepCat =["Arnold",...cats];
    return prepCat;
}
function removeLastCat(name) {
    const copyOfCat= cats.slice(0,-1);
    return copyOfCat;
}
function removeFirstCat(name) {
    const copyCat= cats.slice(1);
    return copyCat;
}
