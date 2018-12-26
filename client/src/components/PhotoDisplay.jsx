import React from 'react';
// import PhotoEntry from './PhotoEntry.jsx';

var PhotoDisplay = (props) => {
var showGallery = props.showGallery; //boolean - default: false

  return (
    <div className="photolayer">
      {showGallery ? 
        (
          <p>toggled true</p> // place holder for modal
        ):(
          <img className="photos" id={`image${props.index}`} src={props.photo} />
        ) 
      }
    </div>
  )
}

export default PhotoDisplay;
