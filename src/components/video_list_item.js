import React from 'react';

const VideoListItem = ({video,onVideoSelect}) =>{
    const imageurl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    return(
        <li onClick={()=> onVideoSelect(video)} className="list-group-item" style={{cursor:'pointer'}}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageurl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;