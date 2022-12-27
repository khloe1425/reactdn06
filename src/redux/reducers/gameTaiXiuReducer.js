// rxr

//!Do các mặt xúc xắc cần thay đổi nên hình sẽ lưu ở BE (do chưa có API nên lưu tạm ở public)
const initialState = {
    mangXucXac: [
        { id: 1, img: "./img/1.png", diem: 1 },
        { id: 2, img: "./img/2.png", diem: 2 },
        { id: 3, img: "./img/3.png", diem: 3 },
    ],
    banChon: false,//true => Tài, false => Xỉu
    soBanThang: 0,
    tongSoBan: 0
}

export const gameTaiXiuReducer = (state = initialState, action) => {
    switch (action.type) {

        case "DAT_CUOC": {
            state.banChon = action.chon

            return { ...state }
        }

        case "LAC_XUC_XAC": {
            // Math.floor(Math.random() * 6) + 1

            let mangNgauNhien = [];
           
            for (let i = 0; i < 3; i++) {
                let num = Math.floor(Math.random() * 6) + 1
                let xucxac = {
                    id: `xx${i}`,
                    img: `./img/${num}.png`,
                    diem: num
                }
                // mangNgauNhien.push(xucxac);
                mangNgauNhien = [...mangNgauNhien, xucxac]

            }
            console.log(mangNgauNhien);
            state.mangXucXac = mangNgauNhien

            return { ...state }
        }

        default:
            return state
    }
}
