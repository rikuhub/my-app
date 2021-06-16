import './Button.css';

function Button() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        window.location.href = '';
    }

    return (
        <div className="Button">
            <a onClick={handleClick}>
                +
            </a>
        </div>
    );
}

export default Button;