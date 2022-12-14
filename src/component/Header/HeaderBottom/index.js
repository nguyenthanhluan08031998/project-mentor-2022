import './style.scss';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';
import Home from '../../../page/Home/home';
import Detail from '../../../page/detail';

import { Steps } from 'antd';
import 'antd/dist/reset.css';

const description = 'This is a description.';
const HeaderBottom = props => { // function Header (props){
    return (
        <div className='header-bottom'>
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

            <Steps
    current={1}
    items={[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progress',
        description,
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />

            <Routes>
                {/* <Route path='/' element={<Home />} /> */}
                <Route path='/trang-chu' element={<Home />} />
                <Route path='/chi-tiet' element={<Detail />} />
                <Route path='/chi-tiet/:id' element={<Detail />} />
            </Routes>
        </div>
    )
}
export default HeaderBottom;