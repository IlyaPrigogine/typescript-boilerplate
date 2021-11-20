export const flag = true;
export const flagN = 1;
export const flagStr  = 'hello';
export enum flagColor {
  Red,
  Pink,
  Blue,
}
export enum flagColorStr {
  Red = 'red',
  Pink = 'pink',
  Blue = 'blue'
}

export const flagArray: number[] = [1,2,3];
export const flagArray2 : Array<number> = [1,2,3];
export const flagTuple : [string,number] = ['john',35];

export const flagSym = Symbol('hello');

export const hello = (name: string) => console.log('hello ' + name);
