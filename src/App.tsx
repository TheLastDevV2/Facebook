import React from 'react';
import LoginPage from './pages/login/index.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Feed from './pages/home/index.tsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/feed' element={<Feed/>}></Route>   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
