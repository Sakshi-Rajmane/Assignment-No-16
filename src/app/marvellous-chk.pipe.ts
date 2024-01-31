import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, checkType:string): string 
  {
    switch (checkType)
    {
      case 'prime':
        return this.isPrime(value) ? 'Prime' : 'Not Prime';
        case 'perfect':
          return this.isPerfect(value) ? 'Perfect' : 'Not Perfect';
        case 'even':
          return this.isEven(value) ? 'Even' : 'Odd';
        case 'odd':
          return this.isOdd(value) ? 'Odd' : 'Even';
        default:
          return 'Invalid check type';
      }
    }
  
    private isPrime(num: number): boolean {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    private isPerfect(num: number): boolean {
      let sum = 0;
      for (let i = 1; i < num; i++) {
        if (num % i === 0) {
          sum += i;
        }
      }
      return sum === num;
    }
  
    private isEven(num: number): boolean {
      return num % 2 === 0;
    }
  
    private isOdd(num: number): boolean {
      return num % 2 !== 0;
    }
  }
    
