import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./home/Home"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
