import { store } from '../reducers/index';
import axios from 'axios';

export const setQuery = e => {
	store.dispatch({ type: 'SET_QUERY', payload: encodeURI(e.target.value) });
};

export const handleKey = (e, reset) => {
	if (e.key === 'Enter') {
		if (reset) {
			store.dispatch({ type: 'RESET_RESULTS' });
		}
		search();
	}
};

export const search = reset => {
	store.dispatch(dispatch => {
		if (reset) {
			dispatch({ type: 'RESET_RESULTS' });
		}
		dispatch({ type: 'LOADING_STATUS', payload: true });
		axios
			.post(`/search/${store.getState().query}`)
			.then(res => dispatch({ type: 'SEND_RESULTS', payload: res.data }))
			.then(() => {
				dispatch({ type: 'LOADING_STATUS', payload: false });
				screenGrab();
			});
	});
};

const screenGrab = () => {
	const arr = [];
	const results = store.getState().results;
	for (let i = 0; i < results.length; i++) {
		if (!!results[i].image === false) {
			arr.push(results[i].link);
		}
	}
	screenshot(arr);
};

const screenshot = links => {
	const len = links.length;
	for (let i = 0; i < len; i++) {
		const link = links[i];
		const formattedLink = encodeURIComponent(link);
		axios
			.get(`https://www.googleapis.com/pagespeedonline/v1/runPagespeed?screenshot=true&url=${formattedLink}`)
			.then(res => {
				let rawData = res.data.screenshot;
				let imgData = rawData.data.replace(/_/g, '/').replace(/-/g, '+');
				const screenshot = 'data:' + rawData.mime_type + ';base64,' + imgData;
				store.dispatch({ type: 'SEND_SCREENSHOTS', payload: { link: link, screenshot: screenshot } });
			});
	}
};

export const changePage = () => {
	store.dispatch(dispatch => {
		dispatch({ type: 'INCREMENT' });
		axios.post(`/search/${store.getState().query}/${store.getState().counter}`).then(res => {
			dispatch({ type: 'SEND_RESULTS', payload: res.data });
			screenGrab();
		});
	});
};

export const outline = site => {
	store.dispatch(dispatch => {
		dispatch({ type: 'OUTLINE_LOADING' });
		axios.post(`/outline/${site}`).then(res => dispatch({ type: 'OUTLINE', payload: res.data }));
	});
};
