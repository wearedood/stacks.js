import { NetworkClientParam } from '@stacks/network';
import { ClarityValue } from './clarity';

/**
 * An address string encoded as c32check
 */
export type AddressString = string;

/**
 * A contract identifier string given as `<address>.<contract-name>`
 */
export type ContractIdString = `${string}.${string}`;

/**
 * An asset name string given as `<contract-id>::<token-name>` aka `<contract-address>.<contract-name>::<token-name>`
 */
export type AssetString = `${ContractIdString}::${string}`;

export type BaseRejection = {
  error: string;
  reason: string;
  txid: string;
};

export type SerializationRejection = {
  reason: 'Serialization';
  reason_data: {
    message: string;
  };
} & BaseRejection;

export type DeserializationRejection = {
  reason: 'Deserialization';
  reason_data: {
    message: string;
  };
} & BaseRejection;

export type SignatureValidationRejection = {
  reason: 'SignatureValidation';
  reason_data: {
    message: string;
  };
} & BaseRejection;

export type BadNonceRejection = {
  reason: 'BadNonce';
  reason_data: {
    expected: number;
    actual: number;
    is_origin: boolean;
    principal: boolean;
  };
  export type ConflictingNonceInMempoolRejection = {
  reason: 'ConflictingNonceInMempool';
  reason_data: {
    expected: number;
    actual: number;
  };
};

export type ServerRejectedRejection = {
  reason: 'ServerRejected';
  reason_data: any;
};
} & BaseRejection;

export type FeeTooLowRejection = {
  reason: 'FeeTooLow';
  reason_data: {
    expected: number;
    actual: number;
  };
} & BaseRejection;

export type NotEnoughFundsRejection = {
  reason: 'NotEnoughFunds';
  reason_data: {
    expected: string;
    actual: string;
  };
} & BaseRejection;

export type NoSuchContractRejection = {
  reason: 'NoSuchContract';
} & BaseRejection;

export type NoSuchPublicFunctionRejection = {
  reason: 'NoSuchPublicFunction';
} & BaseRejection;

export type BadFunctionArgumentRejection = {
  reason: 'BadFunctionArgument';
  reason_data: {
    message: string;
  };
} & BaseRejection;

export type ContractAlreadyExistsRejection = {
  reason: 'ContractAlreadyExists';
  reason_data: {
    contract_identifier: string;
  };
} & BaseRejection;

export type PoisonMicroblocksDoNotConflictRejection = {
  reason: 'PoisonMicroblocksDoNotConflict';
} & BaseRejection;

export type PoisonMicroblockHasUnknownPubKeyHashRejection = {
  reason: 'PoisonMicroblockHasUnknownPubKeyHash';
} & BaseRejection;

export type PoisonMicroblockIsInvalidRejection = {
  reason: 'PoisonMicroblockIsInvalid';
} & BaseRejection;

export type BadAddressVersionByteRejection = {
  reason: 'BadAddressVersionByte';
} & BaseRejection;

export type NoCoinbaseViaMempoolRejection = {
  reason: 'NoCoinbaseViaMempool';
} & BaseRejection;

export type ServerFailureNoSuchChainTipRejection = {
  reason: 'ServerFailureNoSuchChainTip';
} & BaseRejection;

export type ServerFailureDatabaseRejection = {
  reason: 'ServerFailureDatabase';
  reason_data: {
    message: string;
  };
} & BaseRejection;

export type ServerFailureOtherRejection = {
  reason: 'ServerFailureOther';
  reason_data: {
    message: string;
  };
} & BaseRejection;

export type TxBroadcastResultOk = {
  txid: string;
};
/**
 * Error returned when a transaction with the same nonce is already in the mempool.
 */
export type ConflictingNonceInMempoolRejection = {
  reason: 'ConflictingNonceInMempool';
  reason_data: {
    expected: number;
    actual: number;
  };
} & BaseRejection;

/**
 * Error returned when the server rejects the transaction for an unspecified reason.
 */
export type ServerRejectedRejection = {
  reason: 'ServerRejected';
  reason_data: any;
} & BaseRejection;

/**
 * Error returned when the user doesn't have enough token balance for the transfer.
 */
export type NotEnoughTokenBalanceRejection = {
  reason: 'NotEnoughTokenBalance';
  reason_data: any;
} & BaseRejection;

/**
 * Error returned when a post-condition check fails during broadcast.
 */
export type PostConditionFailedRejection = {
  reason: 'PostConditionFailed';
  reason_data: any;
} & BaseRejection;

export type TxBroadcastResultRejected =
  | SerializationRejection
  | DeserializationRejection
  | SignatureValidationRejection
  | BadNonceRejection
  | FeeTooLowRejection
  | NotEnoughFundsRejection
  | NotEnoughTokenBalanceRejection
  | PostConditionFailedRejection
  | NoSuchContractRejection
  | ConflictingNonceInMempoolRejection
  | ServerRejectedRejection
  | NoSuchPublicFunctionRejection
  | BadFunctionArgumentRejection
  | ContractAlreadyExistsRejection
  | PoisonMicroblocksDoNotConflictRejection
  | PoisonMicroblockHasUnknownPubKeyHashRejection
  | PoisonMicroblockIsInvalidRejection
  | BadAddressVersionByteRejection
  | NoCoinbaseViaMempoolRejection
  | ServerFailureNoSuchChainTipRejection
  | ServerFailureDatabaseRejection
  | ServerFailureOtherRejection;

export type TxBroadcastResult = TxBroadcastResultOk | TxBroadcastResultRejected;

/**
 * Helper to check if a result is a PostConditionFailed error.
 */
export const isPostConditionFailed = (result: TxBroadcastResult): result is PostConditionFailedRejection =>
  'reason' in result && result.reason === 'PostConditionFailed';

/**
 * Helper to check if a result is a ConflictingNonceInMempool error.
 */
export const isConflictingNonceInMempool = (result: TxBroadcastResult): result is ConflictingNonceInMempoolRejection =>
  'reason' in result && result.reason === 'ConflictingNonceInMempool';
 * Type guard for ServerRejected error.
 */
export const isServerRejected = (result: TxBroadcastResult): result is ServerRejectedRejection =>
  'reason' in result && result.reason === 'ServerRejected';
