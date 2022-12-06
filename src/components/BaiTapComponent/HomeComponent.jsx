// rcc
import React, { Component } from 'react'
import ContentComponent from './ContentComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import SidebarComponent from './SidebarComponent'

export default class HomeComponent extends Component {
  render() {
    return (
      <div className='home container-fluid'>
        HomeComponent
           <HeaderComponent/>

            <div className="row">
                <SidebarComponent/>
               <ContentComponent/>
            </div>
            <FooterComponent/>

      </div>
    )
  }
}
