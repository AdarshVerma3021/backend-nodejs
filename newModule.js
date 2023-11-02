function doSomething() {
    console.log("******doSomething called from newModule.js******")
}

function againDoSomething() {
    console.log("******againDoSomething called from newModule.js******")
}

// CRUD - Create, Read, Update, Delete

let arr = [];

function createArray(element) {
    arr.push(element);
    return arr;
}

function readArray() {
    return arr;
}

function updateArray(index, element) {
    arr[index] = element;
    return arr;
}

function deleteArray(){
    arr.splice(index , 1);
    return arr;
}

module.exports = { doSomething, againDoSomething, createArray, readArray, updateArray, deleteArray };
