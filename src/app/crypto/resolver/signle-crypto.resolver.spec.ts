import { TestBed } from '@angular/core/testing';

import { SignleCryptoResolver } from './signle-crypto.resolver';

describe('SignleCryptoResolver', () => {
  let resolver: SignleCryptoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SignleCryptoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
