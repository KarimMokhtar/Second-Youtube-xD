import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyDl_ATMZ4n_l94OJD_PWgyzT40O_sVVGbw';
const App = () => {
    return (
        <div>
            <SearchBar />

        </div>
    );
}
ReactDOM.render(<App />, document.querySelector(".container"));