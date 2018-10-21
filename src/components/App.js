import React, { Component } from 'react'
import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css'
import Button from 'antd/lib/Button';
import 'antd/lib/Button/style/css'

class App extends Component {

    render() {
        return <div>
            <DatePicker />  <br />
            <Button > Test Button</Button>
            <h1>My React App- wowx</h1>
        </div >
    }

}

export default App
