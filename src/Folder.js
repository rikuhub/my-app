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
            <Photo img={this.state.img} className="Photo"/>
          </a>
      )
  }
}

export default Folder;