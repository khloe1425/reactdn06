import React, { Component } from 'react'

//import connect để giúp kết nối component với store
import { connect } from 'react-redux'

class BTTangGiamSo extends Component {
  render() {
    console.log("reducer", this.props);
    return (
      <div className='container py-5'>
            <div className="w-25">
                <button className='btn btn-info' onClick={() => { 
                    //sử dụng dispatch() được cung cấp khi kết nối thành công với store
                    //type: thuộc tính bắt buộc => quy định loại hành động cần xử lý ở store
                    let action ={
                        type:"TANG_SO",
                        numberTang:1
                    }
                    this.props.dispatch(action);

                 }}>+</button>
                <span className='m-5'>{this.props.numberProps}</span>
                <button className='btn btn-danger' onClick={() => { 
                    let action ={
                        type:"GIAM_SO",
                        numberGiam:-1
                    }
                    this.props.dispatch(action);
                    
                 }}>-</button>
            </div>
      </div>
    )
  }
}

//tạo hàm mapStateToProps => đem state từ store xuống lưu vào trong props của component
const mapStateToProps = (rootReducer) => {
    return {
        numberProps: rootReducer.tangGiamSoReducer
    }
}
//ComponentBTTangGiamSoRedux: component mới kết hợp Class Component + Redux
//connect(mapStateToProps, hàm đẩy dữ liệu lên store)(class component cần kết nối)
 const ComponentBTTangGiamSoRedux = connect(mapStateToProps)(BTTangGiamSo);
// connect()() => liên quan closure function, HOC high-order component
export default ComponentBTTangGiamSoRedux;
//? export const ComponentBTTangGiamSoRedux = connect(mapStateToProps)(BTTangGiamSo);

//closure function return về 1 hàm
// function main(){

//     return function(){
//         console.log("123");//
//     }
// }

// main(); //function(){console.log("123");}
// main()(); // gọi chạy hàm ẩn danh =>  console.log("123");
