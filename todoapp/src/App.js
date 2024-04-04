import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import PermanentDrawerLeft from './components/sideBar';
import Login from './components/login';

const App = () => {
  return (
    // <PermanentDrawerLeft/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/todoapp" element={<PermanentDrawerLeft/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
