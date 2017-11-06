function selectionSort(array, sSortIndex, loops = 25) {
  if (!sSortIndex) throw 'Missing sort Index';
  for (let j = 0; j < loops; j++) {
    let max = -Infinity;
    let ind;
    for (let i = 0; i < sSortIndex; i += pixelDistance) {
      if (getPixelBrightness(array, i) > max) {
        max = getPixelBrightness(array, i);
        ind = i;
      }
    }
    swapPixel(array, ind, sSortIndex);
    sSortIndex -= pixelDistance;
  }
  if (sSortIndex <= 3) keepSorting = false;
  return keepSorting;
}
