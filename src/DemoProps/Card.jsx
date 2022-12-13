import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        // console.log('props' ,this.props);
        console.log(this.props.shoes);
        let {image,name, description} = this.props.shoes

        return (
            <div className="card" style={{ width: '18rem' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}







{/* <div className="card" style={{ width: '18rem' }}>
                <img src={this.props.imageOf} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.titleCardOfMe}</h5>
                    <p className="card-text">{this.props.descCardOfYou}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}