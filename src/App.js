// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Card from "./components/Card"
import Card1 from './components/Card1';
// import WebCam from './components/WebCam';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';
import Card5 from './components/Card5';
import Card6 from './components/Card6';
import Card7 from './components/Card7';
import Card8 from './components/Card8';
import Card9 from './components/Card9';
import AppCanvas from './components/tryon/AppCanvas';

// import index from '../glassesVTO/index.html'
function App() {
  return (
    <>
    {/* <WebCam/> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Card/>}/>
      <Route path='/Card1' element={<Card1/>}/>
      <Route path='/Card2' element={<Card2/>}></Route>
      <Route path='/Card3' element={<Card3/>}></Route>
      <Route path='/Card4' element={<Card4/>}></Route>
      <Route path='/Card5' element={<Card5/>}></Route>
      <Route path='/Card6' element={<Card6/>}></Route>
      <Route path='/Card7' element={<Card7/>}></Route>
      <Route path='/Card8' element={<Card8/>}></Route>
      <Route path='/Card9' element={<Card9/>}></Route>
      <Route path='/Demo' element={<AppCanvas/>}></Route>
      <Route/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
