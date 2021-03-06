function makeMergeStack(array, s = 0, e = array.length - 1, mStack = []) {
  if ( s < e) {
    let mid = Math.floor((e + s) / 2);
    makeMergeStack(array, s, mid, mStack);
    makeMergeStack(array, mid + 1, e, mStack);
    mStack.push({
      start: s,
      mid: mid,
      end: e
    })
  }
  return mStack;
}

function mergeSort(array, mStack) {
  let i = loops;
  while (i-- && keepSorting) {
    if (mStack.length === 0) {
      keepSorting = false;
      break;
    }
    let m = mStack[i];
    merge(array, m.start, m.mid, m.end);
    mStack.splice(i, 1);
  }
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
