import foo from './index';
import * as SomeLib from './some-lib/some-lib';

it('works with a spied default export', () => {
    // Mock `getValue` via the default export of some-lib.js
    // This is a different location than is actually called
    const spy = jest.spyOn(SomeLib, 'default');
    expect(foo()).toEqual('realValue');
    expect(spy).toHaveBeenCalled();
});
