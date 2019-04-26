const {
  forEach
} = require('../mocks');

describe('forEach', () => {
    test('Should call callback', () => {
      const list = [4, 7, 9];
      const callback = jest.fn();
      forEach(list, callback);
      expect(callback).toHaveBeenCalled();
      expect(callback).toHaveBeenCalledTimes(3);
    })

    test('Should call callback 2', () => {
      const list = [4, 7, 9];
      const callback = jest.fn();
      forEach(list, callback);
      expect(callback).toHaveBeenCalled();
    })

    test('Should call callback 3', () => {
      const list = [4, 7, 9];
      const callback = jest.fn();
      forEach(list, callback);
      console.log( callback.mock );
    })
  }
)
