// var VideoListEntry = ({video, ent}) => (
//   <div className="video-list-entry">
//     <div className="media-left media-middle">
//       <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
//     </div>
//     <div className="media-body">
//       <div onClick={() => ent(video)} className="video-list-entry-title">{video.snippet.title}</div>
//       <div className="video-list-entry-detail">{video.snippet.description}</div>
//     </div>
//   </div>
// );

//Version above for comparrison only. Do not uncomment! 

var VideoListEntry = (props) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div onClick={() => props.ent(props.video)} className="video-list-entry-title">{props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
