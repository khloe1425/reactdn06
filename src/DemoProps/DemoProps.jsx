import React, { Component } from 'react'
import Card from './Card'

export default class DemoProps extends Component {
  
  render() {
    // the cha truyen vao con la Card
    return (
      <div style={{
        margin: 100
        ,display:'flex',
        gap:10,
      }}>
        <Card titleCardOfMe='ca phe den da' descCardOfYou='mo ta san pham 1' imageOf='https://picsum.photos/200/300'/>
        <Card titleCardOfMe='ca phe sua sai gon' descCardOfYou='mo ta san pham 2' imageOf='https://i.pravatar.cc/?u=77'/>
      </div>
    )
  }
}
