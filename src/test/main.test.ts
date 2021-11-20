import { greet } from '../main'
import {
  flag,
  flagArray,
  flagArray2,
  flagColor,
  flagColorStr,
  flagN,
  flagStr,
  flagSym,
  flagTuple,
  hello
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
