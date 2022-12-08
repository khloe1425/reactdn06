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

// App component chính chứa các component con
//<>: thẻ frament thẻ vô hình (<Fragment></Fragment>)
function App() {
  return (
    <>

      <DoiMauXe />

      {/* <TangGiamFont/> */}

      {/* <DemoLogin/> */}


      {/* <h2 className='heading2'>App component</h2>
      <h3 className='heading3'>App component h3</h3>
    <StylingComponent/> */}

      {/* <HandleEvent/> */}

    </>
  );
}

export default App;
