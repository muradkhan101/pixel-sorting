function quickSort(array, begin = 0, end = array.length - 1) {
  if (array.length === 1) return array;
  if (begin < end) {
    let splitPoint = split(array, begin, end);
    quickSort(array, begin, splitPoint - 1);
    quickSort(array, splitPoint + 1, end);
    return array;
  }
}

function split(array, start, end) {
  let done = false,
      left = start + 1,
      right = end,
      pivot = array[start];

  while (!done) {
    while (left <= right && array[left] <= pivot) left++;
    while (array[right] >= pivot && right >= left) right--;
    if (left >= right) done = true;
    else swapPixel(array, left, right);
  }
  swapPixel(array, start, right);
  return right;
}

let qStack = [];

// Keep track of split points in an object
// and whether the split point has been moved
// or is at the start of the process
// Basically a call stack
