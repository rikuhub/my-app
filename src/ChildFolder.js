import './Folder.css'
import React from 'react';

const ChildFolder = (props) =>{
      return(
          <div>
            {props.folder&&(
            <div className="child_folder">
                <div className="child_box"></div>
                <div className="child_convex"></div>
                <div className="child_urabox"></div>
          </div>
          )}
          </div>
      )
}

export default ChildFolder;