import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomThemeProvider from './component/CustomThemeProvider'
import Home from './pages/Home';
import About from "./pages/About";
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const App = () => {
  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  )
}

export default App;
