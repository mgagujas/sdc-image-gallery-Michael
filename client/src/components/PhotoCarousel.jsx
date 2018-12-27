import React from 'react';

const PhotoCarousel = ({photo, index}) => {
  let {url} = photo;
  
  return (
    <div className="photoBucket">
       <img className="photoEntry" id={index} src={url} />
    </div>
  )
}

export default PhotoCarousel;