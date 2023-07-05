// This approach doesn't use the way that converts the number to a string

function isEqual(x, y) {
  return x === y;
}

function isPalindrome(x) {
  const numsThatCannotBeAPalindrome = 10;
  const numArr = [];

  function createArrayNum(num) {
    if (num >= 1) {
      const remainder = num % 10;
      numArr.push(remainder);
      createArrayNum(parseInt((num / 10).toString()));
    }
  }

  function checkPalindrome() {
    const length = numArr.length;
    let result = true;
    for (let i = 0; i < Math.floor(length / 2); i++) {
      const forward = numArr[i];
      const backward = numArr[length - i - 1];
      if (!isEqual(forward, backward)) {
        result = false;
        break;
      }
    }
    return result;
  }

  if (x <= numsThatCannotBeAPalindrome) {
    return false;
  }

  createArrayNum(x);
  return checkPalindrome();
}

console.log(isPalindrome(121));
