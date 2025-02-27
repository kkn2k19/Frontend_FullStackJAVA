var arr=[100, 200, 300,400]
console.log(arr);
console.log(typeof arr);

// ADD A ELEMENT AT LASTvar arr = [100, 200, 300, 400];
console.log(arr);
console.log(typeof arr);
// ADD A ELEMENT AT LAST
arr.push(500);
console.log(arr);
// DELETE THE LAST ELEMENT
arr.pop();
console.log(arr);
// ADD A ELEMENT AT FIRST
arr.unshift(50);
console.log(arr);
// DELETE THE FIRST ELEMENT
arr.shift();
console.log(arr);
// DELETE ITEMS IN SPECIFIC POSITION
arr.splice(2, 1);  // 2nd position only 1 item
console.log(arr);
// INSERT ITEMS IN SPECIFIC POSITION
arr.splice(2, 0, 300);   // 2nd position zero delete and 300 inserted
console.log(arr);
// RANGE OF VALUES
var newArray = arr.slice(2,4); // index = 2 to 3 values in newArray
console.log(newArray);
// FOR EACH LOOP
arr.forEach(function(element, index){
    console.log("Index: " + index + ", Value: " + element);
})
// MAP FUNCTION
var newArray1 = arr.map(function(element, index){
    return element * 10;
})
console.log(newArray1);
// FILTER FUNCTION or METHOD
var newArray2 = arr.filter(function(element, index){
    return element > 200;
})
console.log(newArray2);