import React, { Component } from 'react'

export default class TangGiamFont extends Component {

    // B1+2
    state = {
        fs: 40
    }

    render() {
        return (
            <div className='container'>
                {/* B3 */}
                <p style={{ fontSize: `${this.state.fs}px` }}>TangGiamFont</p>

                <button onClick={() => {
                    let newState = {
                        fs: this.state.fs + 1
                    }
                    this.setState(newState)

                }} className='btn btn-success'>Tăng</button>
                <button onClick={() => {
                    // let newState = {
                    //     fs: this.state.fs - 1
                    // }
                    this.setState({
                        fs: this.state.fs - 1
                    })
                }} className='btn btn-danger'>Giảm</button>
            </div>
        )
    }
}
