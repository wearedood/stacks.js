import { AuthFieldType } from './constants';

/**
 * Maps raw broadcast error codes to human-readable explanations.
 */
export const ERROR_MESSAGES: Record<string, string> = {
  [AuthFieldType.PostConditionFailed]: 'The transaction failed because a post-condition was not met (e.g., balance protection).',
  [AuthFieldType.NotEnoughTokenBalance]: 'You do not have enough custom tokens to complete this transfer.',
  [AuthFieldType.ConflictingNonceInMempool]: 'A transaction with this nonce is already waiting in the mempool. Try increasing the nonce.',
  [AuthFieldType.BadNonce]: 'The nonce provided is incorrect or has already been used.',
  [AuthFieldType.FeeTooLow]: 'The transaction fee is too low for the current network congestion.',
  [AuthFieldType.NotEnoughFunds]: 'You do not have enough STX to pay for the transaction fees.',
};

/**
 * Returns a human-friendly error message for a given error code.
 */
export const getFriendlyErrorMessage = (errorCode: string): string => {
  return ERROR_MESSAGES[errorCode] || `An unknown error occurred: ${errorCode}`;
};
