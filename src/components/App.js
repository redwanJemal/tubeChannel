import React, {Component} from 'react';
//import SearchBar from './SearchBar';
import {Advertisement, Responsive, Sticky } from 'semantic-ui-react';

import { BrowserRouter} from 'react-router-dom';
import _ from 'lodash';

import YTSearch from '../Youtubeapi/searchapi';

import SearchBar from './searchBar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import VideoComment from './videoComments';

const API_KEY = "AIzaSyCqDhBN-4PQlL2Jha1BlBcp-eebx8PaRbU";//Youtube Api Key

class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null,
            contextRef:'',
            searchRef:'',
            channelId:'UCOhrz3uRCOHmK6ueUstw7_Q'
         };
         this.VideoSearch('');

    }

    VideoSearch(term){
        YTSearch({key: API_KEY,term: term,channelId:this.state.channelId},(videos) =>{
        this.setState({ 
            videos: videos,
            selectedVideo: videos[0]
         });
    });
    }

    VideoChannel(channelId){
        YTSearch({key: API_KEY,term:'',channelId:channelId},(videos) =>{
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0],
                channelId: channelId
             });
        });
    }
    handleContextRef = contextRef => this.setState({ contextRef });
    

    render(){
        const Search = _.debounce((term) => {this.VideoSearch(term)},300);
        const { contextRef } = this.state;
        //{(term)=>{this.VideoSearch(term)}}
        return(
            <div>
                <BrowserRouter>
                <div>
                <SearchBar onSearchTermChanged = {Search} OnChannelChanged={(channel)=>{this.VideoChannel(channel);}} />
                <div style={{marginTop:'20px'}}>
                <Responsive minWidth={768} >
                </Responsive>
                    <div>
                <div className='row'>
                     <div className="video-detail col-md-7" >
                            <div className='col-md-4'>
                                <div className='row'>
                                    <div className='col-md-3'></div>
                                    <div className='col-md-7'>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-8' >
                                <div className='row'>
                                    <VideoDetail  video={this.state.selectedVideo} />
                                </div>
                                <div className='row' >
                                    <VideoComment Video={this.state.selectedVideo} />
                                </div>
                            </div>
                    </div>
                     <div className='col-md-3 list-group'>
                        <VideoList 
                            videos={this.state.videos} 
                            onVideoSelect = { selectedVideo => this.setState({selectedVideo})}
                        />
                     </div>
                </div>
                </div>
                </div>
                </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;