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

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let val = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > val; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = val;
  }
  return arr;
}

function selectionSort(arr) {
  let index;
  for (let j = 0; j < arr.length; j++) {
    index = j;
    for (i = j + 1; i < arr.length; i++) {
      if (arr[index] > arr[i]) {
        index = i;
      }
    }
    let temp = arr[index];
    arr[index] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
