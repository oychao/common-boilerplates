import { assert } from 'chai';
import { main } from '../src/index';

describe('HelloWorld', () => {
  beforeEach(() => {});

  it('main function should return hello world', () => {
    assert(main('world'), 'hello world');
  });
});
