import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  let pipe : MyAddPipe;
  
  beforeEach(() => {
    pipe = new MyAddPipe();
  });

  it('Should Add Two Numbers', () => {
    const result = pipe.transform(2,3);
    expect(result).toBe(5);
  });
});
