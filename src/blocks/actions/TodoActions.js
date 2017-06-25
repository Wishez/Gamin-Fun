import { SET_VISIBILITY_FILTER, VisibilityFilters, TOGGLE_TODO, ADD_TODO} from './../constants/actionTypes.js';

// export function addTodo(text) {
// 	return { type: ADD_TODO, text }
// }

// export function toggleTodo(index) {
// 	return { type: TOGGLE_TODO, index }
// }

// export function setVisibilityFilter(filter) {
// 	return { type: SET_VISIBILITY_FILTER}
// }


export const toggleTodo = (todo) => {
	/*
		or to use:
		return {
			...todo,
			completed: !todo.completed 
		}

	 */
	return Object.assign({}, todo, {
		completed: !todo.completed
	})
};