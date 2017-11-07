
function mergeSort(array) {
    if (array.length === 1) return array;
    let mid = Math.floor(array.length / 2);
    return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)));
}

function merge(a1, a2) {
    let left = 0,
        right = 0,
        merged = [];
    while (left < a1.length && right < a2.length) merged.push(a1[left] < a2[right] ? a1[left++] : a2[right++])
    while (left < a1.length) merged.push(a1[left++])
    while (right < a2.length) merged.push(a2[right++])
    return merged;
}

// To handle drawing, pass arrays in an object with a depth variable
// Merge them up based on the depth thingy
// Basically, break it all down to singletons
// Keep in a list structure
// Then merge up a depth level, concat, draw
// Repeat
// Instead of concat, use the depth with modulo to iterate through and replace the imageData array
// Max depth == log2(array.length) ? doubles each time up a level
