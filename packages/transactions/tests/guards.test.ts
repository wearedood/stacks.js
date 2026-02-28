import { isPostConditionFailed, isConflictingNonceInMempool } from '../src/types';

describe('Transaction Guard Tests', () => {
  test('isPostConditionFailed correctly identifies the error', () => {
    const mockError = { reason: 'PostConditionFailed', reason_data: {} };
    expect(isPostConditionFailed(mockError as any)).toBe(true);
    
    const wrongError = { reason: 'BadNonce' };
    expect(isPostConditionFailed(wrongError as any)).toBe(false);
  });

  test('isConflictingNonceInMempool correctly identifies the error', () => {
    const mockError = { reason: 'ConflictingNonceInMempool', reason_data: { expected: 1, actual: 1 } };
    expect(isConflictingNonceInMempool(mockError as any)).toBe(true);
  });
});
