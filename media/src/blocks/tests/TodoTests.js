import {toggleTodo} from './../actions/TodoActions.js';
import expect from 'expect';
import todo from './../reducers/todo.js';

export const testToggleTodo = () => {
	const todoBefore = {
		id: 0,
		text: 'Learn Redux',
		completed: false
	};
	const todoAfter = {
		id: 0,
		text: 'Learn Redux',
		completed: true
	};

	deepFreeze(todoBefore)
	expect(
		toggleTodo(todoAfter)
	).toEqual()
}
