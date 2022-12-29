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
        }
    ],
    isLogin: true,//ví dụ lưu trữ nhiều kiểu dữ liệu
}


export const QLNDReducer = (state = initialState, action) => {
    switch (action.type) {


        default:
            return state
    }
}
