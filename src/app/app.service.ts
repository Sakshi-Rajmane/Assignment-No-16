import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

 
  CountCapital(inputString: string): number {
    return inputString.split('').filter(char => char === char.toUpperCase() && char.match(/[A-Z]/)).length;
  }

  CheckPassword(password: string): boolean {
    const capitalCount = password.split('').filter(char => char === char.toUpperCase() && char.match(/[A-Z]/)).length;
    const smallCount = password.split('').filter(char => char === char.toLowerCase() && char.match(/[a-z]/)).length;
    const digitCount = password.split('').filter(char => char.match(/[0-9]/)).length;
    const specialCount = password.split('').filter(char => !char.match(/[a-zA-Z0-9]/)).length;

    return capitalCount >= 2 && smallCount >= 3 && digitCount >= 2 && specialCount >= 1;
  }

  ArrayAddition(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

