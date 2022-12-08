import React, { Component } from 'react'

export default class DoiMauXe extends Component {

    state = {
        imgUrl: "./img/products/black-car.jpg"
    }

    changeCar = (color) => {
        this.setState({
            imgUrl: `./img/products/${color}-car.jpg`
        })
    }


    render() {
        return (
            <div className='container py-5'>
                <div className="row">
                    <div className="col-8">
                        <img className='img-fluid' src={this.state.imgUrl} alt="" />
                    </div>
                    <div className="col-4">
                        <button onClick={() => {
                            this.changeCar("black")

                        }} className='btn btn-dark'>Black</button>
                        <br />
                        <button onClick={() => {
                             this.changeCar("red")

                        }} className='btn btn-danger'>Red</button>
                        <br />
                        <button onClick={() => {
                             this.changeCar("silver")

                        }} className='btn btn-light'>Silver</button>
                        <br />
                        <button onClick={() => {
                             this.changeCar("steel")

                        }} className='btn btn-secondary'>Steel</button>
                    </div>
                </div>
            </div>
        )
    }
}
