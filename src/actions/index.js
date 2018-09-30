import { store } from '../reducers/index';
import axios from 'axios';

export const search = (e) => {
	store.dispatch((dispatch) => {
		if (e.key === 'Enter') {
			dispatch({ type: 'LOADING_STATUS', payload: true })
			dispatch({ type: 'SET_QUERY', payload: encodeURI(e.target.value) })
			axios.post(`/search/${store.getState().query}`)
				.then(res => dispatch({ type: 'SEND_RESULTS', payload: res.data }))
				.then(() => {
					dispatch({ type: 'LOADING_STATUS', payload: false });
					const arr = []
					for (let i = 0; i < store.getState().results.length; i++) {
						if (!!store.getState().results[i].image === false) {
							arr.push(store.getState().results[i].link)
						}
						else {
							continue
						}
					}
					dispatch({ type: 'SEND_LINKS', payload: arr })
					// console.log(`LENGTH: ${store.getState().linksToScreenshot.length}`)
					// screenshot(arr)
				})
		}
	})
}

const screenshot = (arr) => {
	axios.post(`screenshot/${arr}`)
		.then(res => store.dispatch({ type: 'SEND_SCREENSHOTS', payload: res.data }))
}

export const changePage = () => {
	store.dispatch((dispatch) => {
		// dispatch({ type: 'LOADING_STATUS', payload: true })
		dispatch({ type: 'INCREMENT' })
		axios.post(`/search/${store.getState().query}/${store.getState().counter}`)
			.then(res => dispatch({ type: 'SEND_RESULTS', payload: res.data }))
		// .then(() => dispatch({ type: 'LOADING_STATUS', payload: false }))
	})
}


export const outline = (site) => {
	store.dispatch((dispatch) => {
		dispatch({ type: 'OUTLINE_LOADING' })
		axios.post(`/search/outline/${site}`)
			.then(res => dispatch({ type: 'OUTLINE', payload: res.data }))
	})
}
