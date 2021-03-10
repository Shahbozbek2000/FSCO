import React from "react";
import videoStyles from "../styles/Video.module.css";
import Typical from "react-typical";

const images = [
  { id: 1, image: "/images/T24.png", title: "T24" },
  { id: 2, image: "/images/TTELD.png", title: "TTELD" },
  { id: 3, image: "/images/TTfreigt.png", title: "TTfreight" },
  { id: 4, image: "/images/ORDERTRUCK.png", title: "ORDERTRUCK" },
];

export const BackgroundVideo = () => {
  return (
    <div>
      <div className={videoStyles.wrap}></div>
      <div className={videoStyles.video_wrapper}>
        <div className={videoStyles.video_wrapper_Image}>
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
};
