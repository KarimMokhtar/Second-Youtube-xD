import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDtail from './components/video_detail';
const API_KEY = 'AIzaSyDl_ATMZ4n_l94OJD_PWgyzT40O_sVVGbw';


class App extends Component {
    constructor(props){
        super(props);
        
        this.state = { videos: [] };
        YTSearch({key:API_KEY,term:'surfboards'}, (result)=> {
            this.setState({videos:result});
        });
    }
    render(){
        return (
            <div>
                <SearchBar />
                <VideoDtail video = {this.state.videos[0]}/>
                <VideoList videos = {this.state.videos}/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector(".container"));