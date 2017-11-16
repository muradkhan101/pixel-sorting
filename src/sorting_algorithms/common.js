export const getPixelBrightness = (array, index) => {
  return array[index] + array[index+1] + array[index+2];
}

export const swapPixel = (array, i1, i2) => {
  for (let i = 0; i < 3; i++) {
    let t = array[i1 + i];
    array[i1 + i] = array[i2 + i];
    array[i2 + i] = t;
  }
  return array;
}

function movePixel(array, initial, end, distance) {
  let toMove = array.slice(initial, initial + distance);
  let newArray;
  if (initial > end) {
    newArray = [...array.slice(0, end), ...toMove, ...array.slice(end, initial), ...array.slice(initial + distance)];
  } else {
    newArray = [...array.slice(0, initial), ...array.slice(initial + distance, end + distance), ...toMove, ...array.slice(end + distance)];
  }
  return newArray;
}

function getPixels(array, i) {
  return [array[i], array[i + 1], array[i + 2], array[i + 3]]
}

function floorToFour(num) {
  return Math.floor(num / 4) * 4;
}
