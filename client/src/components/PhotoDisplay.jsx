import React from 'react';

const PhotoDisplay = (props) => {
let showGallery = props.showGallery; //boolean - default: false

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