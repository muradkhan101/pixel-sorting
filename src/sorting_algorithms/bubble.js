function bubbleSort(array, sSortIndex, loops) {
  if (!sSortIndex) sSortIndex = array.length;
  let keepSorting = false;
  for (let j = 0; j < loops; j++) {
    for (let i = 0; i < sSortIndex; i += pixelDistance) {
      if (getPixelBrightness(array, i) < getPixelBrightness(array,i + pixelDistance)) {
        swapPixel(array, i, i + pixelDistance);
        keepSorting = true;
      }
    }
    sSortIndex -= pixelDistance;
  }
  return keepSorting;
}
