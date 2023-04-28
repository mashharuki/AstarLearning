/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/content';
import type * as ReturnTypes from '../types-returns/content';
import type BN from 'bn.js';
import {ReturnNumber} from '@supercolony/typechain-types';
import {getTypeDescription} from './../shared/utils';


export default class Methods {
	private __nativeContract : ContractPromise;
	private __callerAddress : string;

	constructor(
		nativeContract : ContractPromise,
		callerAddress : string,
	) {
		this.__nativeContract = nativeContract;
		this.__callerAddress = callerAddress;
	}

	/**
	* getContents
	*
	* @returns { Array<ReturnTypes.ContentInfo> }
	*/
	"getContents" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Array<ReturnTypes.ContentInfo> > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "getContents", [], __options , (result) => { return handleReturnType(result, getTypeDescription(0, 'content')); });
	}

}