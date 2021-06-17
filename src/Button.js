import './Button.css';
import React from 'react';
import Pages from './Pages.js';
import './Pages.css';

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pages: false,
        }
    }

    buttonForPages = () => {
        this.setState({
            pages: !this.state.pages
        })
        console.log("昨日してる")
    }

    render(){
        return(
            <div className="Button">
                <button onClick={() => this.buttonForPages()}>+</button>
                <Pages pages={this.state.pages}/>
            </div>
        )
    }
}
//<a onClick={(e) => handleClick(e)}>+</a>
// const Button = (props) =>  {
//     const [state, useState] = useState("")
//     let evaluation = false;
//     function handleClick(e) {
//         e.preventDefault();
//         console.log(evaluation);
//         evaluation = true
//     }
//     return (
//         <div className="Button">
//             <a onClick={(e) => handleClick(e)}>
//                 +
//             </a>
//             <Pages boolean={evaluation}/>
//         </div>
//     );
// }

export default Button;