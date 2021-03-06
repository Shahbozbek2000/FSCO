import React, { Component } from "react";
import videoStyles from "../styles/Video.module.css";
import Typical from "react-typical";

export class BackgroundVideo extends Component {
  constructor(props){
    super(props) 
    this.state = {
      videoURL: '/video/Drink-Wine.mp4'
    }
  }
  render() {
  
    const {videoURL} = this.state
  
  return (
    <div>
      <div className={videoStyles.wrap}></div>
      <div className={videoStyles.video_wrapper}>
        <div className={videoStyles.video_wrapper_Image}>
        <video className={videoStyles.video_panel} autoPlay loop muted>
           <source src={videoURL} type='video/mp4' />
        </video>
          <div className={videoStyles.video_wrapper_title}>
            <h1>
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "Innovation and leading software product development in our DNA.",
                  3500,
                ]}
              />
            </h1>
          </div>

          <div className={videoStyles.video_wrapper_button}>
            <button>Explore now</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
};
