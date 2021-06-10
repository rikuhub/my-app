import logo from './logo.svg';
import './App.css';

function Button() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        window.location.href = 'https://github.com';
    }

    return (
        <div className="Button">
            <a onClick={handleClick}>
                about me
            </a>
        </div>
    );
}

export default Button;