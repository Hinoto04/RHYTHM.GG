import 'the-new-css-reset/css/reset.css'
import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Headers from './util/Headers'
import Welcome from './home/Welcome';
import User from './home/User';
import SDVX from './sdvx/SDVX';

function App() {
  return (
    <div>
      <Headers></Headers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home"/>}></Route>
          <Route path="/home/*">
            <Route index element={<Welcome/>}></Route>
            <Route path="user" element={<User/>}></Route>
          </Route>
          <Route path="sdvx">
            <Route index element={<SDVX/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    );
}

export default App;
