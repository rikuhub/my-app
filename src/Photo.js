import './Folder.css'
import React from 'react';
import me from './ローランド.jpg';

const Photo = (props) => {
    return (
        <div>
            {props.img?(
                <div>
                    <img src={me} className="frontimg"></img>
                </div>
            ):(
                <div>
                    <img src={me} className="backimg"></img>
                </div>
            )}
        </div>
    );
}

export default Photo;