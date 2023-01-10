// rxr

const initialState = {
    //Nên lưu initialState (giá trị khởi tạo ủa state) của reducer là kiểu đối tượng => dễ dàng lưu trữ thêm các dữ liệu 
    mangNguoiDung: [
        {
            taiKhoan: "user123",
            hoTen: "Nguyễn Thị khách hàng",
            matKhau: "1223452",
            sdt: "456265432",
            email: "test@gmail.com",
            maLoaiND: "Khách Hàng"
        },
        {
            taiKhoan: "user456",
            hoTen: "Nguyễn Thị khách hàng",
            matKhau: "1223452",
            sdt: "456265432",
            email: "test@gmail.com",
            maLoaiND: "Khách Hàng"
        },
        {
            taiKhoan: "user789",
            hoTen: "Nguyễn Thị khách hàng",
            matKhau: "1223452",
            sdt: "456265432",
            email: "test@gmail.com",
            maLoaiND: "Khách Hàng"
        }
    ],
    nguoiDungChiTiet: {
        taiKhoan: "",
        hoTen: "",
        matKhau: "",
        sdt: "",
        email: "",
        maLoaiND: ""
    },
    isLogin: true,//ví dụ lưu trữ nhiều kiểu dữ liệu
}


export const QLNDReducer = (state = initialState, action) => {
    switch (action.type) {
        case "THEM_ND":
            // state.mangNguoiDung.push(action.nd);
            //console.log(state.mangNguoiDung)
            //Spread operator
            state.mangNguoiDung = [...state.mangNguoiDung, action.nd]
            return { ...state }//copy state cũ thành state => đổi dịa chỉ ô nhớ => return state mới
        case "XOA_ND":
            //Lọc và return mảng mới chứa các người dùng không cần xóa
            //=> không cần copy, filter giup tạo mảng mới => đổi địa chỉ ô nhớ
            state.mangNguoiDung = state.mangNguoiDung.filter((nd) => {
                return nd.taiKhoan !== action.tkXoa
            });
            // console.log(state.mangNguoiDung);

            return { ...state };

        case "XEM_CHI_TIET":
            state.nguoiDungChiTiet = action.ndXem
            // console.log(state.nguoiDungChiTiet);

            return {...state};

        default:
            return state
    }
}
