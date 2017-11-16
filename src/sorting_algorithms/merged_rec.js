function mergeSort(array, s = 0, e = array.length - 1) {
  if ( s < e) {
    let mid = Math.floor((e + s) / 2);
    mergeSort2(array, s, mid);
    mergeSort2(array, mid + 1, e);
    merge2(array, s, mid, e);
  }
  return array;
}

function mergeSortHelper(array, mStack) {
  if (!mStack) {
    var mStack = [];
    let mid = Math.floor(array.length / 2);
    mStack.push({
      start: 0,
      end: mid
    })
    mStack.push({
      start: mid + 1,
      end: array.length - 1
    })
  }
  return mStack;
}

function merge(array, s, mid, e) {
  let left = s,
      right = mid + 1,
      merged = [];
  while (left <= mid && right <= e) merged.push(array[left] < array[right] ? array[left++] : array[right++])
  while (left <= mid) merged.push(array[left++])
  while (right <= e) merged.push(array[right++])
  combine(array, merged, s, e);
  return array;
}

function combine(array, copy, s, e) {
  for (let i = 0; i < copy.length; i++) {
    array[i + s] = copy[i];
  }
  return array;
}

// To handle drawing, pass arrays in an object with a depth variable
// Merge them up based on the depth thingy
// Basically, break it all down to singletons
// Keep in a list structure
// Then merge up a depth level, concat, draw
// Repeat
// Instead of concat, use the depth with modulo to iterate through and replace the imageData array
// Max depth == log2(array.length) ? doubles each time up a level
