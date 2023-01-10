import React, { Component } from 'react'
import CardVote from './CardVote'
import CardVotePureComponent from './CardVotePureComponent'
import ChidComponent from './ChidComponent'
import Footer from './Footer'

export default class ParentComponent extends Component {

    /*
    Mounting: chạy khi load ứng dụng
    Updating : chạy khi props hoặc state thay đổi => render lại UI
    => props thay đổi : khi làm thay đổi data của reducer => mapStateToProps => props thay đổi
                    : khi state của component cha thay dổi và có truyền state xuống props của con
    => state thay đổi: khi gọi setState

    Unmounting:
    */



    //!phương thức khởi tạo (mouting)
    constructor(props) {
        super(props)
        this.state = {
            number: 0,
            vote: 0
        }
        console.log("constructor Parent")
    }
    //!chạy trước render (mouting, updating)
    static getDerivedStateFromProps(newProps, currentState) {
        //khi chạy upding thì có thể quy định state được update hay không
        console.log("getDerivedStateFromProps Parent")
        return null;
    }

    //!chạy trước render (updating)
    shouldComponentUpdate(newProps, newState) {
        //!quy định được render lại UI hay không
        //return true => được render lại
        //false => không dược render lại
        console.log("shouldComponentUpdate Parent")
        return true
    }

    renderChild = () => {

        if (this.state.number < 2) {
            return <ChidComponent number={this.state.number} />
        }else{
            return "";
        }


    }




    render() {
        console.log("render Parent")
        return (
            <div className='container py-5'>
                <p>Parent</p>
                <div className='py-5'>
                    <span className='mx-3'>{this.state.number}</span>
                    <button onClick={() => {
                        this.setState({
                            number: this.state.number + 1
                        })
                    }} className='btn btn-danger'>+</button>


                </div>

                {this.renderChild()}

                <p>Vote</p>
                <button onClick={() => {
                    this.setState({
                        vote: this.state.vote + 1
                    })
                }} className='btn btn-danger'>Vote</button>
                <CardVote vote={this.state.vote} />
                
                <CardVotePureComponent vote={this.state.vote}/>


                <Footer />
            </div>
        )
    }

    //!chạy sau render, sau khi UI đã load lên (mounting)
    //prevProps (props ban đầu), prevState (state ban đầu)
    componentDidMount(prevProps, prevState) {
        //các thư viện phụ => có UI thì mới gắn hiệu ứng
        //gọi các hàm của thư viện để gắn hiệu ứng

        console.log("componentDidMount Parent")
    }

    //!chạy sau render, sau khi UI đã load lên (updating)
    componentDidUpdate(prevProps, prevState) {
        //các thư viện phụ => có UI thì mới gắn hiệu ứng
        //gọi các hàm của thư viện để gắn hiệu ứng

        console.log("componentDidUpdate Parent")
    }



}
