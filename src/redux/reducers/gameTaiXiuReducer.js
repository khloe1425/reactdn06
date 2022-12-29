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
            // console.log(mangNgauNhien);
            state.mangXucXac = mangNgauNhien


            //TODO: Kiểm tra kết quả, tongDiem >=11 Tài ; tongDiem <11 Xỉu
            /**
             * TH1: banChon true Tài && tongDiem >=11 Tài => Thắng
             * TH2: banChon false Xỉu && tongDiem <11 Xỉu => Thắng
             */
            let tongDiem = state.mangXucXac.reduce((tong,xucxac,index) => { 
                    return tong += xucxac.diem;
             },0);
             console.log(tongDiem);
            //  !state.banChon  => state.banChon == false
             if( (state.banChon && tongDiem >= 11 ) || (!state.banChon && tongDiem < 11) ){
                //thắng 
                state.soBanThang +=1;
             }

             state.tongSoBan +=1;

            return { ...state }
        }

        default:
            return state
    }
}
