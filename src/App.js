import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';
import HomeComponent from './components/BaiTapComponent/HomeComponent';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StylingComponent from './StylingComponent/StylingComponent';
import DemoLogin from './demoState/DemoLogin';
import TangGiamFont from './demoState/TangGiamFont';
import DoiMauXe from './demoState/DoiMauXe';
import DemoProps from './DemoProps/DemoProps';
import DemoRendermap from './DemoProps/DemoRendermap';
import ProductList from './DemoProps/ShoesShop/ProductList';
import BTXemChiTiet from './DemoProps/BTXemChiTiet/BTXemChiTiet';
import BTGioHang from './DemoProps/BTGioHang/BTGioHang';
import BTTangGiamSo from './DemoRedux/BTTangGiamSo/BTTangGiamSo';
import GioHangRedux from './DemoRedux/GioHangRedux/GioHangRedux';
import BTGameTaiXiu from './DemoRedux/BTGameTaiXiu/BTGameTaiXiu';
import BTQLND from './LifeCycle/BTQLND/BTQLND';

// App component chính chứa các component con
//<>: thẻ frament thẻ vô hình (<Fragment></Fragment>)
function App() {
  return (
    <>

      <BTQLND/>



      {/* <BTGameTaiXiu/> */}

      
      {/* <GioHangRedux/> */}
      
      {/* <BTTangGiamSo /> */}

      {/* <BTGioHang/> */}






    </>
  );
}

export default App;
