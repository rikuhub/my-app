import './Button.css';
import React from 'react';
import Pages from './Pages.js';
import './Pages.css';

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pages: false,
            code: '＋'
        }
    }

    buttonForPages = () => {
        this.setState({
            pages: !this.state.pages,
        })
        this.state.pages?
        this.setState({
            code: "＋"
        }):
        this.setState({
            code: "ー"
        })
    }

    render(){
        return(
            <div className="Button">
                <button onClick={() => this.buttonForPages()}>{this.state.code}</button>
                <Pages pages={this.state.pages} className="Pages"/>
            </div>
        )
    }
}

export default Button;