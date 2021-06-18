import './Folder.css';
import Photo from './Photo.js'
import React from 'react';

class Folder extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          img: false,
      }
  }

  buttonForImage = () => {
      this.setState({
          img: !this.state.img,
      })
  }



  render(){
      return(
        <a onClick={() => this.buttonForImage()}>
          <div className="closing_folder">
            <div className="box"></div>
            <div className="convex"></div>
            <div className="urabox"></div>
            <Photo img={this.state.img} className="Photo"/>
          </div>
        </a>
      )
  }
}

export default Folder;