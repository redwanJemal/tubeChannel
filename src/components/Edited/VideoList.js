import React from 'react';
import VideoListItem from './VideoItem';

const VideoList = (props) => {
    const videos = props.videos;
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
        <ul className="col-md-4 list-group">
            { videoItems }
        </ul>
    );
}

export default VideoList;