import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";

//? store sẽ cung cấp cho component các reducer( là 1 hàm chứa state, bao gồm cả setState)
//? rootReducer : reduce tổng chứa nhiều reducer

let number = 0; //giá trị ban đầu của state


const rootReducer = combineReducers({
    //Các state cần lưu trữ trên store
    //Defaut parameter
    tangGiamSoReducer(state = number, action) {
        // console.log(action);
        switch (action.type) {
            case "TANG_SO":
                // state = state + action.numberTang
                state += action.numberTang
                //nếu state thay đổi tự redux sẽ render lại UI của component đang kết nối với store
                return state;
            case "GIAM_SO":
                state += action.numberGiam
                return state;

            default:
                return state;
        }


    },

    //TODO: B3 - Tạo reducer
    //! object literal
    //!Nếu tên thuộc tính trùng với tên biến thì viết rút gọn => chỉ cần ghi tên thuộc tính
    // gioHangReducer:gioHangReducer
    gioHangReducer,



});



export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());