import React from "react";

const bannerContent = (
  <div className="absolute flex items-end h-full w-full bg-gradient-to-b from-[rgba(0, 0, 0, 0.41)] to-[rgba(0, 0, 0, 0.00)] rounded-xl bg-gray-600/20 ">
    <div className="space-y-5 text-white p-10">
      <h1 className="font-bold text-6xl">
        Affordable Clothes For You Everyone
      </h1>
      <p className="text-2xl">
        There are many variations of passages of available, but the majority
        have suffered alteration in some form
      </p>
      <div>
        <button className="btn btn-primary mr-3 bg-[#0058A0]">
          Discover More
        </button>
        <button className="btn btn-outline border-white border text-white">
          Latest Products
        </button>
      </div>
    </div>
  </div>
);

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoaW5nJTIwc3RvcmV8ZW58MHwwfDB8fHww"
          className="w-full rounded-xl object-cover"
        />
        {bannerContent}
        <div className="btn_indicator">
          <a href="#slide4" className="btn btn-circle bg-[#0058A0]">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-[#0058A0]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfDB8MHx8fDA%3D"
          className="w-full rounded-xl object-cover"
        />
        {bannerContent}
        <div className="btn_indicator">
          <a href="#slide1" className="btn btn-circle bg-[#0058A0]">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-[#0058A0]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1637666532931-b835a227b955?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoaW5nJTIwc3RvcmV8ZW58MHwwfDB8fHww"
          className="w-full rounded-xl object-cover"
        />
        {bannerContent}
        <div className="btn_indicator">
          <a href="#slide2" className="btn btn-circle bg-[#0058A0]">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-[#0058A0]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoaW5nJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D"
          className="w-full rounded-xl object-cover"
        />
        {bannerContent}
        <div className="btn_indicator">
          <a href="#slide3" className="btn btn-circle bg-[#0058A0]">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-[#0058A0]">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
