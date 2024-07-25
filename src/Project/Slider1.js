import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

function Slider1() {
  return (
    <div
      style={{
        paddingTop: "500px",
        paddingLeft: "10rem",
        paddingRight: "10rem",
        height: "860px",
      }}
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{ height: "280px", width: "280px" }}>
          <Link to="/">
            <img
              src="#"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p style={{ color: "black", fontWeight: "600" }}>BALI</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "280px", width: "280px" }}>
          <Link to="/">
            <img
              src="#"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p style={{ color: "black", fontWeight: "600" }}>AUSTRALIA</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "280px", width: "280px" }}>
          <Link to="/">
            <img
              src="#"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p style={{ color: "black", fontWeight: "600" }}>BRAZIL</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "280px", width: "280px" }}>
          <Link to="/">
            <img
              src="#"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p style={{ color: "black", fontWeight: "600" }}>SOUTH AFRICA</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "280px", width: "280px" }}>
          <Link to="/">
            <img
              src="#"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p style={{ color: "black", fontWeight: "600" }}>MALDIVES</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "280px", width: "280px" }}>
          <Link to="/">
            <img
              src="#"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p style={{ color: "black", fontWeight: "600" }}>VIETNAM</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "280px", width: "280px" }}>
          <Link to="/">
            <img
              src="#"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p style={{ color: "black", fontWeight: "600" }}>GREECE</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "280px", width: "280px" }}>
          <Link to="/">
            <img
              src="#"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p style={{ color: "black", fontWeight: "600" }}>RUSSIA</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "280px", width: "280px" }}>
          <Link to="/">
            <img
              src="#"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p style={{ color: "black", fontWeight: "600" }}>JAPAN</p>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider1;
