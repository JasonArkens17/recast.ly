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

window.searchYouTube = searchYouTube;
