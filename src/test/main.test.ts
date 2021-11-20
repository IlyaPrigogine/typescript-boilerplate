import { greet } from '../main'
import {flag, flagArray, flagArray2, flagColor, flagColorStr, flagN, flagStr} from "../learnTS001";

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
