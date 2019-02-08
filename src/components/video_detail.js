import React,{ Component } from 'react';
import { Placeholder } from 'semantic-ui-react';

     
class VideoDetail extends Component{

    

    render(){
        const video = this.props.video;
            if(!video){
                return(
                        <div className='col-md-8' >
                                <Placeholder style={{maxWidth:'100%',margin:'auto'}}>
                                    <Placeholder.Image  />
                                </Placeholder>
                        </div>
                )
            }
            const videoId = video.id.videoId;
            
            const url = `https://www.youtube.com/embed/${videoId}`;
            
            
        
            return(
                <div style={{maxWidth:'70%',margin:'auto',marginBottom:'20px'}}>
                    <div className="embed-responsive embed-responsive-16by9" >
                        <iframe className="embed-responsive-item" src={url}>
                        </iframe>
                    </div>
                    <div className="details">
                        <div>{video.snippet.title}</div>
                        <div>{video.snippet.description}</div>
                    </div>
                    </div>
                
            );
        }
}

export default VideoDetail;