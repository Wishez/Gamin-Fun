import { SET_VISIBILITY_FILTER, VisibilityFilters, FETCH_ARTICLE, FETCH_POSTS} from './../constants/actionTypes.js';

export function fetchPosts() {
	return { type: FETCH_POSTS }
}

export function fetchArticle(index) {
	return { type: FETCH_ARTICLE, article_id: index}
}