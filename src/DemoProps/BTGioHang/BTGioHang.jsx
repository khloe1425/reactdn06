import React, { Component } from 'react'
import GioHang from './GioHang'
import ProductList from './ProductList'

export default class BTGioHang extends Component {

    phoneList = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/phone/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/phone/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/phone/applephone.jpg" }
    ]

    state = {
        mangGioHang: []
    }

    //Phương thức sẽ goi setState
    /**
     * 1.Tạo đối tương mới spGH
     * 2.thêm vào mảng giỏ hàng (newState)
     * 3.truyền newState vào setState 
     */
    themGioHang = (phone) => {
        // console.log(phone);
        //!bóc tách thuộc tính của phone
        let { maSP, tenSP, giaBan, hinhAnh } = phone;

        let mangGioHangCN = [...this.state.mangGioHang];
        // find() => return đối tượng tìm thấy
        // let spTK = mangGioHangCN.find((sp) => {
        //     return sp.maSP === maSP
        // })
        let spTK = mangGioHangCN.find(sp => sp.maSP === maSP)

        if (spTK) {
            //! Nếu sp đã có ở GH => tăng số lượng + 1
            // spTK.soLuong = spTK.soLuong + 1;
            spTK.soLuong += 1;
        } else {
            //! Ngược lại, chưa tồn tại trong GH => thêm mới spGH
            //! Tạo đối tương mới cho giỏ hàng
            let spGH = {
                maSP: maSP,
                tenSP: tenSP,
                giaBan: giaBan,
                hinhAnh: hinhAnh,
                soLuong: 1
            }
            //! thêm vào mảng giỏ hàng (newState)
            //copy phần tử của mảng cũ , thêm phần tử mới
            mangGioHangCN = [...mangGioHangCN, spGH]
        }

        this.setState({
            mangGioHang: mangGioHangCN
        });




    }

    //TODO đem renderPhoneList sang ProductList

    //TODO đem renderGioHang sang GioHang

    xoaSP = (idXoa) => {
        // console.log(idXoa);
        //? splice(index,1)=> xóa sản phẩm ra khỏi mảng
        //? filter() => lọc và giữ lại các sản phẩm không cần xóa. Trả về 1 mảng mới chứa các giá trị đã được lọc
        //!mangCapNhat: chứa các sản phẩm không cần xóa => các sp có id  != idXoa
        let mangCapNhat =  this.state.mangGioHang.filter((spGH) => { 
                return spGH.maSP !== idXoa
         });
        //?  let mangCapNhat =  this.state.mangGioHang.filter(spGH => spGH.maSP !== idXoa);

        //  console.log("mangCapNhat",mangCapNhat);

        this.setState({
            mangGioHang: mangCapNhat
        })
    }

    tangGiamSL = (idSL, soLuong) => {
        // console.log(idSL, soLuong);
        let mangCapNhat = [...this.state.mangGioHang];
        //TODO tìm sản phẩm cần cập nhật sl
        let spTK = mangCapNhat.find((spGH) => { 
            return spGH.maSP === idSL
         });
         //console.log("spTK",spTK);
         if(spTK){
            // tìm thấy => cập sl & setState
            //!C1: Nếu số lượng < 1 => thông báo và giữ nguyên số lương là 1
             //! C2: nếu số lượng == 0 => xóa sản phẩm khỏi mảng (xử lý như xóa sản phẩm)
            spTK.soLuong += soLuong
            if(spTK.soLuong < 1){
                alert("Số lượng không được nhỏ hơn 1")
                spTK.soLuong  = 1;
               
            }

            this.setState({
                mangGioHang: mangCapNhat
            })
            
         }
    }

    renderTongSL = () => {
        //! C1: tính tổng số lượng sản phẩm trong giỏ hàng
        //! C2: đếm số loại sản phẩm trong giỏ hàng => số phần tử có trong mảng giỏ hàng => this.mangGioHang.length

        //? reduce()
        //let tong = 0;// kết quả cuối cùng được trả về từ reduce
        //? reduce((tongSL, spGH)=>{} , 0 ): tongSL biến tích lũy trong việc công dồn số,
        //? spGH: từng phần tử của mảng 
        //? 0 : tham số thứ 2 của reduce là giá trị khởi tạo cua biến tích lũy (tongSL)
       // tong = this.state.mangGioHang.reduce((tongSL,spGH) => {
        //    return tongSL += spGH.soLuong
        //  }, 0);

       // console.log("tong",tong);

        //return tong;

        return this.state.mangGioHang.reduce((tongSL,spGH) => tongSL += spGH.soLuong, 0);


        
    }

    render() {
        return (
            <div className='container py-5'>
                <div className="row">
                    <div className="col-12">
                        <p style={{ width: "20%" }} data-toggle="modal" data-target="#exampleModal" className='alert alert-primary'>Giỏ hàng ({this.renderTongSL()})</p>
                    </div>
                </div>

                <ProductList themGioHang={this.themGioHang} phoneList={this.phoneList} />

                <GioHang tangGiamSL={this.tangGiamSL}  xoaSP={this.xoaSP}  mangGioHang={this.state.mangGioHang} />

            </div>
        )
    }
}
