var axios = require('axios');

var URL = 'https://www.googleapis.com/youtube/v3/search';

module.exports = function (options, callback) {
  if (!options.key) {
    throw new Error('Youtube Search expected key, received undefined');
  }

  var params = {
    part: 'snippet',
    key: options.key,
    term:options.term,
    channelId:options.channelId,
    type: 'video'
  };

  axios.get(URL, { params: params })
    .then(function(response) {
      if (callback) { callback(response.data.items);}
    })
    .catch(function(error) {
      console.error(error);
    });
};
