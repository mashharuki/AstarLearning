/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@supercolony/typechain-types';
import { buildSubmittableExtrinsic } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/nft';
import type BN from 'bn.js';



export default class Methods {
	private __nativeContract : ContractPromise;

	constructor(
		nativeContract : ContractPromise,
	) {
		this.__nativeContract = nativeContract;
	}
	/**
	 * mintNft
	 *
	*/
	"mintNft" (
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "mintNft", [], __options);
	}

	/**
	 * setBaseUri
	 *
	 * @param { string } uri,
	*/
	"setBaseUri" (
		uri: string,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "setBaseUri", [uri], __options);
	}

	/**
	 * setNftName
	 *
	 * @param { string } name,
	*/
	"setNftName" (
		name: string,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "setNftName", [name], __options);
	}

	/**
	 * setNftSymbol
	 *
	 * @param { string } symbol,
	*/
	"setNftSymbol" (
		symbol: string,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "setNftSymbol", [symbol], __options);
	}

	/**
	 * setNftIamge
	 *
	 * @param { string } image,
	*/
	"setNftIamge" (
		image: string,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "setNftIamge", [image], __options);
	}

	/**
	 * setNftDescription
	 *
	 * @param { string } description,
	*/
	"setNftDescription" (
		description: string,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "setNftDescription", [description], __options);
	}

	/**
	 * tokenUri
	 *
	 * @param { (number | string | BN) } tokenId,
	*/
	"tokenUri" (
		tokenId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "tokenUri", [tokenId], __options);
	}

	/**
	 * withdraw
	 *
	*/
	"withdraw" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "withdraw", [], __options);
	}

	/**
	 * maxSupply
	 *
	*/
	"maxSupply" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "maxSupply", [], __options);
	}

	/**
	 * checkAmount
	 *
	 * @param { (number | string | BN) } mintAmount,
	*/
	"checkAmount" (
		mintAmount: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "checkAmount", [mintAmount], __options);
	}

	/**
	 * tokenExists
	 *
	 * @param { ArgumentTypes.Id } id,
	*/
	"tokenExists" (
		id: ArgumentTypes.Id,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "tokenExists", [id], __options);
	}

	/**
	 * getNftName
	 *
	*/
	"getNftName" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "getNftName", [], __options);
	}

	/**
	 * getNftSymbol
	 *
	*/
	"getNftSymbol" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "getNftSymbol", [], __options);
	}

	/**
	 * getOwnNfts
	 *
	*/
	"getOwnNfts" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "getOwnNfts", [], __options);
	}

	/**
	 * getIamge
	 *
	*/
	"getIamge" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "getIamge", [], __options);
	}

	/**
	 * getNftDescription
	 *
	*/
	"getNftDescription" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "getNftDescription", [], __options);
	}

	/**
	 * ownerOf
	 *
	 * @param { ArgumentTypes.Id } id,
	*/
	"ownerOf" (
		id: ArgumentTypes.Id,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp34::ownerOf", [id], __options);
	}

	/**
	 * collectionId
	 *
	*/
	"collectionId" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp34::collectionId", [], __options);
	}

	/**
	 * transfer
	 *
	 * @param { ArgumentTypes.AccountId } to,
	 * @param { ArgumentTypes.Id } id,
	 * @param { Array<(number | string | BN)> } data,
	*/
	"transfer" (
		to: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id,
		data: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp34::transfer", [to, id, data], __options);
	}

	/**
	 * approve
	 *
	 * @param { ArgumentTypes.AccountId } operator,
	 * @param { ArgumentTypes.Id | null } id,
	 * @param { boolean } approved,
	*/
	"approve" (
		operator: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id | null,
		approved: boolean,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp34::approve", [operator, id, approved], __options);
	}

	/**
	 * totalSupply
	 *
	*/
	"totalSupply" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp34::totalSupply", [], __options);
	}

	/**
	 * balanceOf
	 *
	 * @param { ArgumentTypes.AccountId } owner,
	*/
	"balanceOf" (
		owner: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp34::balanceOf", [owner], __options);
	}

	/**
	 * allowance
	 *
	 * @param { ArgumentTypes.AccountId } owner,
	 * @param { ArgumentTypes.AccountId } operator,
	 * @param { ArgumentTypes.Id | null } id,
	*/
	"allowance" (
		owner: ArgumentTypes.AccountId,
		operator: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id | null,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp34::allowance", [owner, operator, id], __options);
	}

	/**
	 * owner
	 *
	*/
	"owner" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "ownable::owner", [], __options);
	}

	/**
	 * renounceOwnership
	 *
	*/
	"renounceOwnership" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "ownable::renounceOwnership", [], __options);
	}

	/**
	 * transferOwnership
	 *
	 * @param { ArgumentTypes.AccountId } newOwner,
	*/
	"transferOwnership" (
		newOwner: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "ownable::transferOwnership", [newOwner], __options);
	}

	/**
	 * mint
	 *
	 * @param { ArgumentTypes.AccountId } account,
	 * @param { ArgumentTypes.Id } id,
	*/
	"mint" (
		account: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp34Mintable::mint", [account, id], __options);
	}

	/**
	 * tokenByIndex
	 *
	 * @param { (string | number | BN) } index,
	*/
	"tokenByIndex" (
		index: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp34Enumerable::tokenByIndex", [index], __options);
	}

	/**
	 * ownersTokenByIndex
	 *
	 * @param { ArgumentTypes.AccountId } owner,
	 * @param { (string | number | BN) } index,
	*/
	"ownersTokenByIndex" (
		owner: ArgumentTypes.AccountId,
		index: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp34Enumerable::ownersTokenByIndex", [owner, index], __options);
	}

	/**
	 * getAttribute
	 *
	 * @param { ArgumentTypes.Id } id,
	 * @param { Array<(number | string | BN)> } key,
	*/
	"getAttribute" (
		id: ArgumentTypes.Id,
		key: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "psp34Metadata::getAttribute", [id, key], __options);
	}

}