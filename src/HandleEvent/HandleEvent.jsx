// rcc
import React, { Component } from 'react'

export default class HandleEvent extends Component {


    showInfo = () => {
        alert("Hello Cybersoft");
    }

    showName = (name) => {
        // ${name}: truyền biến vào chuỗi string
        alert(`Hello ${name}`);
    }



    render() {
        return (
            <div className='container'>
                <button onClick={this.showInfo} className='btn btn-primary'>Show Info</button>
                <button onClick={(event) => { 
                    // console.log(event.target);
                    this.showName("Cybersoft");
                 }} className='btn btn-primary'>Show Name</button>
            </div>
        )
    }
}

// document.getElementById("idButton").onclick = showInfo;
// document.getElementById("idButton").onclick = function(){
//     showName("Cybersoft")
// } ;