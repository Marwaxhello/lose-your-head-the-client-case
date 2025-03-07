export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/blog": [3],
		"/over": [4],
		"/tekenmethodes": [~5],
		"/tekenmethodes/[slug]": [~6],
		"/tekenmethodes/[slug]/form": [7],
		"/tekenmethodes/[slug]/stappenplan": [~8],
		"/tekenmethodes/[slug]/voorbeelden": [9],
		"/tekenruimte": [10],
		"/tipruimte": [11]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';