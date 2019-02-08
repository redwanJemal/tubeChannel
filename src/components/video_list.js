import React from 'react';
import VideoListItem from './video_list_item';
//import Footer from './footer';

const VideoList = (props) => {
    const videos = props.videos;
    //const previousPage = videos.prevPageToken;
    //const nextPage = videos.nextPageToken;
    const videoItems = videos.map((video) =>{
        return(
            <VideoListItem 
                onVideoSelect = {props.onVideoSelect}
                key={video.etag} 
                video={video} 
            />
        )
    })
    // building list with map
    return(
        <div>
        <ul >
            { videoItems }
            
            {/* <Footer /> */}
        </ul>
        
        </div>
    );
}

export default VideoList;