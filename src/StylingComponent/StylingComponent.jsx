import React, { Component } from 'react';

// file css import ở con nhưng css sẽ ảnh hưởng cả web
import './StylingComponent.css';

// vừa dùng file css riêng vừa chỉnh ảnh hưởng cho riêng component
import style from "./style.module.css";


export default class StylingComponent extends Component {

    render() {
        // các thuộc tính css sẽ trở thành thuộc tính obj
        // tên thuộc tính có dấu - thì chuyển thành camel case
        let objCSS = {
            color: "red",
            backgroundColor: "yellow"
        }

        return (
            <div>
                {/* inline CSS */}
                <h1 style={objCSS}  >Inline CSS</h1>
                <h1 style={{ color: "red", backgroundColor: "yellow" }}  >Inline CSS</h1>

                {/* external CSS */}
                <h2 className='heading2'>External CSS</h2>

                {/* Module CSS */}
                <h3 className={style.heading3} >demo module css</h3>
                <h3 className={style["heading-font"]} >demo module css</h3>
                <h3 className={`${style["heading-font"]} ${style.heading3} `} >demo module css</h3>
            </div>
        )
    }
}

// obj={
//     color: "red",
// }

// style={obj} 

{/* <h1 style="color:red;"></h1> */ }