import '../../App.css';
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
                <div className='nav-bar'>
                    {
                        [
                            { name: 'Trang chủ', route: '/trang-chu' },
                            { name: 'Giới thiệu', route: '/gioi-thieu' },
                            { name: 'Sản phẩm', route: '/chi-tiet' },
                            { name: 'Bài viết', route: '/trang-chu' },
                            { name: 'Liên hệ', route: '/trang-chu' },
                            { name: 'Tuyển dụng', route: '/trang-chu' },
                        ].map((el, index) => <button className='item__nav' key={index}>
                            {/* <a onClick={() => navigate(el.route)}>{
                                el.name
                            }</a> */}
                            {/* <Link to={el.route}>{el.name}</Link> */}
                            <a href={el.route}>{el.name}</a>
                        </button>)
                    }

                </div>

                <div className='breadcrumb-list'>
                    <div>
                        <a>Trang chủ</a> /
                        <a>Rau - Củ - Quả</a>
                    </div>
                </div>

                <Routes>
                    {/* <Route path='/' element={<Home />} /> */}
                    <Route path='/trang-chu' element={<Home />} />
                    <Route path='/chi-tiet' element={<Detail />} />
                    <Route path='/chi-tiet/:id' element={<Detail />} />
                </Routes>



            </div>

            <div className='footer'>

            </div>
        </div>
    );
}

export default Layout;
