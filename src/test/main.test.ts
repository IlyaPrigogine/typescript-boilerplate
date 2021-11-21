import {greet} from '../main'
import {
  aAnimal,
  Animal,
  Bird,
  Cat,
  countNumber,
  Dog,
  double,
  flag,
  flag3,
  flagArray,
  flagArray2,
  flagColor,
  flagColorStr,
  flagN,
  flagStr,
  flagSym,
  flagTuple,
  funcAttr,
  funcDefaultParameter,
  funcSum,
  getHello,
  getName,
  hello,
  isObject, md5,
  name1,
  name2,
  obj,
  Person,
  Person2, printLabel, printName, printName2,
  printNameString, rsa,
  Speakable,
  strLength,
  Student,
  User
} from "../LTS1";


test('the data is peanut butter', () => {
  expect(1).toBe(1)
});

test('greeting', () => {
  expect(greet('Foo')).toBe('Hello Foo')
});

test('greeting', () => {
  expect(greet('Foo')).toBe('Hello Foo')
});

test ('test basic types', () => {
  expect(flag).toBe(true);
  expect(flagN).toBe(1);
  expect(flagStr).toBe('hello');
  expect(flagColor.Blue).toBe(2);
  expect(flagColorStr.Pink).toBe('pink');
});

it ('test array types: ',() => {
  expect(flagArray.length).toBe(3);
  expect(flagArray2[1]).toBe(2);
})

it ('test tuple type', () => {
  expect(flagTuple[0]).toBe('john');
  expect(flagTuple[1]).toBe(35);
})

it ('test Symbol type', () => {
  console.log(flagSym.toString());
});

it ('test hello() in LTS1',() => {
  hello('world');
  hello('john');
})

it ('test Union Types in LTS1', () => {
  expect(name1).toBe('john');
  expect(name2).toBe(35);
})

it ('test Types Assertion in LTS1', () => {
  expect(strLength).toBeGreaterThanOrEqual(10);
  expect(strLength).toBeGreaterThanOrEqual(10);
  expect(flag3).not.toBeNull();
  expect(flag3.x).toBe(1);
  expect(flag3.y).toBe('hello');
})

it ('test double() in LTS1', () => {
  expect(double(3)).toBe(6);
  expect(double('abc')).toBe('abcabc');
  expect(double(false)).toBe(true);
});

it ('test getName() in LTS1', () => {
  const animal = new Animal();
  animal.name = 'world';
  expect(getName(animal)).toBe('hello,world');

  const inBird = new Bird();
  inBird.fly = 36;
  expect(getName(inBird)).toBe(37);
})

it ('test isObject() in LTS1 ',()=> {
  expect(isObject('abc')).toBe(false);
})

it ('test getHello() in LTS1', () => {
  expect(getHello('world')).toBe('hello,world');
  expect(getHello('john')).toBe('hello,john');
  expect(getHello('')).toBe('hello,');
});

it ('test countNumber() in LTS1',() => {
  expect(countNumber(1,2)).toBe(3);
  expect(countNumber(3,-1)).toBe(2);
})

it('test printNameString() in LTS1', () => {
  expect(printNameString('hello', 36)).toBe(`hello,36`);
  expect(printNameString('john', 18)).toBe(`john,18`);
})

it('test funcDefaultParameter() in LTS1', () => {
  expect(funcDefaultParameter('may')).toBe('may,16');
  expect(funcDefaultParameter('amanda', 32)).toBe('amanda,32');
})

it('test funcSum() in lts1', () => {
  expect(funcSum(1, 2, 3)).toBe(6);
  expect(funcSum(-1, 0, 1)).toBe(0);
  expect(funcSum(1.2, 2, 2.8)).toBe(6);
})

it('test funcAttr() in lts1', () => {
  funcAttr('hahaha');
  expect(obj.name).toBe('hahaha');

  funcAttr(9);
  expect(obj.age).toBe(9);
})

it('test class Person in lts1', () => {
  const p1 = new Person('hello');
  expect(p1.getName()).toBe('hello');
})

it('test class User in lts1', () => {
  const u1 = new User('john');
  expect(u1.name).toBe('john');

  u1.name = 'ada';
  expect(u1.name).toBe('ada');
});

it('test class Person2 in lts1', () => {
  const p1 = new Person2('john', 36);
  expect(p1.name).toBe('john');
  expect(p1.age).toBe(36);

  p1.name = 'ada';
  p1.age = 16;
  expect(p1.name).toBe('ada');
  expect(p1.age).toBe(16);
})

it('test class Student in lts1', () => {
  const s1 = new Student('john', 36, 0);
  expect(s1.name).toBe('john');
  expect(s1.age).toBe(36);
  expect(s1.no).toBe(0);

  const s2 = new Student('ada', 16);
  expect(s2.name).toBe('ada');
  expect(s2.age).toBe(16);
  expect(s2.no).toBeUndefined();
})

it('test Cat class in lts1', () => {
  const animal = new Cat();
  expect(animal.speak()).toBe('hello cat');
});

it('test Cat && Dog class in lts1', () => {
  const cat = new Cat();
  const dog = new Dog();
  const animals: aAnimal[] = [dog, cat];
  animals.forEach((value) => {
    console.log(value.speak());
  });
})

const speakman: Speakable = {
  speak(): void {
    /**/
  },
  name: 'hello',
  lng: 'en'
}
const speakman2: Speakable = {
  speak(): void {
    /**/
  },
  lng: 'cn'
};

it('test speakman && speakman2 in lts1', () => {

  expect(speakman.name).toBe('hello');
  expect(speakman.lng).toBe('en');
  expect(speakman2.name).toBeUndefined;
  expect(speakman2.lng).toBe('cn');
})

it('test printLabel in lts1', () => {
  const myObj = {size: 10, label: 'size 10 object'};
  const myObj2 = {name: 'john', age: 36, label: 'Welcome John, ur age is 36'};
  expect(printLabel(myObj)).toBe('size 10 object');
  expect(printLabel(myObj2)).toBe('Welcome John, ur age is 36');
})

it('test printName() func in lts1', () => {
  const obj = {
    "age": 22,
    firstName: 'steve',
    secondName: 'mary'
  };
  expect(printName(obj)).toBe('steve---mary');

  const obj2 = {
    size: 10,
    label: 'size 10 object',
    firstName: 'john',
    secondName: 'kevin',
  }
  expect(printName(obj2)).toBe('john---kevin');
})

it('test printName2() func in lts1', () => {
  const obj = {
    age: 22,
    firstName: 'steve',
    secondName: 'mary'
  };
  expect(printName2(obj)).toBe('steve---mary');

  const obj2 = {
    age: 36,
    firstName: 'john'
  };
  expect(printName2(obj2)).toBe('john---undefined');
})

it('test func md5() && rsa()', () => {
  expect(md5('john', 'jack')).toBe('johnjack');
  expect(rsa('john', 'jack')).toBe('john///jack');
})











































