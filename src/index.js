import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyDZ5-Dh4LIDugbzGG0QyfqGlMqUKu28msY';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};


ReactDOM.render(<App />, document.querySelector('.container'));
