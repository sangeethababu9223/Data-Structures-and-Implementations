function binarySearch(arr, item) {
  let low = 0,
    high = arr.length - 1;
  let mid = Math.floor((high + low) / 2);
  while (low <= high) {
    if (arr[mid] === item) {
      return mid;
    } else if (arr[mid] > item) {
      high = mid - 1;
    } else if (arr[mid] < item) {
      low = mid + 1;
    }
    mid = Math.floor((high + low) / 2);
  }
  return -1;
}

function binarySearchRecursive(arr, item) {
  let low = 0,
    high = arr.length - 1;
  let index = 0;
  let mid = Math.floor((high + low) / 2);
  if (low < high) {
    if (arr[mid] === item) {
      return mid;
    } else if (arr[mid] > item) {
      let tempAr = arr.slice(0, mid);
      index = binarySearchRecursive(tempAr, item);
      return index;
    } else if (arr[mid] < item) {
      let tempAr = arr.slice(mid + 1);
      index = mid + 1;
      let res = binarySearchRecursive(tempAr, item);
      console.log(`index:${index}`);
      if (res != -1) {
        index += res;
      } else {
        index = res;
      }
      return index;
    }
  } else {
    if (arr[low] == item) {
      return low;
    } else {
      return -1;
    }
  }
}
