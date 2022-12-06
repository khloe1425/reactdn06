import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';
import HomeComponent from './components/BaiTapComponent/HomeComponent';
import DataBinding from './DataBinding/DataBinding';

// App component chính chứa các component con
//<>: thẻ frament thẻ vô hình (<Fragment></Fragment>)
function App() {
  return (
    <>

      <DataBinding/>

      {/* <HomeComponent/> */}
      {/* <FunctionComponent></FunctionComponent>
      <FunctionComponent/>
      <ClassComponent/> */}
    </>
  );
}

export default App;
