import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    console.log("Item", this.props);
    let {hinhAnh,tenSP,giaBan} = this.props.phone
    return (
      <div className="card">
        <img src={hinhAnh} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{tenSP}</h5>
          <p className="card-text">{giaBan.toLocaleString()}</p>
          <button onClick={() => { 
              //TODO gọi method xemChiTiet
              this.props.xemChiTiet(this.props.phone);
           }} className="btn btn-primary">Xem chi tiết</button>
        </div>
      </div>
    )
  }
}
