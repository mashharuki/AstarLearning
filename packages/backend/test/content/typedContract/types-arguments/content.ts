import type BN from 'bn.js';

export type ContentInfo = {
	contentId: (number | string | BN),
	title: string,
	content: string,
	goods: (number | string | BN),
	quizs: Array<string>,
	answer: (number | string | BN),
	imageurl: string,
	nftAddress: string
}

