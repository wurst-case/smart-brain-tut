import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imgUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputImg" src={imgUrl} alt="" width="500px" height="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.top,
            bottom: box.bottom,
            right: box.right,
            left: box.left
          }}
        />
      </div>
    </div>
  );
};

export default FaceRecognition;
