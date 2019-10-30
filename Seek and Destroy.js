
/*   Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/


// My Solution
function destroyer(arr) {
  let arg = Array.prototype.slice.call(arguments);
  let newArr =  arr.filter(el => !arg.includes(el));
  console.log(newArr);
  return newArr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// FCC Solution

// Solution 1 
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

// Solution 2 
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

// Solution 3 
const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));