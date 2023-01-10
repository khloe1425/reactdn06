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
    nguoiDung: {
        //value lấy từ form
        values: {
            taiKhoan: "",
            hoTen: "",
            matKhau: "",
            sdt: "",
            email: "",
            maLoaiND: "Khách Hàng"
        },
        errors: {
            taiKhoan: "",
            hoTen: "",
            matKhau: "",
            sdt: "",
            email: "",
            maLoaiND: ""
        }
    },

    isLogin: true,//ví dụ lưu trữ nhiều kiểu dữ liệu
}


export const QLNDReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LUU_DATA_FORM":
            // console.log(action);
            let newND = {
                values: action.newValues,
                errors: action.newErrors
            }
            state.nguoiDung = newND;

            return { ...state }
        case "THEM_ND":

            state.mangNguoiDung = [...state.mangNguoiDung, action.nd]
            return { ...state }
        case "XOA_ND":

            state.mangNguoiDung = state.mangNguoiDung.filter((nd) => {
                return nd.taiKhoan !== action.tkXoa
            });


            return { ...state };

        case "XEM_CHI_TIET":
            state.nguoiDung.values = action.ndXem
            //copy đối tượng nguoiDung để đổi địa chỉ ô nhớ
            state.nguoiDung = { ...state.nguoiDung }

            return { ...state };

        case "CAP_NHAT":
            //!Tìm user trong mảng (mã/id/taiKhoan)
            //find() => object, findIndex() => index
            // let userFind = state.mangNguoiDung.find((nd) => { 
            //     return nd.taiKhoan === action.ndCapNhat.taiKhoan
            //  });
            //!Cập nhật thông của user tìm được
            //  if(userFind){
            //     //tìm thấy => cập nhật
            //     // userFind = action.ndCapNhat ; => không cập nhật được
            //     userFind.hoTen = action.hoTen
            //     userFind.matKhau = action.matKhau
            //  }

            let indexCapNhat = state.mangNguoiDung.findIndex((nd) => {
                return nd.taiKhoan === action.ndCapNhat.taiKhoan
            }); // nếu tìm không thấy trả về -1
            if(indexCapNhat > -1){
                //tìm thấy
                state.mangNguoiDung[indexCapNhat] = action.ndCapNhat
            }

            state.mangNguoiDung = [...state.mangNguoiDung];

            return {...state};

        default:
            return state
    }
}
