function nextGreaterElements(arr) {
  const n = arr.length;
  const res = new Array(n).fill(-1);
  const stack = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    if (stack.length > 0) {
      res[i] = stack[stack.length - 1];
    }

    stack.push(arr[i]);
  }

  return res;
}

// Example usage
const arr = [4, 5, 2, 25];
console.log("Next Greater Elements:", nextGreaterElements(arr));
