import React, { Component } from 'react';
import { CtxConsumer } from 'react-router-dom';

class Footer extends Component{

    state = {
        name: 'Fritz'
    }

    componentDidMount(){
        this.setState({name: 'MyName'})
    }

    createAlert(){
        alert('hello, you clicked me')

    }

    changed(){
        console.log('changed')
    }

    render() {
        return (
            <div>
                <h2 onClick={this.createAlert}>
                    {this.props.trademark}
                </h2>
                <input value={this.state.name}
                    onChange={this.changed} type="text"></input>
            </div> 
        )
        

    
        return (
            <CtxConsumer>
                {(context) => {
                    <div>
                        { context.animals.map( animal => {
                            return (
                                <div key={animal}>
                                    <h1>{animal}</h1>
                                </div>
                            );
                        }) }
                    </div>
                }}
            </CtxConsumer> 
        )
    }
}

export default Footer;