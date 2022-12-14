import './style.scss';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
const HeaderTop = props => {

    const redux = useSelector((state) => state)

    console.log(redux)

    return (
        <div className='header-top'>
            <div className='logo'>
                <img className='logo__img' src='https://theme.hstatic.net/200000459373/1000812576/14/logo.png?v=282' />
            </div>

            <div className='search'>
                <input className='input__search' placeholder='nhap thong tin tim kiem ...' />
            </div>

            <div className='address'>
                <select className='select__address' name="cars" id="cars">
                    <option value="volvo">288 Phan Văn Trị, Phường 11, Quận Bình Thạnh</option>
                    <option value="saab">288 Phan Văn Trị, Phường 11, Quận Bình Thạnh</option>
                    <option value="opel">288 Phan Văn Trị, Phường 11, Quận Bình Thạnh</option>
                    <option value="audi">288 Phan Văn Trị, Phường 11, Quận Bình Thạnh</option>
                </select>
            </div>

            <div className='btn__login'>
                <a className='txt__header'>Đăng nhập</a>
            </div>

            <div className='cart__shipping'>
                <a className='txt__header'>Giỏ hàng ({redux.rootReducerCart.cart.length})</a>
            </div>
        </div>
    )
}
export default HeaderTop;
