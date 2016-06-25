// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={exampleVideoData[0]} />
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={exampleVideoData} />
//     </div>
//   </div>
// );

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// window.App = App;

class App extends React.Component {
  constructor(props) {
    super(props);
    //this.videos = exampleVideoData;
    this.state = { 
      current: exampleVideoData[0],
      videos: exampleVideoData
    }; 
  }

  hasBeenClicked(video) {
    this.setState({
      current: video
    });
    console.log(video.items[0]);
  }

  getVideos(video) {
    this.setState({
      current: video.items[0],
      videos: video.items
    });
    console.log(this.videos);
  }

  search() {
    searchYouTube(this.getVideos.bind(this));

  }

  render() {
    return (
      <div>
      <Nav btnSearch={this.search.bind(this)} />
       <div className="col-md-7">
         <VideoPlayer video={this.state.current} />
       </div>
       <div className="col-md-5">
         <VideoList ent={this.hasBeenClicked.bind(this)} videos={this.state.videos} />
       </div>
     </div>
    );

  }
}