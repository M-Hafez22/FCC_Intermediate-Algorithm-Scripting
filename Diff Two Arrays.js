

function diffArray(arr1, arr2) {

  var newArr = arr2.filter(el => !arr1.includes(el)).concat(arr1.filter(el => !arr2.includes(el)));
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

