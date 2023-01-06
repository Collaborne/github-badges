#!/usr/bin/env node

import path from 'path';

import { FgGray, FgGreen } from '../constants';
import { createCoverageBadge } from '../create-coverage-badges';
import { getArgs } from '../utils/get-args';

const INPUT_PATH_ARGS = ['i', 'inputPath'];
const OUTPUT_PATH_ARGS = ['o', 'd', 'outputPath', 'dist'];
const args = getArgs();
const inputPath = Object.keys(args).find(key => INPUT_PATH_ARGS.includes(key));
const outputPath = Object.keys(args).find(key =>
	OUTPUT_PATH_ARGS.includes(key),
);
if (!inputPath) {
	console.info(
		`${FgGray} No ${FgGreen} input  ${FgGray} arg provided for create-coverage-badge. Using defaults values, if you want different values, please use short/long version for input ${FgGreen} ${JSON.stringify(
			INPUT_PATH_ARGS,
		)}`,
	);
}
if (!outputPath) {
	console.info(
		`${FgGray} No ${FgGreen} output ${FgGray} arg provided for create-coverage-badge. Using defaults values, if you want different values, please use short/long version for input ${FgGreen} ${JSON.stringify(
			OUTPUT_PATH_ARGS,
		)}`,
	);
}

createCoverageBadge(
	inputPath ? path.resolve(args[inputPath]) : undefined,
	outputPath ? path.resolve(args[outputPath]) : undefined,
);
