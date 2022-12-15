import React, { Component } from 'react'

export default class GioHang extends Component {

  renderGioHang = () => {
    return this.props.mangGioHang.map((spGH) => {
      return <tr key={spGH.maSP} >
        <td>{spGH.maSP}</td>
        <td>
          <img style={{ width: "50px" }} src={spGH.hinhAnh} alt="" />
        </td>
        <td>{spGH.tenSP}</td>
        <td>
          <button className='btn btn-danger'>-</button>
          <span>{spGH.soLuong}</span>
          <button className='btn btn-success'>+</button>
        </td>
        <td>{spGH.giaBan.toLocaleString()}</td>
        <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
        <td>
          <button className='btn btn-danger'>Xóa</button>
        </td>
      </tr>
    })
  }


  render() {
    return (
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã</th>
                    <th>Hình</th>
                    <th>Tên</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderGioHang()}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
 