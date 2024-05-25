import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main.js';
import Detail from './pages/Detail.js';
import NotFound from './pages/NotFound.js';
import Header from '../src/components/Header.js'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/Detail/:movieId' element={<Detail />}></Route>
      <Route path='/*' element={<NotFound />}></Route>
    </Routes>
    </>
  );
}

export default App;