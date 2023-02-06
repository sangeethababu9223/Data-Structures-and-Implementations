function bubbleSort(arr) {
  if (arr.length > 0) {
    let length = arr.length - 1;
    for (let j = 0; j < arr.length - 1; j++) {
      for (let i = 0; i < length; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
      length--;
    }
  }
  return arr;
}
