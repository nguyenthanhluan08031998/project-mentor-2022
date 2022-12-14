import './App.css';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import {
  Routes,
  Route,
  BrowserRouter, // hashrouter
} from "react-router-dom";
import Layout from './component/layout';

import configureStore from './redux/store'
const store = configureStore()

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/trang-chu' element={<Layout />} />
          <Route path='/chi-tiet' element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
