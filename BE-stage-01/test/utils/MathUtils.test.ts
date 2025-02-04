/* global describe, it, expect, describe */

import {
  isPrime,
  isArmstrong,
  getDigitSum,
  isPerfect,
  getParity,
} from '../../src/utils/MathUtils';
describe('MathUtils', () => {
  describe('isPrime', () => {
    it('should return false for numbers less than 2', () => {
      expect(isPrime('1')).toBe(false);
    });

    it('should return true for prime numbers', () => {
      expect(isPrime('2')).toBe(true);
      expect(isPrime('3')).toBe(true);
      expect(isPrime('5')).toBe(true);
      expect(isPrime('7')).toBe(true);
    });

    it('should return false for non-prime numbers', () => {
      expect(isPrime('4')).toBe(false);
      expect(isPrime('6')).toBe(false);
      expect(isPrime('8')).toBe(false);
      expect(isPrime('9')).toBe(false);
    });

    it('should return false for negative numbers', () => {
      expect(isPrime('-1')).toBe(false);
      expect(isPrime('-5')).toBe(false);
    });
  });

  describe('isArmstrong', () => {
    it('should return true for armstrong numbers', () => {
      expect(isArmstrong('1')).toBe(true);
      expect(isArmstrong('2')).toBe(true);
      expect(isArmstrong('153')).toBe(true);
      expect(isArmstrong('370')).toBe(true);
      expect(isArmstrong('371')).toBe(true);
      expect(isArmstrong('407')).toBe(true);
      expect(isArmstrong('1634')).toBe(true);
    });

    it('should return false for non-armstrong numbers', () => {
      expect(isArmstrong('10')).toBe(false);
      expect(isArmstrong('100')).toBe(false);
      expect(isArmstrong('200')).toBe(false);
      expect(isArmstrong('123')).toBe(false);
      expect(isArmstrong('500')).toBe(false);
    });
  });

  describe('getDigitSum', () => {
    it('should return correct digit sum', () => {
      expect(getDigitSum('1')).toEqual(1);
      expect(getDigitSum('2')).toEqual(2);
      expect(getDigitSum('153')).toEqual(9);
      expect(getDigitSum('370')).toEqual(10);
    });

    it('should return correct digit sum for negative numbers', () => {
      expect(getDigitSum('-1')).toEqual(-1);
      expect(getDigitSum('-5')).toEqual(-5);
    });
  });

  describe('isPerfect', () => {
    it('should return false for numbers less than 6', () => {
      expect(isPerfect('1')).toBe(false);
      expect(isPerfect('3')).toBe(false);
    });

    it('should return true for perfect numbers', () => {
      expect(isPerfect('6')).toBe(true);
      expect(isPerfect('28')).toBe(true);
      expect(isPerfect('496')).toBe(true);
      expect(isPerfect('8128')).toBe(true);
    });

    it('should return false for non-perfect numbers', () => {
      expect(isPerfect('7')).toBe(false);
      expect(isPerfect('29')).toBe(false);
      expect(isPerfect('100')).toBe(false);
      expect(isPerfect('3546')).toBe(false);
    });

    it('should return false for negative numbers', () => {
      expect(isPerfect('-1')).toBe(false);
      expect(isPerfect('-5')).toBe(false);
    });
  });

  describe('getParity', () => {
    it('should return odd for odd numbers', () => {
      expect(getParity('3')).toBe('odd');
      expect(getParity('-3')).toBe('odd');
      expect(getParity('5')).toBe('odd');
      expect(getParity('8123')).toBe('odd');
    });

    it('should return even for even numbers', () => {
      expect(getParity('2')).toBe('even');
      expect(getParity('-2')).toBe('even');
      expect(getParity('4')).toBe('even');
      expect(getParity('3546')).toBe('even');
    });
  });
});
