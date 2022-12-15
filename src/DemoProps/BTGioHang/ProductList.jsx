import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderPhoneList = () => {
        return this.props.phoneList.map((phone) => {
            return <div className="col-4" key={phone.maSP}>
                <ProductItem themGioHang={this.props.themGioHang} phone={phone}/>
            </div>
        })
    }

    render() {
        console.log("list", this.props)
        return (
            <div className="row">
                {this.renderPhoneList()}
            </div>
        )
    }
}
