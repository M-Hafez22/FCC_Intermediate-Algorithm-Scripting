/*
Sum All Numbers in a RangePassed
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/


// My Solution

function sumAll(arr) {
  let result;
  // const maxNum= arr.indexOf(Math.max(...arr));
  const maxNum = Math.max(...arr);
  const minNum = Math.min(...arr);
  let between = 0;
  let i = minNum;
  while (i < maxNum-1) {
  i++;
  between += i;
  console.log(between);
}
  result = between + minNum + maxNum;
  // console.log(between);
  // console.log(minNum);
  // console.log(maxNum);
  // console.log(result);
  return result;
}
sumAll([4, 1]);