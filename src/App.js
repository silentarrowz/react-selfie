import React from "react";
//import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(){
    super();
    this.handleVideo = this.handleVideo.bind(this);
    this.videoError = this.videoError.bind(this);
  }

handleVideo(streams){
  this.stream.src = window.URL.createObjectURL(streams);
}
videoError(){
  console.log('there was an error');
}

  componentDidMount(){
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    if (navigator.getUserMedia) {
      navigator.getUserMedia({video: true}, this.handleVideo, this.videoError);
    }

   
  }
  
  render(){
    
    return (
      <div>
        <p>React here!</p>
        <video type="video/mp4" ref={stream =>this.stream = stream} style={{width:'400px',height:'400px'}}  >
       </video>
        <div refs={hidden_canvas=>this.hidden_canvas = hidden_canvas} >show image here</div>
      
      </div>
    );
  }
};

export default App;

//ReactDOM.render(<App />, document.getElementById("app"));