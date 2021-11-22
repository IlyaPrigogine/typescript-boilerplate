import {getValueByKey} from "../LTS_Generics";

it ('test the func getValueByKey() in LTSG', async() => {
  const val = getValueByKey({name: 'hello',age: 16,gender: 'male'},'name');
  expect(val).toBe('hello');

  const val2 = getValueByKey({name: 'hello', age: 16, gender: 'female'},'gender');
  expect(val2).toBe('female');

})


