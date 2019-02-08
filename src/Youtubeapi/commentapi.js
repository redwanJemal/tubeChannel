var axios = require('axios');

var ROOT_URL = 'https://www.googleapis.com/youtube/v3/commentThreads';

const VideoComments = ( (options, callback) => {
  if (!options.key) {
    throw new Error('Youtube Comment Could not be displayed');
  }

  var params = {
    part: 'snippet',
    key: options.key,
    videoId: options.etag.videoId,
  };

  axios.get(ROOT_URL, { params: params })
    .then(function(response) {
      if (callback) { callback(response.data.items);}
    })
    .catch(function(error) {
      console.error(error);
    });
});

export default VideoComments;
/*
  var params = {
    part: 'snippet',
    key: options.key,
    q: options.term,
    order:'viewCount',
    pageToken: options.pageToken,
    channelId:options.channelId,
    type: 'video'
  };

*/
