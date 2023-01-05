import React, { Component } from 'react'

export default class ChidComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        console.log("constructor  Child")
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log("getDerivedStateFromProps Child")
        return null;
    }

    shouldComponentUpdate(newProps,newState){
        console.log("shouldComponentUpdate Child")
        return true
    }

    render() {
        console.log("render Child")
        return (
            <div>
                <p>ChidComponent</p> 
                <p>{this.props.number}</p>
            </div>
        )
    }

    componentDidMount(prevProps, prevState){
        console.log("componentDidMount Child")
    }

    componentDidUpdate(prevProps, prevState) {

        console.log("componentDidUpdate Child")
    }
}
