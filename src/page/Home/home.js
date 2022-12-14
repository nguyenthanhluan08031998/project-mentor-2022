import React, { useEffect, useState } from 'react';
import { Routes, useNavigate } from 'react-router-dom';
import Header from '../../component/Header';
import Slider from "react-slick";
import SectionProduct from '../../component/SectionProduct';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss';

function Home() {
  // const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const carouselBanner =[
    {
      img:'https://theme.hstatic.net/200000459373/1000812576/14/slide_1_img.jpg?v=286'
    },
    {
      img:'https://theme.hstatic.net/200000459373/1000812576/14/slide_4_img.jpg?v=286'
    },
    {
      img:'https://theme.hstatic.net/200000459373/1000812576/14/slide_2_img.jpg?v=286'
    }
  ]
  const data = [{
    title: 'Sản phẩm nỗi bật',
    products: [
      {
        img: 'https://product.hstatic.net/200000459373/product/tai_xuong__9__e20bf99465594802829fb0178e95d85d_large.jpg',
        name: 'Cá hú tươi 500g',
        price: '32,800₫'
      },
      {
        img: 'https://product.hstatic.net/200000459373/product/untitled_design__5__f8e03b03d3e84f33858dd2058851d090_large.jpg',
        name: 'Canh bí đỏ tròn thịt xay 300g',
        price: '32,800₫'
      },
      {
        img: 'https://product.hstatic.net/200000459373/product/untitled_design__4__a60e0a1d092d45ec8536d6f1d7e36973_large.jpg',
        name: 'Cánh gà 500g- Sanha ',
        price: '32,800₫'
      },
      {
        img: 'https://product.hstatic.net/200000459373/product/untitled_design__3__96ad1587d67b4504b64caef1f4fd7750_large.jpg',
        name: 'Canh khoai mỡ vỉ 300g',
        price: '32,800₫'
      },
      {
        img: 'https://product.hstatic.net/200000459373/product/untitled_design__14__e585692a9ac945c1b0b8e17baa4a99d1_large.jpg',
        name: 'Cánh gà 500g- Sanha ',
        price: '32,800₫'
      },
      {
        img: 'https://product.hstatic.net/200000459373/product/chan-ga-khay-500g-10-12-cai-202111261947224471_b019622330b741998c462aa303c53a22_large.jpg',
        name: 'Chân gà tươi C.P khay 500g (10-12 cái)',
        price: '32,800₫'
      }
    ]
  },
  {
    title: 'Rau củ quả',
    products: [
      {
        img: 'https://product.hstatic.net/200000459373/product/tai_xuong__9__e20bf99465594802829fb0178e95d85d_large.jpg',
        name: 'Cá hú tươi 500g',
        price: '32,800₫'
      },
      {
        img: 'https://product.hstatic.net/200000459373/product/untitled_design__5__f8e03b03d3e84f33858dd2058851d090_large.jpg',
        name: 'Canh bí đỏ tròn thịt xay 300g',
        price: '32,800₫'
      },
      {
        img: 'https://product.hstatic.net/200000459373/product/untitled_design__4__a60e0a1d092d45ec8536d6f1d7e36973_large.jpg',
        name: 'Cánh gà 500g- Sanha ',
        price: '32,800₫'
      },
      {
        img: 'https://product.hstatic.net/200000459373/product/untitled_design__3__96ad1587d67b4504b64caef1f4fd7750_large.jpg',
        name: 'Canh khoai mỡ vỉ 300g',
        price: '32,800₫'
      },
      {
        img: 'https://product.hstatic.net/200000459373/product/untitled_design__14__e585692a9ac945c1b0b8e17baa4a99d1_large.jpg',
        name: 'Cánh gà 500g- Sanha ',
        price: '32,800₫'
      },
      {
        img: 'https://product.hstatic.net/200000459373/product/chan-ga-khay-500g-10-12-cai-202111261947224471_b019622330b741998c462aa303c53a22_large.jpg',
        name: 'Chân gà tươi C.P khay 500g (10-12 cái)',
        price: '32,800₫'
      }
    ]
  }]
  return (
    <div className='home'>
      <div className='carousel-banner'>
        <Slider {...settings}>
          {
            carouselBanner.map((el, index)=>
            <div>
              <img src={el.img} height={300}/>
            </div>)
          }
        </Slider>
      </div>
      {
        data.map((el, index) => {
          return (
            <SectionProduct data={el}/>
          )
        })
      }
    </div>
  );
}

export default Home;
