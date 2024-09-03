import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from './Components/pages/Home/Home';
import Allproduct from './Components/Allproduct/Allproduct';
import Fashion from './Components/pages/Fashion/Fashion';
import Shirt from './Components/pages/Shirt/Shirt';
import Jacket from './Components/pages/Jacket/Jacket';
import Mobile from './Components/pages/Mobile/Mobile';
import Laptop from './Components/pages/Laptop/Laptop';
import Shoes from './Components/pages/Shoes/Shoes';
import HomeCard from './Components/pages/HomeCard/HomeCard';
import Books from './Components/pages/Books/Books';
import CartArea from './Components/CartArea/CartArea';
import ViewItem from './Components/pages/ViewItem/ViewItem';
import SignIn from './Components/SignIn/SignIn';
import NoPage from './Components/pages/NoPage/NoPage';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allproduct' element={<Allproduct />} />
          <Route path='/fashion' element={<Fashion />} />
          <Route path='/shirt' element={<Shirt />} />
          <Route path='/jacket' element={<Jacket />} />
          <Route path='/mobile' element={<Mobile />} />
          <Route path='/laptop' element={<Laptop />} />
          <Route path='/home' element={<HomeCard />} />
          <Route path='/books' element={<Books />} />
          <Route path='/shoes' element={<Shoes />} />
          <Route path='/cartitems' element={<CartArea />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/items/:id' element={<ViewItem />} />
          <Route path='/*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
