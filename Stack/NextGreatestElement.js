// Next Greatest Element(Right)
// Given an array, print the Next Greater Element (NGE) for every element.
// The Next greater Element for an element x is the first greater element on the right side of x in array.
//  Elements for which no greater element exist, consider next greater element as -1.
// Input: arr[] = {4, 5, 2, 25}
// Output:        { 5, 25, 25, -1 }

function nextLargerElement(n, arr) {
  let answerarr = [];
  let stack = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (stack.length == 0) {
      answerarr.push(-1);
    }
    // if stack size is not zero and top of stack is greater than arr[i]
    else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
      answerarr.push(stack[stack.length - 1]);
    }
    // if stack size is not zero and top of stack is smaller than arr[i]
    else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      // pop until stack size is not zero and top of stack is smaller than arr[i]
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      // if stack size is zero then push -1
      if (stack.length == 0) {
        answerarr.push(-1);
      }
      // if stack size is not zero then push top of stack
      else {
        answerarr.push(stack[stack.length - 1]);
      }
    }
    // push arr[i] in stack
    stack.push(arr[i]);
  }
  return answerarr.reverse();
}
// Time Complexity: O(n)
// Space Complexity: O(n)
// Test Cases:
console.log(nextLargerElement(4, [4, 5, 2, 25]));

// This algorithm can solve other question with some minor changes like
// Next Smaller Element(Right)
// Given an array, print the Next Smaller Element (NSE) for every element.
// The Next smaller Element for an element x is the first smaller element on the right side of x in array.
// Elements for which no smaller element exist, consider next smaller element as -1.
// Input: arr[] = {11, 13, 21, 3}
// Output:        { 3, 3, 3, -1 }

function nextSmallerElement(n, arr) {
  let answerarr = [];
  let stack = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (stack.length == 0) {
      answerarr.push(-1);
    }
    // if stack size is not zero and top of stack is smaller than arr[i]
    else if (stack.length > 0 && stack[stack.length - 1] < arr[i]) {
      answerarr.push(stack[stack.length - 1]);
    }
    // if stack size is not zero and top of stack is greater than arr[i]
    else if (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      // pop until stack size is not zero and top of stack is greater than arr[i]
      while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
        stack.pop();
      }
      // if stack size is zero then push -1
      if (stack.length == 0) {
        answerarr.push(-1);
      }
      // if stack size is not zero then push top of stack
      else {
        answerarr.push(stack[stack.length - 1]);
      }
    }
    // push arr[i] in stack
    stack.push(arr[i]);
  }
  return answerarr.reverse();
}

// Next Greater Element(Left)
// Given an array, print the Next Greater Element (NGE) for every element.
// The Next greater Element for an element x is the first greater element on the left side of x in array.
// Elements for which no greater element exist, consider next greater element as -1.
// Input: arr[] = {4, 5, 2, 25}
// Output:        { -1, 4, 4, 5 }

function nextLargerElement(n, arr) {
  let answerarr = [];
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (stack.length == 0) {
      answerarr.push(-1);
    }
    // if stack size is not zero and top of stack is greater than arr[i]
    else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
      answerarr.push(stack[stack.length - 1]);
    }
    // if stack size is not zero and top of stack is smaller than arr[i]
    else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      // pop until stack size is not zero and top of stack is smaller than arr[i]
      // as soon as arr[i] is greater loop will break
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      // if stack size is zero then push -1
      if (stack.length == 0) {
        answerarr.push(-1);
      }
      // if stack size is not zero then push top of stack
      else {
        answerarr.push(stack[stack.length - 1]);
      }
    }
    // push arr[i] in stack
    stack.push(arr[i]);
  }
  return answerarr;
}

// Next Smaller Element(Left)
// Given an array, print the Next Smaller Element (NSE) for every element.
// The Next smaller Element for an element x is the first smaller element on the left side of x in array.
// Elements for which no smaller element exist, consider next smaller element as -1.
// Input: arr[] = {11, 13, 21, 3}
// Output:        { -1, 11, 13, 3 }

function nextSmallerElement(n, arr) {
  let answerarr = [];
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (stack.length == 0) {
      answerarr.push(-1);
    }
    // if stack size is not zero and top of stack is smaller than arr[i]
    else if (stack.length > 0 && stack[stack.length - 1] < arr[i]) {
      answerarr.push(stack[stack.length - 1]);
    }
    // if stack size is not zero and top of stack is greater than arr[i]
    else if (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      // pop until stack size is not zero and top of stack is greater than arr[i]
      // as soon as arr[i] is smaller loop will break
      while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
        stack.pop();
      }
      // if stack size is zero then push -1
      if (stack.length == 0) {
        answerarr.push(-1);
      }
      // if stack size is not zero then push top of stack
      else {
        answerarr.push(stack[stack.length - 1]);
      }
    }
    // push arr[i] in stack
    stack.push(arr[i]);
  }
  return answerarr;
}

// stock span problem
// The stock span problem is a financial problem where we have a series of n daily price quotes for a stock and
// we need to calculate span of stock’s price for all n days.
// The span Si of the stock’s price on a given day i is defined as the maximum number of consecutive days just
// before the given day, for which the price of the stock on the current day is less than or equal to its price on the given day.
// Input:  arr[] = {100, 80, 60, 70, 60, 75, 85}
// Output:         {1,  1,  1,  2,  1,  4,  6}

// function stockSpan(n, arr) {
//   let answerarr = [];
//   let stack = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (stack.length == 0) {
//       answerarr.push(-1);
//     }
//     // if stack size is not zero and top of stack is greater than arr[i]
//     else if (stack.length > 0 && stack[stack.length - 1][0] > arr[i]) {
//       {
//         answerarr.push(stack[stack.length - 1][1]);
//       }
//     } else if (stack.length > 0 && stack[stack.length - 1][0] <= arr[i]) {
//       // pop until stack size is not zero and top of stack is greater than arr[i]
//       // as soon as arr[i] is smaller loop will break
//       while (stack.length > 0 && stack[stack.length - 1][0] <= arr[i]) {
//         stack.pop();
//       }
//       // if stack size is zero then push 1
//       if (stack.length == 0) {
//         answerarr.push(-1);
//       }
//       // if stack size is not zero then push top of stack
//       else {
//         answerarr.push(stack[stack.length - 1][1]);
//       }
//     }
//     // push arr[i] in stack
//     stack.push([arr[i], i + 1]);
//   }
//   return answerarr;
// }

// console.log(stockSpan(7, [100, 80, 60, 70, 60, 75, 85]));
