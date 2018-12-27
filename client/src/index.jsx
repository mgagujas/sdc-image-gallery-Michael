import React from 'react';
import ReactDOM from 'react-dom';
import PhotoDisplay from './components/PhotoDisplay.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import PhotoCarousel from './components/PhotoCarousel.jsx';
import styles from '../dist/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        photos: [ // blurred out photo placeholders till fetch completes
          {url:'https://i1.wp.com/angularscript.com/wp-content/uploads/2018/06/Progressively-Loading-Images-With-Blur-Effect-min.png?w=800&ssl=1.jpg'},
          {url:'https://i1.wp.com/angularscript.com/wp-content/uploads/2018/06/Progressively-Loading-Images-With-Blur-Effect-min.png?w=800&ssl=1.jpg'},
          {url:'https://i1.wp.com/angularscript.com/wp-content/uploads/2018/06/Progressively-Loading-Images-With-Blur-Effect-min.png?w=800&ssl=1.jpg'},
          {url:'https://i1.wp.com/angularscript.com/wp-content/uploads/2018/06/Progressively-Loading-Images-With-Blur-Effect-min.png?w=800&ssl=1.jpg'},
          {url:'https://i1.wp.com/angularscript.com/wp-content/uploads/2018/06/Progressively-Loading-Images-With-Blur-Effect-min.png?w=800&ssl=1.jpg'}
        ], 
        id: null,
        showGallery: false, // will toggle modal visibility
        clickIndex: null
      }
  }

  componentDidMount() {
    let url = window.location.href.split('/');
    this.state.id = url[url.indexOf('rooms')] === undefined ? 0 : url[url.indexOf('rooms') + 1];
    this.fetchPhotos();
  }

  fetchPhotos() {
    fetch(`/rooms/${this.state.id}/photos`)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        this.setState({photos: body.photo});
      })
  }

  toggleGallery(e) {
    e.preventDefault();
    let id = e.target.id
    if (id !== null) {
      let index = Number(id.substring(id.length - 1));
      this.setState({clickIndex: index})
    }
    this.setState({showGallery: !this.state.showGallery});
    //needs to pop up modals
  }

  render() {
    let photos = this.state.photos;
    let showGallery = this.state.showGallery;

    return (
      <div>
        <div className="photoDisplay">
            <div id="col-1">
              <PhotoDisplay photo={photos[0].url} index={0} showGallery={this.state.showGallery} toggleGallery={this.toggleGallery.bind(this)}/>
            </div>
            <div id="col-2">
              <PhotoDisplay photo={photos[1].url} index={1} showGallery={this.state.showGallery} toggleGallery={this.toggleGallery.bind(this)}/>
              <PhotoDisplay photo={photos[2].url} index={2} showGallery={this.state.showGallery} toggleGallery={this.toggleGallery.bind(this)}/>
            </div>
            <div id="col-3">
              <PhotoDisplay photo={photos[3].url} index={3} showGallery={this.state.showGallery} toggleGallery={this.toggleGallery.bind(this)}/>
              <PhotoDisplay photo={photos[4].url} index={4} showGallery={this.state.showGallery} toggleGallery={this.toggleGallery.bind(this)}/>
            </div>
        </div>
        <div className="photoGallery">
          {showGallery && (<PhotoGallery photos={photos} toggleGallery={this.toggleGallery.bind(this)} clickIndex={this.state.clickIndex} showGallery={this.state.showGallery}/>)}
        </div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));