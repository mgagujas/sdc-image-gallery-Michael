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
      showList: true
    }
  }

  projectUpTop(e) {
    e.preventDefault();
    this.setState({clickIndex: Number(e.target.id)});
  }

  showOrHideList(e) {
    e.preventDefault();
    this.setState({showList: !this.state.showList});
  }

  handleMouseHover(e) {
    e.preventDefault();
    this.setState({showList: true});
  }

  previous() {
    let {clickIndex, length} = this.state;
    if (clickIndex !== 0) {
      let newIndex = clickIndex - 1;
      this.setState({clickIndex: newIndex});
    } else {
      this.setState({clickIndex: length});
    }
  }

  forward() {
    let {clickIndex, length} = this.state;
    if (clickIndex !== length) {
      let newIndex = clickIndex + 1;
      this.setState({clickIndex: newIndex});
    } else {
      this.setState({clickIndex: 0});
    }
  }

  render() {
    let {clickIndex, photos, toggleGallery, length, showList} = this.state;

    return (
        <div className="modal">
          <div className="modal-content">
            <span className="closeBtn" onClick={toggleGallery}>&times;</span>
            <div className="mainDisplay">
              <h1 className="Btn" id="back" onClick={this.previous.bind(this)} value="back">{`<`}</h1>
              <img id="leadImage" src={photos[clickIndex].url}/>
              <h1 className="Btn" id="forward" onClick={this.forward.bind(this)} value="forward">{`>`}</h1>
            </div>
            <div className="description" >
              <p className="caption">{`${clickIndex+1}/${length+1} ${photos[clickIndex].caption}`}</p>
              <p className="showList" onClick={this.showOrHideList.bind(this)} >{showList ? "Hide photo list" : "Show photo list"}</p>
            </div>
            <div className="photo-carousel">
              {showList && photos.map((photo, index) => <PhotoCarousel photo={photo} key={index} index={index} projectUpTop={this.projectUpTop.bind(this)} clickIndex={this.state.clickIndex}/>)}
            </div>
          </div>
        </div>
    )
  }
}

export default PhotoGallery;
