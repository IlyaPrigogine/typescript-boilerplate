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

export const name1 : string | number = 'john';
export const name2 : string | number = 35;


const someValue: any = 'this is a string';
export const strLength : number = (<string>someValue).length;
export const strLength2 : number = (someValue as string).length;

type flag1 = { x: number};
type flag2 = flag1 & {y: string};
export const flag3: flag2 = {
  x: 1,
  y: 'hello',
}

export const double = (input: string | number | boolean) => {
  if (typeof input === 'string') {
    return input + input;
  } else if (typeof input === 'number') {
    return input * 2;
  } else {
    return !input;
  }
}

export class Animal {
  name!: string;
}
export class Bird extends  Animal {
  fly !: number;
}

export const getName = (animal: Animal) => {
  if (animal instanceof Bird) {
    return animal.fly + 1;
  } else {
    return 'hello,' + animal.name;
  }
  return animal;
}

