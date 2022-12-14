import React, { Component } from 'react'
import { connect } from 'react-redux';

class FormDangKy extends Component {



  handleOnChange = (event) => {
    let { value, name } = event.target;

    //giữ lại thuộc tính cũ và điền giá trị mới cho thuộc tính đang được nhập
    let newValues = { ...this.props.nguoiDung.values };
    // newValues["taiKhoan"] = value;
    newValues[name] = value;

    //TODO: validtion data
    let typeform = event.target.getAttribute("typeform");

    let messageError = "";
    //kiểm tra rỗng
    if (value.trim() === "") {
      messageError = `${name} không được để trống`;
    }
    //Kiểm tra email
    let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (typeform == "email") {
      //nếu là email
      if (!regexp.test(value)) {
        //value không đúng với regexp
        messageError = `Email không đúng định dạng`;
      }
    }

    //giữ lại thuộc tính cũ của errors và điền giá trị mới cho thuộc tính được kiểm tra
    let newErrors = { ...this.props.nguoiDung.errors };
    newErrors[name] = messageError

    //TODO đẩy dữ liệu values và error lên reducer
    let action = {
      type: "LUU_DATA_FORM",
      // newValues:newValues,
      newValues,
      newErrors: newErrors
    }
    this.props.dispatch(action);


  }


  handleOnSubmit = (event) => {
    //ngăn load lại trang web khi submit
    event.preventDefault();

    let isValid = true;

    for (const property in this.props.nguoiDung.errors) {
      if (this.props.nguoiDung.errors[property] !== "") {

        isValid = false;
      }
    }

    for (const property in this.props.nguoiDung.values) {
      if (this.props.nguoiDung.values[property] === "") {
        //người dùng không điền

        isValid = false;
      }
    }

    if (isValid) {
      let action = {
        type: "THEM_ND",
        nd: this.props.nguoiDung.values
      }

      this.props.dispatch(action);

    } else {
      alert("Form không được để trống")
    }


  }

  render() {
    console.log("Form", this.props)

    let { taiKhoan, hoTen, email, matKhau, sdt, maLoaiND } = this.props.nguoiDung.values;
    let { errors } = this.props.nguoiDung

    return (

      <div className="row">
        <div className="col-12">
          <h2 className='bg-dark text-white'>Form Đăng Ký</h2>

          <form onSubmit={this.handleOnSubmit} >
            <div className="row py-3">
              <div className="col">
                <label htmlFor="taiKhoan">Tài khoản</label>
                <input value={taiKhoan} onChange={(event) => {
                  this.handleOnChange(event)
                }} name='taiKhoan' type="text" className="form-control" placeholder="Tài khoản" />
                <p className='text-danger'>{errors.taiKhoan}</p>
              </div>
              <div className="col">
                <label htmlFor="hoTen">Họ tên</label>
                <input value={hoTen} onChange={this.handleOnChange} name='hoTen' type="text" className="form-control" placeholder="Họ Tên" />
                <p className='text-danger'>{errors.hoTen}</p>
              </div>
            </div>

            <div className="row py-3">
              <div className="col">
                <label htmlFor="matKhau">Mật khẩu</label>
                <input value={matKhau} onChange={this.handleOnChange} name='matKhau' type="password" className="form-control" placeholder="Mật khẩu" />
                <p className='text-danger'>{errors.matKhau}</p>
              </div>
              <div className="col">
                <label htmlFor="sdt">Số điện thoại</label>
                <input value={sdt} onChange={this.handleOnChange} name='sdt' type="text" className="form-control" placeholder="Số điện thoại" />
                <p className='text-danger'>{errors.sdt}</p>
              </div>
            </div>

            <div className="row py-3">
              <div className="col">
                <label htmlFor="email">Email</label>
                <input value={email} onChange={this.handleOnChange} typeform="email" name='email' type="text" className="form-control" placeholder="Email" />
                <p className='text-danger'>{errors.email}</p>
              </div>
              <div className="col">
                <label htmlFor="maLoaiND">Mã loại ND</label>
                <select value={maLoaiND} onChange={this.handleOnChange} className="form-control" name='maLoaiND'>
                  <option value={"Khách Hàng"}>Khách Hàng</option>
                  <option value={"Quản Trị"}>Quản Trị</option>
                </select>
                <p className='text-danger'>{errors.maLoaiND}</p>
              </div>
            </div>

            <div className='py-3'>

              <button className='btn btn-success mr-5'>Submit</button>
              <button onClick={(event) => { 
                  event.preventDefault();
                  let action ={
                    type:"CAP_NHAT",
                    ndCapNhat:this.props.nguoiDung.values
                  }
                  this.props.dispatch(action);

               }} className='btn btn-success mr-5'>Cập Nhật</button>
              <button type='reset' className='btn btn-info'>Reset</button>
            </div>

          </form>

        </div>
      </div>

    )
  }
}


const mapStateToProps = (rootReducer) => {
  return {
    // nguoiDungChiTiet: rootReducer.QLNDReducer.nguoiDungChiTiet
    nguoiDung: rootReducer.QLNDReducer.nguoiDung
  }
}

export default connect(mapStateToProps)(FormDangKy)