function quickSortHelper(array, qStack) {
  if (!qStack) {
    var qStack = [];
    let splitPoint = split(array, 0, array.length - 1);

    qStack.push({
      split: splitPoint,
      begin: 0,
      end: splitPoint - 1
    })
    qStack.push({
      split: splitPoint,
      begin: splitPoint + 1,
      end: array.length - 1
    })
  }
  return quickSort(array, qStack);
}

function quickSort(array, qStack) {
  for (let i = qStack.length - 1; i >= 0; --i) {
    let q = qStack[i];
    if (q.begin < q.end && q.begin !== q.split && q.end !== q.split) {
      let splitPoint = split(array, q.begin, q.end);

      qStack.push({
        split: splitPoint,
        begin: q.begin,
        end: splitPoint - 1
      })

      qStack.push({
        split: splitPoint,
        begin: splitPoint + 1,
        end: q.end
      })
    }
    qStack.splice(i, 1);
  }
  if (qStack.length === 0) keepSorting = false;
  return qStack;
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
