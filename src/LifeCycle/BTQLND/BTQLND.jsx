import React, { Component } from 'react'
import FormDangKy from './FormDangKy'
import TableNguoiDung from './TableNguoiDung'

export default class BTQLND extends Component {
  render() {
    return (
      <div className='container py-5'>

        <FormDangKy />

        <TableNguoiDung />

      </div>
    )
  }
}
