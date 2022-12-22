import React, { Component } from 'react'
import GioHang from './GioHang'
import ProductList from './ProductList'

export default class GioHangRedux extends Component {

    phoneList = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/phone/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/phone/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/phone/applephone.jpg" }
    ]

    /**
     *TODO:  B1 - tạo và phân tích state (mangGioHang => chứa các obj của giỏ hàng)
     * TODO: B2 - Di chuyển dữ liệu của state lưu trữ lên store
     *  state = {
        mangGioHang: [
            {
                maSP: 1,
                tenSP: "VinSmart Live",
                giaBan: 5700000,
                hinhAnh: "./img/phone/vsphone.jpg",
                soLuong:1
            }
        ]
    }
     */
   


    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-4">
                        <p className='alert alert-info' data-toggle="modal" data-target="#modelId"  > Giỏ hàng (0)</p>
                    </div>
                </div>

                <ProductList phoneList={this.phoneList} />

                <GioHang />


            </div>
        )
    }
}
