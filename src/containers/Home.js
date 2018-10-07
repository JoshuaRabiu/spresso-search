import React from 'react';
import { connect } from 'react-redux';
import { SearchBox } from '../components/SearchBox';
import { ResultsView } from '../components/ResultsView';

export const Home = ({ results, loadingStatus, outline, query, screenshots }) => {
	if (loadingStatus === true) {
		return <ResultsView query={query} loadingStatus={loadingStatus} />
	}
	if (results.length > 0) {
		return <ResultsView results={results} outline={outline} screenshots={screenshots} query={query} loadingStatus={loadingStatus} />;
	}
	return <SearchBox />;
};

const mapStateToProps = (state) => {
	return {
		results: state.results,
		loadingStatus: state.loadingStatus,
		outline: state.outline,
		query: state.query,
		counter: state.counter,
		screenshots: state.screenshots
	};
};

export default connect(mapStateToProps)(Home);
