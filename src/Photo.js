import './Folder.css'
import React from 'react';
import me from './ローランド.jpg';

const Photo = (props) => {
    return (
        <div>
            {props.img?(
            <img src={me} className="frontimg"></img>
            ):(
            <img src={me} className="backimg"></img>   
            )}
        </div>
    );
}

export default Photo;