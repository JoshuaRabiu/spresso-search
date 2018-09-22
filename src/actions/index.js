import { store } from '../reducers/index';
import axios from 'axios';

export const search = (e) => {
	store.dispatch((dispatch) => {
		if (e.key === 'Enter') {
			dispatch({ type: 'LOADING_STATUS', payload: true })
			dispatch({ type: 'SET_QUERY', payload: e.target.value })
			axios.post(`/search/${encodeURI(e.target.value)}`)
				.then(res => dispatch({ type: 'SEND_RESULTS', payload: res.data }))
				.then(() => {
					dispatch({ type: 'LOADING_STATUS', payload: false });
				})
		}
	})
}

export const changePage = (which) => {
	store.dispatch((dispatch) => {
		const switchPage = () => {
			dispatch({type: 'LOADING_STATUS', payload: true})
			axios.post(`/search/${store.getState().query}/${store.getState().counter}`)
				.then(res => dispatch({ type: 'SEND_RESULTS', payload: res.data }))
				.then(() => dispatch({type: 'LOADING_STATUS', payload: false}))
		}
		switch (which) {
			case 'back':
				dispatch({ type: 'DECREMENT' })
				switchPage()
				break;
			case 'forward':
				dispatch({ type: 'INCREMENT' })
				switchPage()
				break;
			default:
				alert('An error occured')
				break;
		}
	})

}

export const outline = (site) => {
	store.dispatch((dispatch) => {
		dispatch({ type: 'OUTLINE_LOADING' })
		axios.post(`/search/outline/${site}`)
			.then(res => dispatch({ type: 'OUTLINE', payload: res.data }))
	})
}
