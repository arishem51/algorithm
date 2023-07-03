const arr = [1, 3, 5, 6];

const calculateMidPoint = (start, end) => {
  const total = start + end;
  return Math.floor(total / 2);
};

const binarySearch = (target) => {
  const length = arr.length;
  let startIndex = 0;
  let endIndex = length - 1;
  let result = -1;
  while (startIndex <= endIndex) {
    const midIndex = calculateMidPoint(startIndex, endIndex);
    const midIndexValue = arr[midIndex];
    if (midIndexValue === target) {
      result = midIndex;
      break;
    }

    if (midIndexValue < target) {
      startIndex = midIndex + 1;
    } else {
      endIndex = midIndex - 1;
    }
  }
  return result;
};

const testCase = (target) => console.log(binarySearch(target));

testCase(5);
testCase(2);
testCase(7);
