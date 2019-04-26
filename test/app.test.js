const { sum, upperCase } = require('../app');

test('Adds 1 + 2 to equal 3', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
  expect(2).not.toBe(1);
});

test('Should call callback', () => {
  const list = 'heelloo';
  const callback = jest.fn();
  upperCase(list, callback);
  expect(callback).toHaveBeenCalled();
  expect(callback).toHaveBeenCalledWith('HEELLOO');
})


test.todo('Adds 1 + 5');
