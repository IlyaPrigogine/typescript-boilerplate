import { greet } from '../main'
import {
  Animal, Bird,
  double,
  flag, flag3,
  flagArray,
  flagArray2,
  flagColor,
  flagColorStr,
  flagN,
  flagStr,
  flagSym,
  flagTuple, getName,
  hello, name1, name2, strLength
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




