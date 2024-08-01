import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

function Slider1() {
  return (
    <div
     className="mm"
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
     <SwiperSlide className="swiper-slide" style={{ height: "280px", width: "280px" }}>
    <Link to="/">
      <img
        src="ladakh.jpg"
        alt="coming soon..."
      />
      <p className="content" style={{ fontSize: "24px" }}>Ladakh</p>
    </Link>
  </SwiperSlide>
        <SwiperSlide style={{ height: "280px", width: "280px" }}>
          <Link to="/">
            <img
              src="jandk.jpg"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p  className="content" style={{    fontSize: "24px" }}>jammu&Kashmir</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "280px", width: "280px" }}>
          <Link to="/">
            <img
              src="handp.jpg"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p  className="content" style={{  fontSize: "24px" }}>Himachal Pradesh</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "280px", width: "280px" }}>
          <Link to="/">
            <img
              src="meghalaya.jpg"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p  className="content" style={{fontSize: "24px" }}>Meghalaya</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "280px", width: "280px" }}>
          <Link to="/">
            <img
              src="mp.jpeg"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p  className="content" style={{ fontSize: "24px" }}>MadhyaPradesh</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "280px", width: "280px" }}>
          <Link to="/">
            <img
              src="gujrat.jpg"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p  className="content" style={{ fontSize: "24px" }}>Gujrat</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "280px", width: "280px" }}>
          <Link to="/">
            <img
              src="keral.jpg"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p  className="content" style={{ fontSize: "24px"  }}>Keral</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "280px", width: "280px" }}>
          <Link to="/">
            <img
              src="tamilnadu.jpg"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p  className="content" style={{ fontSize: "24px"  }}>TamilNadu</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ height: "280px", width: "280px" }}>
          <Link to="/">
            <img
              src="up.jpg"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p  className="content" style={{ fontSize: "24px"  }}>UttarPradesh</p>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider1;
