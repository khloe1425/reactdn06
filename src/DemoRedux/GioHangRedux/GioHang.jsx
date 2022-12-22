import React, { Component } from 'react'
import { connect } from 'react-redux'


class GioHang extends Component {


    renderGioHang = () => {
        return this.props.mangGioHang.map((spGH) => {
            return <tr key={spGH.maSP}>
                <td>{spGH.maSP}</td>
                <td>
                    <img style={{width:"50px"}} src={spGH.hinhAnh} alt="" />
                </td>
                <td>{spGH.tenSP}</td>
                <td>{spGH.giaBan.toLocaleString()}</td>
                <td>
                    <button  onClick={() => { 
                        let action = {
                            type:"TANG_GIAM_SL",
                            maSPSL: spGH.maSP,
                            sl:-1
                        }
                        this.props.dispatch(action);
                     }} className='btn btn-danger'>-</button>
                    <span>{spGH.soLuong}</span>
                    <button onClick={() => { 
                        let action = {
                            type:"TANG_GIAM_SL",
                            maSPSL: spGH.maSP,
                            sl:1
                        }
                        this.props.dispatch(action);
                     }}   className='btn btn-success'>+</button>
                </td>
                <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => { 
                        let action = {
                            type:"XOA_SP",
                            maXoa: spGH.maSP
                        }
                        this.props.dispatch(action);
                     }} >Xóa</button>
                </td>
            </tr>
        })
    }

    render() {
        console.log(this.props);
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Mã</th>
                                        <th scope="col">Hình</th>
                                        <th scope="col">Tên</th>
                                        <th scope="col">Giá bán</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Thành tiền</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>

                                        {this.renderGioHang()}
                                </tbody>
                            </table>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//!lấy state từ store lưu xuống props của component
const mapStateToProps = (rootReducer) => {
    return {
        mangGioHang: rootReducer.gioHangReducer
    }
}

//!kết nối đến store
const ComponentGioHangRedux = connect(mapStateToProps)(GioHang);

export default ComponentGioHangRedux;