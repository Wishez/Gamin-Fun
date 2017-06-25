import { INCREMENT, DECREMENT } from './../constants/actionTypes.js';
import deepFreeze from 'deep-freeze';
import expect from 'expect';

export function increace() {
	return { type: INCREMENT };
}

export function decreace() {
	return { type: DECREMENT };
}

const incrementCounter = (list, index) => {
	return [
		...list.slice(0, index),
		list[index] + 1,
		...list.slice(index + 1)
	]
}

const decrementCounter = (list, index) => {
	return [
		...list.slice(0, index),
		list[index] - 1,
		...list.slice(index + 1)
	]
}

const addCounter = (list) => {
	return [...list, 0];
}

const removeCounter = (list, index) => {
	return [
		...list.slice(0, index),
		...list.slice(index + 1)
	]
};

const testAddCounter = () => {
	const listBefore = [];
	const listAfter = [0];


	deepFreeze(listBefore);

	expect(
		addCounter(listBefore)
	).toEqual(listAfter);
};

const testRemoveCounter = () => {
	const listBefore = [1,5,6];
	const listAfter = [1, 6];

	deepFreeze(listBefore);

	expect(
		removeCounter(listBefore, 1)
	).toEqual(listAfter);
};

const testIncrementCounter = () => {
	const listBefore = [0, 1, 4];
	const listAfter = [0, 2, 4];

	deepFreeze(listBefore);
	expect(
		incrementCounter(listBefore, 1)
	).toEqual(listAfter);
	
};
const testDecrementCounter = () => {
	const listBefore = [1, 3, 3];
	const listAfter = [1, 2, 3];

	deepFreeze(listBefore);

	expect(
		decrementCounter(listBefore, 1)
	).toEqual(listAfter);
	
};

testAddCounter();
testRemoveCounter();
testIncrementCounter();
testDecrementCounter();
console.log('All tests was passed/0/');