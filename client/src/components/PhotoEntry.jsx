import React from 'react';

var PhotoEntry = (props) => {
  props.photo === undefined ? true : false
  return (
    <div>
      <img id={`image${props.index}`} src={props.photo.url} />
    </div> 
  )
}
export default PhotoEntry;