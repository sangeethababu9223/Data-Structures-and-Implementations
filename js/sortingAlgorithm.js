// Bubble Sort Implementation

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

// Inserion Sort Implementation

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

// Selection Sort Implementation

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

// Merge Sort Implementation

function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
