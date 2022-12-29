import React, { Component } from 'react'

import { connect } from 'react-redux';

// sử dụng hình trong jsx => import hình
import xucxac1 from "../../asset/img/1.png";
import xucxac2 from "../../asset/img/2.png";
import xucxac3 from "../../asset/img/3.png";

class DatCuoc extends Component {

    renderXucXac = () => {
        return this.props.mangXucXac.map((xucxac,index) => {
            return <img key={xucxac.id} className='xucxac' src={xucxac.img} alt="" />
        })
    }

    render() {
        console.log("props DatCuoc", this.props);
        return (
            <div className="row m-5">
                <div className="col-3">
                    <button onClick={() => {
                        this.props.datCuoc(true)
                    }} className='btn btn-info btn-datcuoc'>Tài</button>
                </div>
                <div className="col-6">
                    {this.renderXucXac()}
                </div>
                <div className="col-3">
                    <button onClick={() => {
                        this.props.datCuoc(false)
                    }} className='btn btn-danger btn-datcuoc'>Xỉu</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        mangXucXac: rootReducer.gameTaiXiuReducer.mangXucXac
    }
}

//tạo 1 dispatch riêng giúp đẩy data lên store
const mapDispatchToProps = (dispatch) => {
    //return vào props 1 hàm dispatch
    return {
        datCuoc: (banDat) => {
            const action = {
                type: "DAT_CUOC",
                chon: banDat
            }
            dispatch(action);
        }

    }
}

//Kết nối component tới store
//!mapDispatchToProps phải đặt ở tham số thứ 2
export default connect(mapStateToProps, mapDispatchToProps)(DatCuoc);


//!Nếu ko cần kéo data từ store mà chỉ cần đẩy data lên
// export default connect()(DatCuoc); => gọi this.props.dispatch()

//! thì phải điền tham số 1 là null
// export default connect(null, mapDispatchToProps)(DatCuoc);