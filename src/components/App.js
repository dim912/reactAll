import React, { Component } from 'react'
import Login from './Login'
import InfoBar from './InfoBar'

class App extends Component { //at <Apps /> in JSX a new elemnet of App is created(compnent equals to what is described in render method)


    /***
     * Components can be created either by a constructor function or a class(which extends Component super class)
     * 
     */

    //    constructor(props) {
    //        super(props)
    //this.udpateHeaderMessage = this.udpateHeaderMessage.bind(this)
    //    }

    componentWillMount = () => {
        this.setState({ headerMessage: 'initial header message' })

        setTimeout(() => {
            this.setState({ headerMessage: 'updated header message' })

        }, 5000);
    }

    udpateHeaderMessage = (newMessage) => {
        this.setState({ headerMessage: newMessage })
    }

    render() {
        return <div>
            <p>{this.state.headerMessage}</p>
            <InfoBar message={this.state.headerMessage} note='test note' onChangeFun={this.udpateHeaderMessage} />
            <Login />
        </div>
    }
}
export default App
