export const isPrime = function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const isArmstrong = function isArmstrong(num: number): boolean {
  if (num < 0) {
    return false;
  }
  const digits = num.toString().split('');
  const length = digits.length;

  digits.forEach((digit, index, arr) => {
    arr[index] = Math.pow(parseInt(digit, 10), length).toString();
  });

  return num === digits.reduce((acc, cur) => acc + parseInt(cur, 10), 0);
};

export const getDigitSum = function getDigitSum(num: number): number | false {
  if (num < 0) {
    return false;
  }

  return num
    .toString()
    .split('')
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
};

export const isPerfect = function isPerfect(num: number): boolean {
  const firstPerfect = 6;
  if (num < firstPerfect) {
    return false;
  }

  const divisors = Array.from({ length: num - 1 }, (__, i) => i + 1).filter(
    (x) => num % x === 0
  );
  return divisors.reduce((acc, cur) => acc + cur, 0) === num;
};

export const getParity = function getParity(num: number): string | false {
  if (num !== Math.floor(num)) {
    return false;
  }
  return num % 2 === 0 ? 'even' : 'odd';
};
