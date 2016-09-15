var searchYouTube = (callback) => {

  var options = {
    key: 'AIzaSyAzGu37lhNLdAnasxUx-N-1qUQMbzCz0MA',
    part: 'snippet',
    q: $('.form-control').val(),
    maxResults: 5,
    type: 'video',
    videoEmbeddable: 'true'
  };

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    success: callback,
    error: function() { console.log('error'); }
  });
};


//Below is an alternate example unsing .get(); 
/*
var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};
*/

window.searchYouTube = searchYouTube;
