import React, { Component } from 'react'

export default class FormDangKy extends Component {

  //B1: lấy data từ form => lưu vào state
  state = {
    values: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      sdt: "",
      email: "",
      maLoaiND: ""
    },
    errors: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      sdt: "",
      email: "",
      maLoaiND: ""
    }
  }

  handleOnChange = (event) => {
    // console.log("event target",event.target);
    // let value = event.target.value
    let { value, name } = event.target;
    //giữ lại thuộc tính cũ và điền giá trị mới cho thuộc tính đang được nhập
    let newValues = { ...this.state.values };
    newValues[name] = value;

    let messageError = "";
    //kiểm tra rỗng
    if(value.trim() === ""){
      messageError = `${name} không được để trống`;
    }

    //giữ lại thuộc tính cũ của errors và điền giá trị mới cho thuộc tính được kiểm tra
    let newErrors = {...this.state.errors};
    newErrors[name] = messageError

    this.setState({
      values: newValues,
      errors:newErrors
    }, () => {
      console.log(this.state);
    });

  }




  render() {


    return (

      <div className="row">
        <div className="col-12">
          <h2 className='bg-dark text-white'>Form Đăng Ký</h2>

          <form>
            <div className="row py-3">
              <div className="col">
                <label htmlFor="taiKhoan">Tài khoản</label>
                <input onChange={(event) => {
                  this.handleOnChange(event)
                }} name='taiKhoan' type="text" className="form-control" placeholder="Tài khoản" />
                <p className='text-danger'>{this.state.errors.taiKhoan}</p>
              </div>
              <div className="col">
                <label htmlFor="hoTen">Họ tên</label>
                <input onChange={this.handleOnChange} name='hoTen' type="text" className="form-control" placeholder="Họ Tên" />
                <p className='text-danger'>{this.state.errors.hoTen}</p>
              </div>
            </div>

            <div className="row py-3">
              <div className="col">
                <label htmlFor="matKhau">Mật khẩu</label>
                <input onChange={this.handleOnChange} name='matKhau' type="password" className="form-control" placeholder="Mật khẩu" />
                <p className='text-danger'>{this.state.errors.matKhau}</p>
              </div>
              <div className="col">
                <label htmlFor="sdt">Số điện thoại</label>
                <input onChange={this.handleOnChange} name='sdt' type="text" className="form-control" placeholder="Số điện thoại" />
                <p className='text-danger'>{this.state.errors.sdt}</p>
              </div>
            </div>

            <div className="row py-3">
              <div className="col">
                <label htmlFor="email">Email</label>
                <input onChange={this.handleOnChange} name='email' type="email" className="form-control" placeholder="Email" />
                <p className='text-danger'>{this.state.errors.email}</p>
              </div>
              <div className="col">
                <label htmlFor="maLoaiND">Mã loại ND</label>
                <select onChange={this.handleOnChange} className="form-control" name='maLoaiND'>
                  <option value={"Khách Hàng"}>Khách Hàng</option>
                  <option value={"Quản Trị"}>Quản Trị</option>
                </select>
                <p className='text-danger'>{this.state.errors.maLoaiND}</p>
              </div>
            </div>

            <div className='py-3'>

              <button className='btn btn-success mr-5'>Submit</button>
              <button className='btn btn-info'>Reset</button>
            </div>

          </form>

        </div>
      </div>

    )
  }
}
