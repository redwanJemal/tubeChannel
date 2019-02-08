import React from 'react';

import { Comment } from 'semantic-ui-react';

const CommentItem = (({comment}) => {
    const displayName = comment.snippet.topLevelComment.snippet.authorDisplayName;
    const ProfileImage = comment.snippet.topLevelComment.snippet.authorProfileImageUrl;
    const commentdisplay = comment.snippet.topLevelComment.snippet.textDisplay;
    const publishedAt = comment.snippet.topLevelComment.snippet.publishedAt;


    return(
        <div>
        <Comment.Group>
            <Comment>
            <Comment.Avatar src={ProfileImage} />
            <Comment.Content>
                <Comment.Author as='a'>{displayName}</Comment.Author>
                <Comment.Metadata>
                <div>{publishedAt}</div>
                </Comment.Metadata>
                <Comment.Text>{commentdisplay}</Comment.Text>
                <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
            </Comment>
            </Comment.Group>
        </div>
    )
})

export default CommentItem;