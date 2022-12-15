import React, { Component } from 'react'

export default class ThongTinCHiTiet extends Component {
  render() {
    return (
      <div className="row py-5">
        <div className="col-4">
          <h3>{this.props.phoneChiTiet.tenSP}</h3>
          <img className='img-fluid' src={this.props.phoneChiTiet.hinhAnh} alt="" />
        </div>
        <div className="col-8">
          <h3>Thông số kỹ thuật</h3>
          <table className="table">
            {/* <thead>
                  <tr>
                      <th scope="col"></th>
                      <th scope="col"></th>
                  </tr>
              </thead> */}
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{this.props.phoneChiTiet.manHinh}</td>
              </tr>

            </tbody>
          </table>

        </div>
      </div>
    )
  }
}
