import React, { Component } from 'react'
import ProductList from './ProductList'

export default class BTXemChiTiet extends Component {

    phoneList = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/phone/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/phone/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/phone/applephone.jpg" }
    ]


    state ={
        phoneChiTiet:{ "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/phone/vsphone.jpg" }
    }

    //!đem renderPhoneList qua ProductList
    

    render() {
        return (
            <div className='container py-5'>
                {/* <div className="row">
                        {this.renderPhoneList()}
                </div> */}
                <ProductList phoneList={this.phoneList}/>

                <div className="row py-5">
                    <div className="col-4">
                        <h3>{this.state.phoneChiTiet.tenSP}</h3>
                        <img className='img-fluid' src={this.state.phoneChiTiet.hinhAnh} alt="" />
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
                                    <td>{this.state.phoneChiTiet.manHinh}</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}
