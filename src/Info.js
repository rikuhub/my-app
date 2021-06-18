import './Folder.css'
import React from 'react';

function Info(props) {

    console.log(props.info)

    return (
        <div>
            {props.info&&(
                <p>INFORMATION</p>
            )}
        </div>
    );
}

export default Info;