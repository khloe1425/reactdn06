import React, { Component } from 'react'

export default class ChidComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        console.log("constructor  Child")
        this.notifyStories = {}
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
        console.log("componentDidMount Child");

        //sau khi load xong ứng dụng chạy interval
        this.notifyStories = setInterval(() => { 
            console.log("Check stories")
         },1000)
    }

    componentDidUpdate(prevProps, prevState) {

        console.log("componentDidUpdate Child")
    }


    //sẽ được gọi ở thời điểm trước khi component bị xóa khỏi UI (unmounting)
    //Có 1 đoạn code chạy thông báo về storise (thông báo mỗi giây 1 lần) => khi mà component biến mất thì cần tắt thông báo
    componentWillUnmount(){
        console.log("componentWillUnmount");
        clearInterval(this.notifyStories)

    }

}
