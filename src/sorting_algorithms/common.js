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
