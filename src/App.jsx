import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Archieve from "./pages/Archieve.jsx";
import Trash from "./pages/Trash.jsx";
import Navbar from "./components/Navbar.jsx";

import './App.css'

function App() {

  return (
    <>
      <div className="app-main bg-primary min-h-[100vh]">
          <Navbar/>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/archieve'} element={<Archieve/>}/>
              <Route path={'/trash'} element={<Trash/>}/>
          </Routes>
      </div>
    </>
  )
}

export default App
