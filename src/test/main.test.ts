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
  User, IUserAttr, IUserObj, CDog, constArray, roa, cost, createAnimal, CAnimal,getName,
} from "../LTS1";
import {CWorker} from "../CWorker";
import {CPerson, CUser} from "../PersonSpeakSpanish";
import {
  cart,
  CMyArray,
  createArray,
  createArrayStr,
  getAge,
  getGender,
  getName_G,
  loggingIdentity,
  swap
} from "../LTS_Generics";


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

it('test func md5() && rsa() in lts1', () => {
  expect(md5('john', 'jack')).toBe('johnjack');
  expect(rsa('john', 'jack')).toBe('john///jack');
})

it('test interface UserAttr in lts1', () => {
  const arr: IUserAttr = ['x', 'y'];
  expect(arr[0]).toBe('x');
  expect(arr[1]).toBe('y');
})

it('test interface userObj in lts1', () => {
  const obj: IUserObj = {name: 'john', age: '36'} /* age MUST be string not number*/
  expect(obj.name).toBe('john');
  expect(obj.age).toBe('36');
})

it('test class CDog in lts1', () => {
  const mydog = new CDog('mary');
  expect(mydog.name).toBe('mary');
  expect(mydog.eat()).toBe('mary eat');

  mydog.name = 'john';
  expect(mydog.name).toBe('john');
  expect(mydog.eat()).toBe('john eat');
});

it('test roa in lts1', () => {
  constArray.forEach((value, index) => {
    expect(value).toBe(index + 1)
  });
  constArray[0] = 3;

  roa.forEach((value, index) => {
    expect(value).toBe(index + 1)
  });
  // roa[0] = 3; error because roa is readonlyArray;
});

it('test CWorker in lts2', () => {
  const myWorker = new CWorker('john');
  expect(myWorker.eat()).toBe('eat');
  expect(myWorker.work()).toBe('work');
  expect(myWorker.name).toBe('john');
  expect(myWorker.coding('hello,world')).toBe('john writes hello,world');

  myWorker.name = 'mary';
  expect(myWorker.name).toBe('mary');
  expect(myWorker.coding('welcome')).toBe('mary writes welcome');
})

it('test CPerson in src/PersonSpeakSpanish.ts', () => {
  const myPerson = new CPerson();
  expect(myPerson.speak()).toBe('person');
  expect(myPerson.speakSpanish()).toBe('speakSpanish');
})

it('test CUser in src/PersonSpeakSpanish.ts', () => {
  const myUser = new CUser('john');
  expect(myUser.name).toBe('john');
  expect(myUser.speak()).toBe('john speak');
  expect(myUser.speakSpanish()).toBe('john speak spanish');

  myUser.name = 'mary'
  expect(myUser.name).toBe('mary');
  expect(myUser.speak()).toBe('mary speak');
  expect(myUser.speakSpanish()).toBe('mary speak spanish');

});

it ('test func cost() in src/LTS1.ts', () => {
  expect(cost(3)).toBeCloseTo(2.4);
  expect(cost(0)).toBeCloseTo(0);
  expect(cost(10)).toBeCloseTo(8);
})

it ('test createAnimal() in lts1', async () => {
  const a = createAnimal(CAnimal,'hello');
  expect(a.name).toBe('hello');
  expect(typeof a).toBe('object');
});

it ('test createArray() func in LTSG', async() => {
  expect(createArray<string>(3,'x').length).toBe(3);
  expect(createArray<string>(3,'x').join('')).toBe('xxx');
  expect(createArray<string>(5,'y').join('')).toBe('yyyyy');
  expect(createArray(6,6).join('')).toBe('666666');

  console.log(createArray(100,'-').join(''));
})

it ('test swap() func in LTSG', () => {
  expect(swap([7,6]).join('')).toBe('67');
  expect(swap([7,'seven']).join('')).toBe('seven7');
  expect(swap([6,'six']).join('')).toBe('six6');
})

it ('test loggingIdentity() func in LTSG', () => {
  expect(loggingIdentity('hello')).toBe('hello');
  expect(loggingIdentity([1,2,3]).join('-')).toBe('1-2-3');
  expect(loggingIdentity(['steve','john','mary','jack']).join('/')).toBe('' +
    'steve/john/mary/jack');
})

it ('test cart const in LTSG', () => {
  expect(cart.list.length).toBe(2);
  expect(cart.list[0].name).toBe('john');
  expect(cart.list[1].age).toBe(18);
})

it ('test Class myArray', () => {
  const myArray = new CMyArray([1,2,4,3]);
  expect(myArray.getMax()).toBe(4);

  myArray.add(6);
  expect(myArray.list.length).toBe(5);
  expect(myArray.getMax()).toBe(6);

  myArray.add(0);
  expect(myArray.list.length).toBe(6);
  expect(myArray.getMax()).toBe(6);
})

it ('test func createArrayStr() in LTSG', () => {
  expect(createArrayStr(3,1).join('')).toBe('111');
  expect(createArrayStr(5,'a').join('-')).toBe('a-a-a-a-a')
})

it ('test getName(), getAge() && getGender()', () => {
  const p2 = {
    name: 'amanda',
    age: 36,
    gender: false,
  };

  expect(getName_G(p2)).toBe('amanda');
  expect(getAge(p2)).toBe(36);
  expect(getGender(p2)).toBe(false);
})











































