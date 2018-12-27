import React from 'react';
import PhotoCarousel from './PhotoCarousel.jsx';

class PhotoGallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clickIndex: this.props.clickIndex,
      photos: this.props.photos,
      toggleGallery: this.props.toggleGallery,
      length: this.props.photos.length - 1,
    }
  }

  projectUpTop(e) {
    e.preventDefault();
  }

  previous() {
    let {clickIndex, length} = this.state;
    if (clickIndex !== 0) {
      clickIndex--;
      this.setState({clickIndex: clickIndex});
    } else {
      this.setState({clickIndex: length});
    }
  }

  forward() {
    let {clickIndex, length} = this.state;
    if (clickIndex !== length) {
      clickIndex++;
      this.setState({clickIndex: clickIndex});
    } else {
      this.setState({clickIndex: 0});
    }
  }

  render() {
    let {clickIndex, photos, toggleGallery, length, showGallery} = this.state;

    return (
        <div className="modal">
          <div className="modal-content">
            <span className="closeBtn" onClick={toggleGallery}>&times;</span>
            <button className="Btn" id="back" onClick={this.previous.bind(this)} value="back">back</button>
            <button className="Btn" id="forward" onClick={this.forward.bind(this)} value="forward">forward</button>
            <img id="leadImage" src={photos[clickIndex].url}/>
            <p>{`${clickIndex+1}/${length+1} ${photos[clickIndex].caption}`}</p>

            <div className="photo-carousel">
              {photos.map((photo, index) => <PhotoCarousel photo={photo} key={index} index={index}/>)}
            </div>

          </div>
        </div>
    )
  }
}

export default PhotoGallery;
