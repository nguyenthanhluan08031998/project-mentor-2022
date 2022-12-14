import './style.scss';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';
import Header from '../../component/Header';
import Home from '../../page/Home/home';
import Detail from '../../page/detail';
function Layout() {
    const navigate = useNavigate();
    return (
        <div className="App">
            <Header></Header>
            <div className='body'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/trang-chu' element={<Home />} />
                    <Route path='/chi-tiet' element={<Detail />} />
                </Routes>
            </div>

        </div>
    );
}

export default Layout;
