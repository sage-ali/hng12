export const isPrime = function isPrime(numStr: string): boolean {
  const num = parseInt(numStr, 10);
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

export const isArmstrong = function isArmstrong(numStr: string): boolean {
  const num = parseInt(numStr, 10);
  if (num < 0) {
    return false;
  }
  const digits = numStr.split('');
  const length = digits.length;

  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(parseInt(digit, 10), length),
    0
  );

  return num === sum;
};

export const getDigitSum = function getDigitSum(numStr: string): number {
  const digits = numStr.startsWith('-')
    ? numStr
        .slice(1)
        .split('')
        .map((digit, index) =>
          index === 0 ? -parseInt(digit, 10) : parseInt(digit, 10)
        )
    : numStr.split('').map((digit) => parseInt(digit, 10));
  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  return sum;
};

export const isPerfect = function isPerfect(numStr: string): boolean {
  const num = parseInt(numStr, 10);
  if (num < 6) {
    return false;
  }

  const divisors = Array.from({ length: num - 1 }, (__, i) => i + 1).filter(
    (x) => num % x === 0
  );
  return divisors.reduce((acc, cur) => acc + cur, 0) === num;
};

export const getParity = function getParity(numStr: string): string {
  const num = parseInt(numStr, 10);
  return num % 2 === 0 ? 'even' : 'odd';
};
