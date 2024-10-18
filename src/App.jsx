import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero/Hero"
import Home from "./Components/Home/Home";
import '@fontsource/aref-ruqaa-ink';
import '@fontsource/yusei-magic';

function App() {
  return (
    <BrowserRouter>
      <Routes className='appRoutes'>

        <Route path='/' element={< Hero />} />
        
        <Route path='/home' element={< Home />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
