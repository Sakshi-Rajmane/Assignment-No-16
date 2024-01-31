import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
let pipe : MarvellousChkPipe;

beforeEach(() => {
  pipe = new MarvellousChkPipe();
});

it('should identify a prime number', () => {
  const result = pipe.transform(7, 'prime');
  expect(result).toBe('Prime');
});

it('should identify a perfect number', () => {
  const result = pipe.transform(28, 'perfect');
  expect(result).toBe('Perfect');
});

it('should identify an even number', () => {
  const result = pipe.transform(10, 'even');
  expect(result).toBe('Even');
});

it('should identify an odd number', () => {
  const result = pipe.transform(15, 'odd');
  expect(result).toBe('Odd');
});

});
