const PAGE_START = 1;
const PAGE_END = 400;
const LEFT_AND_RIGHT_DIFFERENCE = 1;

function checkPageNumberDifference(left, right) {
  return right - left === LEFT_AND_RIGHT_DIFFERENCE;
}

function checkPageNumberType(num) {
  return typeof num === 'number';
}

function checkValidPageRange(num) {
  return num >= PAGE_START && num <= PAGE_END;
}

function checkOddNumber(num) {
  return num % 2 === 1;
}

function checkEvenNumber(num) {
  return num % 2 === 0;
}

function checkValidPageNumber(left, right) {
  const isPageValueNumber =
    checkPageNumberType(left) && checkPageNumberType(right);
  const isLeftOdd = checkOddNumber(left);
  const isRightEven = checkEvenNumber(right);
  const isPageRangeValid =
    checkValidPageRange(left) && checkValidPageRange(right);
  const isPageNumberDifference1 = checkPageNumberDifference(left, right);

  return (
    isPageValueNumber &&
    isLeftOdd &&
    isRightEven &&
    isPageRangeValid &&
    isPageNumberDifference1
  );
}

function multiplyNumberDigits(num) {
  let result = 1;
  const stringNum = String(num);
  for (i = 0; i < stringNum.length; i++) {
    result *= +stringNum[i];
  }

  return result;
}

function sumNumberDigits(num) {
  let result = 0;
  const stringNum = String(num);
  for (i = 0; i < stringNum.length; i++) {
    result += +stringNum[i];
  }

  return result;
}

function findBiggestNumber(left, right) {
  const leftBiggestNum = Math.max(
    multiplyNumberDigits(left),
    sumNumberDigits(left),
  );
  const rightBiggestNum = Math.max(
    multiplyNumberDigits(right),
    sumNumberDigits(right),
  );

  return Math.max(leftBiggestNum, rightBiggestNum);
}

// 메인 함수
function problem1(pobi, crong) {
  var answer;

  const [pobiLeft, pobiRight] = pobi;
  const [crongLeft, crongRight] = crong;

  if (
    !checkValidPageNumber(pobiLeft, pobiRight) ||
    !checkValidPageNumber(crongLeft, crongRight)
  )
    return -1;
  return answer;
}

module.exports = problem1;
