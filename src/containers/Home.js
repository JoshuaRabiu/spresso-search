import React from 'react';
import { connect } from 'react-redux';
import { SearchBox } from '../components/SearchBox';

export const Home = ({results}) => {
  return <SearchBox results={results} />
}


const mapStateToProps = (state) => {
  return{
  	results: state.results
  }
}

export default connect(mapStateToProps)(Home)
