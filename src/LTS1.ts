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

export abstract class aAnimal {
  name!: string;

  abstract speak(): string;
}

export class Cat extends aAnimal {
  speak() {
    return 'hello cat'
  }
}

export class Dog extends aAnimal {
  speak() {
    return 'hello dog'
  }
}

export interface Speakable {
  readonly lng: string;
  name?: string;

  speak(): void;
}

export const printLabel = (labelledObj: { label: string }) => labelledObj.label;

/* used for printName() func */
interface IFullName {
  firstName: string;
  secondName: string;
}

export const printName = (obj: IFullName) => `${obj.firstName}---${obj.secondName}`;

interface IFullName2 {
  firstName: string;
  secondName?: string;
}

export const printName2 = (obj: IFullName2) => `${obj.firstName}---${obj.secondName}`;

interface encrypt {
  (key: string, value: string): string;
}

export const md5: encrypt = (key, value) => {
  /* fixme: add code for md5 algorithm */
  return key + value;
}

export const rsa: encrypt = (key, value) => {
  /* fixme: add code for rsa */
  return key + "///" + value;
}

export interface IUserAttr {
  [index: number]: string;
}

export interface IUserObj {
  [index: string]: string;
}

interface IAnimal2 {
  name: string;

  eat(str: string): string;
}

export class CDog implements IAnimal2 {
  constructor(_name: string) {
    this._name = _name;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  eat() {
    return `${this._name} eat`
  }
}

export const constArray: number[] = [1, 2, 3, 4];
export const roa: ReadonlyArray<number> = [1, 2, 3, 4];

interface discount {
  (price: number): number;
}

export const cost: discount = (price): number => {
  return price * 0.8
}

export class CAnimal {
  constructor(public name: string) {
  }
}

interface WithNameClass {
  new (name: string): CAnimal;
}

export const createAnimal = (clazz: WithNameClass, name: string) => new clazz(name);

















