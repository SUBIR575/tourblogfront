import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import "swiper/css/effect-fade";
import imageone from '../../Assets/images/7.jpg'
import imagetwo from '../../Assets/images/8.jpg'
import imagethree from '../../Assets/images/9.jpg'
import { Image } from "react-bootstrap";

const MainSlider = () => {
  return (
    <>
      <div className="banner-section" style={{position:'relative'}}>
        <div className="plane" style={{marginTop:'40px'}}>
          <Image
            src="https://astrip-react.vercel.app/assets/images/icons/banner-plane.svg"
            alt="plane"
          />
        </div>
        <div className="cloud1" style={{marginTop:'20px'}}>
          <Image
            src="https://astrip-react.vercel.app/assets/images/icons/cloud2.svg"
            alt="plane"
          />
        </div>
        <div className="cloud2" style={{marginTop:'140px'}}>
          <Image
            src="https://astrip-react.vercel.app/assets/images/icons/cloud1.svg"
            alt="plane"
          />
        </div>
      </div>
      <div style={{ zIndex: "-2" }}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="main-slider">
              <div className="left-text color-border">
                <Image
                  src="https://www.pngmart.com/files/17/Travel-PNG-Pic.png"
                  rounded
                  width="400px"
                  alt="image"
                />
              </div>
              <div className="right-text ">
                <div className="slider-text">
                  <p>Hello This is Tour Blog</p>
                  <button className="slider-btn">click here</button>
                </div>
              </div>
            </div>
            <Image
              src={imageone}
              className="slider-back"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="main-slider">
              <div className="left-text color-border">
                <Image
                  src="https://www.pngmart.com/files/17/Summer-Trip-Transparent-PNG.png"
                  rounded
                  width="400px"
                  alt="image"
                />
              </div>
              <div className="right-text ">
                <div className="slider-text">
                  <p>Hello This is Tour Blog</p>
                  <button className="slider-btn">click here</button>
                </div>
              </div>
            </div>
            <Image
              src={imagetwo}
              className="slider-back"
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="main-slider">
              <div className="left-text color-border">
                <Image
                  src="https://www.pngmart.com/files/4/Travel-Transparent-Background.png"
                  rounded
                  width="400px"
                  alt="image"
                />
              </div>
              <div className="right-text ">
                <div className="slider-text">
                  <p>Hello This is Tour Blog</p>
                  <button className="slider-btn">click here</button>
                </div>
              </div>
            </div>
            <Image
              src={imagethree}
              className="slider-back"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MainSlider;
