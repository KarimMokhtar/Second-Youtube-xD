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
        
        this.state = { 
            videos: [],
            selectedVideo : null    
        };
        
    }
    videoSearch(term){
        YTSearch({key:API_KEY,term: term}, (result)=> {
            this.setState({
                videos:result,
                selectedVideo : result[0]
            });
        });
    }
    render(){
        return (
            <div>
                <SearchBar onSearchTermChange = {term => this.videoSearch(term)}/>
                <VideoDtail video = {this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos = {this.state.videos}/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector(".container"));