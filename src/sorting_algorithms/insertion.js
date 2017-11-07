function insertionSort(array, sSortIndex, loops = 100) {
  if (!sSortIndex) sSortIndex = pixelDistance;
  let currentIndex;
  let newArray = array;
  for (let i = 0; i < loops; i++) {
    if (getPixelBrightness(newArray, sSortIndex) > getPixelBrightness(newArray, sSortIndex - pixelDistance)) {
      currentIndex = sSortIndex - pixelDistance;
      while (getPixelBrightness(newArray, sSortIndex) > getPixelBrightness(newArray, currentIndex)) {
        if (currentIndex < 0) break;
         currentIndex -= pixelDistance;
      }
      newArray = movePixel(newArray, sSortIndex, currentIndex + pixelDistance);
    }
    sSortIndex += pixelDistance;
  }
  newArray.forEach((e, i) => array[i] = e)
  return array;
}
