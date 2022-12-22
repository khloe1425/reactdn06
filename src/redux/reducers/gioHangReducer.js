//TODO: B2- Di chuyển dữ liệu của state lưu trữ lên store
let mangGioHang = [];

export const gioHangReducer = (state = mangGioHang, action) => {
    console.log(action)
    switch (action.type) {
        case "THEM_SP":
            let { phoneGH } = action;
            // let mangCapNhat = [...state];
            // Kiểm tra sp có trong mảng ko?
            let spTK = state.find((spGH) => {
                return spGH.maSP === phoneGH.maSP;
            })
            if (spTK) {
                //tìm thấy => tăng số lượng
                //spTK.soLuong = spTK.soLuong + 1;
                console.log(spTK);
                spTK.soLuong += 1;
            } else {
                //chưa có sp => thêm mới sp
                let spMoi = {
                    maSP: phoneGH.maSP,
                    tenSP: phoneGH.tenSP,
                    giaBan: phoneGH.giaBan,
                    hinhAnh: phoneGH.hinhAnh,
                    soLuong: 1
                }
                // state.push(spMoi); //=> thêm phần tử mới
                //! [copy mảng cũ, thêm phần tử mới vào mảng]
                state = [...state, spMoi]; //! => gán 1 mảng mới => địa chỉ mới
            }

            //! khi thêm sp đã có thì số lượng đã đổi nhưng UI không render lại
            //Redux: với state là array và object redux không tự nhận biết khi giá trị đổi (tính bất biến - immutable)
            //Redux chỉ nhận biết thay đổi khi địa chỉ thay đổi
            return [...state];// return về mảng mới => địa chỉ mới

        case "XOA_SP":


            state = state.filter((spGH) => {
                return spGH.maSP !== action.maXoa
            })
            //!không cần copy mảng vì filter trả về mảng mới
            return state;
        // return [...state]
        case "TANG_GIAM_SL":
            let spSL = state.find((spGH) => { 
                return spGH.maSP === action.maSPSL
             });

             if(spSL){
                spSL.soLuong += action.sl
             }

            return [...state]
        default:
            return state;
    }
}