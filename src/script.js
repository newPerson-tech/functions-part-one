let arr = [1, 2, 3, 4, 5];
let item = 3;

function removeElement(array, item) {
    return array.filter(element => element !== item);
}

// Remove number 3 from the array
arr = removeElement(arr, item);

console.log(arr); 