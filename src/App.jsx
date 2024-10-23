import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero/Hero"
import Home from "./Components/Home/Home";
import '@fontsource/aref-ruqaa-ink';
import '@fontsource/yusei-magic';
import '@fontsource-variable/red-hat-display';
import About from "./Components/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes className='appRoutes'>

        <Route path='/' element={< Hero />} />
        
        <Route path='/home' element={< Home />} />
        <Route path='/contact' element={< About />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
