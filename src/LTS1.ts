export const flag = true;
export const flagN = 1;
export const flagStr = 'hello';

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

export const flagArray: number[] = [1, 2, 3];
export const flagArray2: Array<number> = [1, 2, 3];
export const flagTuple: [string, number] = ['john', 35];

export const flagSym = Symbol('hello');

export const hello = (name: string) => console.log('hello ' + name);

export const name1: string | number = 'john';
export const name2: string | number = 35;


const someValue: any = 'this is a string';
export const strLength: number = (<string>someValue).length;
export const strLength2: number = (someValue as string).length;

type flag1 = { x: number };
type flag2 = flag1 & { y: string };
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

export class Bird extends Animal {
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


// eslint-disable-next-line @typescript-eslint/ban-types
export const isObject = (value: unknown): value is object => {
  return typeof value === 'object' && value !== null;
}

export const getHello = (name: string) => `hello,${name}`;

type tSumFunc = (x: number, y: number) => number;
export const countNumber: tSumFunc = (a, b) => a + b;

export const printNameString = (name: string, age?: number) => `${name},${age}`;
export const funcDefaultParameter = (name: string, age = 16) => `${name},${age}`;

/**
 * @param: input val will be numbers[]
 * @returns: return the sum of input
 */
export const funcSum = (...numbers: number[]) => numbers.reduce((val, item) => (val + item), 0);

export const obj: any = {};

export function funcAttr(val: string): void;
export function funcAttr(val: number): void;
export function funcAttr(val: any): void {
  if (typeof val === 'string') {
    obj.name = val;
  } else {
    obj.age = val;
  }
}

export class Person {
  name!: string;

  constructor(_name: string) {
    this.name = _name;
  }

  getName(): string {
    return this.name;
  }
}

export class User {
  protected myname: string;

  constructor(_myname: string) {
    this.myname = _myname;
  }

  get name() {
    return this.myname;
  }

  set name(_value) {
    this.myname = _value
  }
}

export class Person2 {
  private _name: string;
  private _age: number;

  constructor(_name: string, _age: number) {
    this._name = _name;
    this._age = _age;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }


  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}

export class Student extends Person2 {
  private _no: number | undefined;

  constructor(name: string, age: number, no?: number) {
    super(name, age);
    this._no = no;
  }

  get no(): number | undefined {
    return this._no;
  }

  set no(value: number | undefined) {
    this._no = value;
  }
}



