

export const createArray= <T>(length: number ,value: T): Array<T> => {
  const result : T[] = [];
  for (let i = 0; i< length; i++) {
    result[i] = value;
  }
  return result;
}

export const swap = <T, U> (tuple: [T,U]): [U,T] => {
  return [tuple[1], tuple[0]];
}

interface LengthWise {
  length: number;
}

export const loggingIdentity = <T extends LengthWise>(arg: T): T => {
  console.log(arg.length);
  return arg;
}

interface Cart<T> {
  list: T[];
}

export const cart : Cart<{name: string, age: number}> = {
  list: [{name: 'john',age: 36},{name: 'mary', age: 18}]
}

export class CMyArray<T> {
  private _list: T[] = [];

  get list(): T[] {
    return this._list;
  }

  set list(value: T[]) {
    this._list = value;
  }

  constructor(_list: T[]) {
    this._list = _list;
  }

  add(value: T) {
    this._list.push(value);
  }

  getMax(): T {
    let result = this.list[0];
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] > result) {
        result = this.list[i];
      }
    }
    return result;
  }
}

export const createArrayStr = <T = string> (length: number, value: T) : Array<T> => {
  const result: T[] = [];
  for (let i=0; i<length; i++) {
    result[i] = value;
  }
  return result;
}

const p1 = {
  name: 'hello',
  age: 10,
  gender: true,
};

type People = typeof p1;
export const getName_G = (p:People) => p.name;
export const getAge = (p:People) => p.age;
export const getGender = (p:People) => p.gender;


interface Person {
  name: string;
  age: number;
  gender: 'male' | 'female'
}

type PersonKey = keyof Person
export const getValueByKey = (p:Person,key:PersonKey) => p[key];

interface Person {
  name: string;
  age: number;
}

export type tXXXX = Person['name'];




















