import * as React from 'react';
import { connect } from 'react-redux';
import { SearchBox } from '../components/SearchBox';
import { ResultsView } from '../components/ResultsView';

export interface IHomeProps {
  results?: any[];
  loadingStatus?: boolean;
  outline?: any;
  query: string;
  counter?: number;
  screenshots?: any;
}

export const Home: React.StatelessComponent<IHomeProps> = ({
  results,
  loadingStatus,
  outline,
  query,
  screenshots
}: IHomeProps) => {
  if (loadingStatus === true) {
    return <ResultsView query={query} loadingStatus={loadingStatus} outline={outline} />;
  } else if (loadingStatus === false && !!results) {
    return (
      <ResultsView
        results={results}
        outline={outline}
        screenshots={screenshots}
        query={query}
        loadingStatus={loadingStatus}
      />
    );
  }
  return <SearchBox />;
};

const mapStateToProps = (state: IHomeProps): IHomeProps => {
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
