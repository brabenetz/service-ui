import { runAction } from 'cerebral/test';
import setBlur from './setBlur';

test('should change the value to false', () => runAction(setBlur, {
  state: {
    testForm: {
      testField: {
        isFocus: true,
      },
    },
  },
  props: {
    formPath: 'testForm',
    fieldName: 'testField',
  } })
  .then(({ state }) => {
    expect(state.testForm.testField.isFocus).toBe(false);
  }),
);

test('should change the value to false, if value undefined', () => runAction(setBlur, {
  state: {
    testForm: {
      testField: {
      },
    },
  },
  props: {
    formPath: 'testForm',
    fieldName: 'testField',
  } })
  .then(({ state }) => {
    expect(state.testForm.testField.isFocus).toBe(false);
  }),
);
