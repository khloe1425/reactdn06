import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        console.log("item", this.props)
        let {phone} = this.props;
        
        return (
            <div className="card">
                <img className="card-img-top" src={phone.hinhAnh} alt="image" />
                <div className="card-body">
                    <h4 className="card-title">{phone.tenSP}</h4>
                    <p className="card-text">{phone.giaBan.toLocaleString()}</p>
                    <button onClick={() => { 
                        this.props.themGioHang(phone);
                     }}  data-toggle="modal" data-target="#exampleModal" className='btn btn-primary'>Thêm Giỏ Hàng</button>
                </div>
            </div>
        )
    }
}
