import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderPhone = () => {
        return this.props.phoneList.map((phone) => {
            return <div className="col-4" key={phone.maSP}>
                <ProductItem phone={phone} />

            </div>
        })
    }


    render() {
        return (
            <div className="row">
                {this.renderPhone()}
            </div>
        )
    }
}
