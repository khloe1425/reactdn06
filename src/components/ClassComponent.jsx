// rcc
import React, { Component } from 'react'
import Card from './Card'

export default class ClassComponent extends Component {



    //render UI
    render() {

        return (
            <div className='container'>
                <div className="row">
                   <Card/>
                   <Card/>
                   <Card/>
                   <Card/>
                   <Card/>
                   <Card/>
                </div>
            </div>
        )
    }



}
