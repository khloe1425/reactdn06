import React, { Component } from 'react'

export default class DemoLogin extends Component {

    /**
     * Nếu isLogin == true => đã đăng nhập
     * => hiện UI tên người dùng
     * Ngược lại => chưa đăng nhập
     * => hiện UI button Login
     * 
     * Khi click vào button Login
     * => isLogin từ false => true
     * =>Result: hiển thị tên khách hàng
     * 
     * ! Khi click đổi isLogin => giá trị đã đổi nhưng UI không render lại để hiển thị kết quả mới
     * ! gọi hàm render() để render lại UI => giá trị trong console có hiện nhưng UI không thay đổi
     * ?=> State 
     */
    // isLogin = false;

    state = {
        isLogin: false
    }

    renderUI = () => {
        // this.isLogin == true
        if (this.state.isLogin) {
            return <span style={{ color: "white" }}>
                Nguyễn Thị Khách Hàng
            </span>
        } else {
            return <button onClick={() => {
                //không được gán trực tiếp giá trị đổi cho state
                // this.state.isLogin = true;
                //state mới
                let newState = {
                    isLogin: true //có tên thuộc trùng mới state ban đầu
                }
                // this.setState() : nhận vào obj state mới , gán giá trị mới cho state và render lại UI
                //setState là phương thức bất đồng bộ, dùng tham số thứ 2 khi cần chạy các code sau khi state thay đổi
                this.setState(newState, () => {
                    console.log("Click", this.state.isLogin);
                })



                // this.render();//render lại UI

            }} className='btn btn-success'>
                Login
            </button>

        }
    }


    //chạy khi load ứng dụng
    render() {

        // console.log("render", this.isLogin);


        return (
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>

                        <div>
                            {/* gọi hàm khi load trang */}
                            {this.renderUI()}
                        </div>
                    </div>
                </nav>

            </div>
        )
    }

}
