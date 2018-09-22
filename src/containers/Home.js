import React from 'react';
import { connect } from 'react-redux';
import { SearchBox } from '../components/SearchBox';
import { Loader } from '../components/Loader';
import { ResultsList } from '../components/ResultsList';

export const Home = ({results, loadingStatus, outline, query, counter}) => {
  if(loadingStatus === true && results.length <= 0){
    return <Loader />
  }
  if(results.length > 0){
    return <ResultsList results={results} outline={outline} query={query} counter={counter}/>
  }
  return <SearchBox results={results} />
}


const mapStateToProps = (state) => {
  return{
    results: state.results,
    loadingStatus: state.loadingStatus,
    outline: state.outline,
    query: state.query,
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Home)
