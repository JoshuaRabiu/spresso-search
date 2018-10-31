import * as React from 'react';
import { ResultsList } from './ResultsList';
import { Link } from 'react-router-dom';
import { Outline } from './Outline';
import { handleKey, search, setQuery } from '../actions';
import '../style/ResultsView.css';
import glass from '../images/glass.svg';
import { Loader } from './Loader';

export const ResultsView: React.StatelessComponent<any> = ({ results, outline, screenshots, query, loadingStatus }: any): JSX.Element => {
  const mobile: string[] = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry'];
  return (
    <div>
      <div className="top-bar">
        <Link to="/" target="_self">
          <h3 className="heading-1">Spresso</h3>
          <h3 className="heading-2">Search</h3>
        </Link>
        <input
          defaultValue={decodeURI(query)}
          onKeyPress={e => handleKey(e, 'reset')}
          onChange={e => setQuery(e)}
        />
        <img onClick={() => search('reset')} className="glass" alt="magnifying glass" src={glass} />
        <Link to="/about" className="about-bar">
          About
        </Link>
      </div>
      <Outline outline={outline} />
      {loadingStatus === true
         ? <div className={mobile.includes(navigator.platform) ? "" : "load-wrap"}><Loader /></div>
         : <ResultsList results={results} screenshots={screenshots} />
      }
    </div>
  );
};
