import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  let pipe : MyMultPipe;

  beforeEach(() => {
    pipe = new MyMultPipe();
  });

  it('Should Multiply Two Numbers ', () => {
    const result = pipe.transform(2,3);
    expect(result).toBe(6);
  });
});
