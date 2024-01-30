import React from "react";
import ReactPlayer from "react-player/youtube";

import "./style.scss";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
    };
    return (
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                    <button className="closeBtn" onClick={hidePopup}>
                        Back
                    </button>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    controls
                    width="100%"
                    height="150%"
                    // playing={true}
                />
            </div>
        </div>
    );
};

export default VideoPopup;
