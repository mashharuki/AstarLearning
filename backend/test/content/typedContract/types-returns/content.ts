import type BN from 'bn.js';
import type {ReturnNumber} from '@supercolony/typechain-types';

export type ContentInfo = {
	contentId: number,
	title: string,
	content: string,
	goods: number,
	quizs: Array<string>,
	answer: number,
	imageurl: string,
	nftAddress: string
}

