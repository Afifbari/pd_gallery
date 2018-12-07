import React, { Component } from 'react';
import Gallery from './Gallery'

//This part is for Decor
import i1 from './1.jpg'
import i2 from './2.jpg'
import i3 from './3.jpg'
import i4 from './4.jpg'
import i5 from './5.jpg'
import i6 from './6.jpg'
import i19 from './19.jpg'
import i20 from './20.jpg'
import i21 from './21.jpg'

//This part is for Music
import i7 from './7.jpg'
import i8 from './8.jpg'
import i9 from './9.jpg'
import i10 from './10.jpg'
import i11 from './11.jpg'
import i12 from './12.jpg'
import i22 from './22.jpg'
import i23 from './23.jpg'
import i24 from './24.jpg'

//This part is for Footbal
import i13 from './13.jpg'
import i14 from './14.jpg'
import i15 from './15.jpg'
import i16 from './16.jpg'
import i17 from './17.jpg'
import i18 from './18.jpg'
import i25 from './25.jpg'
import i26 from './26.jpg'
import i27 from './27.jpg'

class App extends Component {
  state = {
    images: [
      {id: 1, link: i1},
      {id: 2, link: i2},
      {id: 3, link: i3},
      {id: 4, link: i4},
      {id: 5, link: i5},
      {id: 6, link: i6},
      {id: 19, link: i19},
      {id: 20, link: i20},
      {id: 21, link: i21}
    ]
  }

  handleDecor = () => {
    let images = [
      {id: 1, link: i1},
      {id: 2, link: i2},
      {id: 3, link: i3},
      {id: 4, link: i4},
      {id: 5, link: i5},
      {id: 6, link: i6},
      {id: 19, link: i19},
      {id: 20, link: i20},
      {id: 21, link: i21}
    ]

    this.setState({
      images
    })
  }

  handleMusic = () => {
    let images = [
      {id: 7, link: i7},
      {id: 8, link: i8},
      {id: 9, link: i9},
      {id: 10, link: i10},
      {id: 11, link: i11},
      {id: 12, link: i12},
      {id: 22, link: i22},
      {id: 23, link: i23},
      {id: 24, link: i24}
    ]

    this.setState({
      images
    })
  }

  handleFootball = () => {
    let images = [
      {id: 13, link: i13},
      {id: 14, link: i14},
      {id: 15, link: i15},
      {id: 16, link: i16},
      {id: 17, link: i17},
      {id: 18, link: i18},
      {id: 25, link: i25},
      {id: 26, link: i26},
      {id: 27, link: i27}
    ]

    this.setState({
      images
    })
  }

  render() {
    return (
      <div className="gallery-app container">
        <h1 className="center">Poster's Den Gallery</h1>
        <div className="row center">
            <div className="col s4">
              <button className='waves-effect waves-light btn-large' onClick={this.handleDecor}>Decor</button>
            </div>
            <div className="col s4">
              <button className='waves-effect waves-light btn-large' onClick={this.handleMusic}>Music</button>
            </div>
            <div className="col s4">
              <button className='waves-effect waves-light btn-large' onClick={this.handleFootball}>Football</button>
            </div>
        </div>
        <Gallery images={this.state.images}/>
      </div>
    );
  }
}

export default App;
