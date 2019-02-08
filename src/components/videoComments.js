import React, {Component} from 'react';
import Comments from '../Youtubeapi/commentapi';
import CommentItem from './singleComment';

const API_KEY = "AIzaSyCqDhBN-4PQlL2Jha1BlBcp-eebx8PaRbU";//Youtube Api Key

class VideoComment extends Component{

    state = {
        videocomments: []
    };

    VideoComment(etag){
        Comments({key: API_KEY,etag:etag},(Comment) =>{
        this.setState({
            videocomments: Comment
        })
    });
    }
    

    render(){
            const Video = this.props.Video;

            if(!this.props.Video){
                return <div>Loading</div>
            }
            
            const id = Video.id;
            const comments = this.state.videocomments;
            const videocommentslist = comments.map((comment) => 
                    {
                        return(
                                <CommentItem comment={comment}
                                key={comment.etag} />
                        )
                    }
            )
            this.VideoComment(id);
            return(
                <div style={{maxWidth:'70%',margin:'auto',}}>
                    {videocommentslist}
                </div>
            )
    }
}

export default VideoComment;