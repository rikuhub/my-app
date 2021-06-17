import github from './GitHub.png';
import qiitan from './Qiita.png';
import myj from './Seminar.png';
import './Pages.css';
import React from 'react';

const Pages = (props) => {
    function GithubClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        window.location.href = 'https://github.com';
    }

    function SeminarClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        window.location.href = 'https://www.myjlab.org/';
    }

    function QiitaClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        window.location.href = 'https://qiita.com/geranium1216';
    }

    return (
        <div>
            {props.pages&&(
            <div className="Pages">
                <div className="Github">
                    <a onClick={GithubClick}>
                        <img src={github}></img>
                    </a>
                </div>
                <div className="Seminar">
                    <a onClick={SeminarClick}>
                        <img src={myj}></img>
                    </a>
                </div>
                <div className="Qiita">
                    <a onClick={QiitaClick}>
                        <img src={qiitan}></img>
                    </a>
                </div>
            </div>
            )}
        </div>
    );
}

export default Pages;