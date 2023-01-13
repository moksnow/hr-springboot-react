// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//new version:
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';

function App() {
  return (
    <div>

          <HeaderComponent />
            <div className="container">

              <Routes>
                <Route exact path='/' element={<ListEmployeeComponent />}/>
                <Route path='/employees' element={<ListEmployeeComponent />}/>

              </Routes>
            </div>
          <FooterComponent />

    </div>

  );
}


export default App;


