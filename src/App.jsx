import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero/Hero"
import Home from "./Components/Home/Home";
import '@fontsource/aref-ruqaa-ink';
import '@fontsource/yusei-magic';
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes className='appRoutes'>

        <Route path='/' element={< Hero />} />
        
        <Route path='/home' element={< Home />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
