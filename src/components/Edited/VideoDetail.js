import React, {Component} from 'react';

export default class VideoDetail extends Component{

    render(){
        
        const url = `https://www.youtube.com/embed/${this.props.video}`;

        return(
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} style={{width:'100%',height:'450px'}}>
                </iframe>
            </div>
        )
    }
}