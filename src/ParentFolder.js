import './Folder.css';
import Photo from './Photo.js'
import React from 'react';
import ChildFolder from './ChildFolder';

class ParentFolder extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          img: false,
          folder: false,
      }
  }

  buttonForImage = () => {
      this.setState({
          img: !this.state.img,
          folder: !this.state.folder,
      })
  }



  render(){
      return(
        <div>
          <div className="children_folders">
            <ChildFolder folder={this.state.folder}/>
            <ChildFolder folder={this.state.folder}/>
            <ChildFolder folder={this.state.folder}/>
          </div>
          <div className="closing_folder">
          <a onClick={() => this.buttonForImage()}>
              <div className="box"></div>
              <div className="convex"></div>
              <div className="urabox"></div>
          </a>
          <Photo img={this.state.img} className="Photo"/>
        </div>
        </div>
      )
  }
}

export default ParentFolder;