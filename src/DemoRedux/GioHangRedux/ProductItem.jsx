import React, { Component } from 'react'
import { connect } from 'react-redux';

class ProductItem extends Component {
    render() {
        console.log("Item",this.props);
        let {phone} = this.props;
        // console.log(phone);
        return (
            <div className="card">
                <img className="card-img-top" src={phone.hinhAnh} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{phone.tenSP}</h4>
                    <p className="card-text">{phone.giaBan.toLocaleString()}</p>

                    <button 
                    onClick={() => { 
                        let action ={
                            type:"THEM_SP",
                            phoneGH: phone
                        }
                        //dispatch: redux cung cấp khi kết nối thành công
                        this.props.dispatch(action);//đẩy data lên store
                     }} 
                     className='btn btn-danger' data-toggle="modal" data-target="#modelId">Add to card</button>

                </div>
            </div>
        )
    }
}

//! không cần tạo mapStateToProps vì không cần kéo data từ store về
export default connect()(ProductItem);