import React, { Component } from 'react'
import Login from './Login'

class App extends Component { //at <Apps /> in JSX a new elemnet of App is created(compnent equals to what is described in render method)


    /***
     * Components can be created either by a constructor function or a class(which extends Component super class)
     * 
     */
    render() {

        return <div>
            <Comp />
            <Login />
        </div>
    }
}
export default App
