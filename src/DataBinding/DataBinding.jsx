import React, { Component } from 'react'

export default class DataBinding extends Component {
    // DataBinding: đưa dữ liệu từ biến lên UI

    //thuộc tính của class
    fullName = "Nguyễn Thị Khác Hàng"

    user = {
        name: "Bé NA",
        avarta: "https://i.pravatar.cc/?u=77"
    }

    render() {
        //biến của phương thức
        let age = 1;

        return (
            <div>

                <p>Name: {this.fullName}</p>
                <p>Age: {age}</p>

                <p>name: {this.user.name}</p>
                <img src={this.user.avarta} alt="" />
            </div>
        )
    }
}

// document.getElementById("tenID").innerHTML = fullName
