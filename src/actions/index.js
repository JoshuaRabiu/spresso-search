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
					screenGrab()
				})
		}
	})
}

const screenGrab = () => {
	const arr = []
	for (let i = 0; i < store.getState().results.length; i++) {
		if (!!store.getState().results[i].image === false) {
			arr.push(store.getState().results[i].link)
		}
	}
	screenshot(arr)
}

const screenshot = (param) => {
	const len = param.length;
	for (let i = 0; i < len; i++) {
		console.log('running')
		const link = param[i];
		const enc = encodeURIComponent(link);
		axios.get(`https://www.googleapis.com/pagespeedonline/v1/runPagespeed?screenshot=true&url=${enc}`)
			.then(res => {
				let sc = res.data.screenshot;
				let imgData = sc.data.replace(/_/g, '/').replace(/-/g, '+');
				const scr = 'data:' + sc.mime_type + ';base64,' + imgData;
				store.dispatch({type: 'SEND_SCREENSHOTS', payload: {link: link, screenshot: scr} })
			})
	}
}

export const changePage = () => {
	store.dispatch((dispatch) => {
		dispatch({ type: 'INCREMENT' })
		axios.post(`/search/${store.getState().query}/${store.getState().counter}`)
			.then(res => {
				dispatch({ type: 'SEND_RESULTS', payload: res.data })
				screenGrab()
			})
	})
}


export const outline = (site) => {
	store.dispatch((dispatch) => {
		dispatch({ type: 'OUTLINE_LOADING' })
		axios.post(`/search/outline/${site}`)
			.then(res => dispatch({ type: 'OUTLINE', payload: res.data }))
	})
}
