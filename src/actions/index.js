import { store } from '../reducers/index';
import axios from 'axios';

export const search = (e) => {
	console.log(`Searching ${e.key}`)
	if(e.key === 'Enter'){
		axios.post(`/search/${e.target.value}`)
		.then(res => store.dispatch({type: 'SEND_RESULTS', payload: res.data}))
		.catch(error => console.error)
	}
}