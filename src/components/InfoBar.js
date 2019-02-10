import React, { Component } from 'react'
import InfoBarNote from './InfoBarNote'


class InfoBar extends Component {


    /**
     * When the properties of element changes 
     *  => the elemnet is re evaluated at ReatDOM and the delta is updated on the actual DOM
     *  
     */

    componentWillMount = () => {
        setTimeout(() => {
            //props are read only
            //this.props.message = 'Modified by child component'

            //above is wrong => can not modify the props of a component/element 

            //If we need to chaneg the props(means which are given by parent component )
            //=> Should call a call back provided by the parent component

            //(Reacct does support only unidirectional data flow. This is why React is so awsome))




            this.props.onChangeFun('update call back is called by child component123') //this change the state of parent component
        }, 10000);
    }



    render() {

        return <div>
            <p> {"MM" + JSON.stringify(this.props)}</p>

            <p> {this.props.message} and foorter is </p> <InfoBarNote note={this.props.note} />
        </div>

    }

}

export default InfoBar