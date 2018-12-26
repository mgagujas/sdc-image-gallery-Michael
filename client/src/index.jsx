import React from 'react';
import ReactDOM from 'react-dom';
import PhotoDisplay from './components/PhotoDisplay.jsx';
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
        showGallery: false // will toggle modal visibility
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

  render() {
    let photos = this.showGallery ? this.state.photos : this.state.photos.slice(0,5);

    return (
      <div className="photoGallery">
          <div id="col-1">
            <PhotoDisplay photo={photos[0].url} index={0} showGallery={this.state.showGallery}/>
          </div>
          <div id="col-2">
            <PhotoDisplay photo={photos[1].url} index={1} showGallery={this.state.showGallery}/>
            <PhotoDisplay photo={photos[2].url} index={2} showGallery={this.state.showGallery}/>
          </div>
          <div id="col-3">
            <PhotoDisplay photo={photos[3].url} index={3} showGallery={this.state.showGallery}/>
            <PhotoDisplay photo={photos[4].url} index={4} showGallery={this.state.showGallery}/>
          </div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));