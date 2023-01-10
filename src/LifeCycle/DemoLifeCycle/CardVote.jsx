import React, { Component } from 'react'

export default class CardVote extends Component {

    // Updating
    //Khi vote tăng thì render lại Card Vote 
    //Ngược lại khi number tăng (vote không đổi) => không render lại UI

    shouldComponentUpdate(newProps, newState){

        console.log("newProps", newProps);//giá trị mới của props
        console.log("this.props", this.props);//props hiện tại của con (chưa update giá trị mới)'

        if(newProps.vote === this.props.vote){
            //giá trị của props vote không dổi
            //không render lại
            return false;
        }
        //Khác giá trị  => cho render lại UI
        return true;
    }

    render() {
        console.log("render card")
        return (

            <div className="card w-25" >
                <img style={{width:'100%'}} className="card-img-top" src="https://i.pravatar.cc/?u=77" alt="" />
                <div className="card-body">
                    <h4 className="card-title">Nguyễn Thị hoa hậu</h4>
                    <p className="card-text">Vote: {this.props.vote} </p>
                </div>
            </div>

        )
    }
}
