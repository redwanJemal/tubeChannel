import React, { Component } from 'react';
import { Grid,Container } from 'semantic-ui-react';
import VideoDetail from './VideoDetail';

export default class VideoPlayer extends Component{

    render(){
        return(
            <div style={{marginTop:'20px'}}>
                <Container>
                <Grid>
                <Grid.Column width={2}>

                </Grid.Column>
                <Grid.Column width={9}>
                    <VideoDetail video='cAK_WYwPjU0'/>
                </Grid.Column>
                <Grid.Column width={5}>

                </Grid.Column>
                </Grid>
                </Container>
            </div>
        )
    }
}