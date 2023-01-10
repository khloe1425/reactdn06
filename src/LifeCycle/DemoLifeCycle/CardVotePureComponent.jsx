import React, { PureComponent } from 'react'

export default class CardVotePureComponent extends PureComponent {

    // Updating
    //Khi vote tăng thì render lại Card Vote 
    //Ngược lại khi number tăng (vote không đổi) => không render lại UI

    //PureComponent tự nhận diện props thay đổi hay không 
    //Props đổi  => render lại UI
    //Props không đổi => không render lại UI
    

    render() {
        console.log("render card PureComponent")
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
