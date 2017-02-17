import reducer from '../../src/redux/init';

describe('Redux: init', () => {
  it('creating store throws no errors', () => {
    expect(reducer()).toBeTruthy();
  });
});
