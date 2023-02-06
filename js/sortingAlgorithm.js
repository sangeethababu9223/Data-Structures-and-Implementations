function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - j - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}
function bubbleSortOpt(arr) {
  let swapped = false;
  for (let j = 0; j < arr.length; j++) {
    swapped = false;
    for (let i = 0; i < arr.length - j - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}
