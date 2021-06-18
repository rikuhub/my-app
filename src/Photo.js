import './Folder.css'
import React from 'react';
import me from './ローランド.jpg';

const Photo = (props) => {
    return (
        <div>
            {props.img?(
                <div>
                <div className="closing_folder">
                    <div className="box"></div>
                    <div className="convex"></div>
                    <div className="urabox"></div>
                    <img src={me} className="frontimg"></img>
                </div>
                </div>
            ):(
                <div className="closing_folder">
                    <div className="box"></div>
                    <div className="convex"></div>
                    <div className="urabox"></div>
                    <img src={me} className="backimg"></img>
                </div>
            )}
        </div>
    );
}

export default Photo;