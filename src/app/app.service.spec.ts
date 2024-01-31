import { TestBed } from '@angular/core/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  it('should count the number of capital letters in a string', () => {
    const result = service.CountCapital('Hello World');
    expect(result).toBe(2);
  });

  it('should check if a password meets the criteria', () => {
    const validPassword = 'Abcd12@';
    const invalidPassword = 'abc123';

    const isValid = service.CheckPassword(validPassword);
    const isInvalid = service.CheckPassword(invalidPassword);

    console.log(`Is valid password: ${isValid}`);
    console.log(`Is invalid password: ${isInvalid}`);

    expect(isValid).toBe(false);
    expect(isInvalid).toBe(false);
  });

  it('should calculate the sum of elements in an array', () => {
    const result = service.ArrayAddition([1, 2, 3, 4, 5]);
    expect(result).toBe(15);
  });

});