import React from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 cursor-pointer z-10"
            onClick={onClick}
        >
            <FaArrowRight size={20} />
        </div>
    );
};

// Custom Prev Arrow Component
const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 cursor-pointer z-10"
            onClick={onClick}
        >
            <FaArrowLeft size={20} />
        </div>
    );
};

const LeaderboardCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="w-full max-w-lg mx-auto relative">
            <Slider {...settings}>
                {/* Slide 1 */}
                <div className="flex items-center justify-center w-full h-[120px] rounded-lg relative">
                    <img
                        src="https://res.cloudinary.com/green-valley-grocery/image/upload/v1718298355/answer_img/xn446ck6ioag03in3vlc.png"
                        alt="Banner 1"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Slide 2 */}
                <div className="flex items-center justify-center w-full h-[120px] rounded-lg relative">
                    <img
                        src="https://res.cloudinary.com/green-valley-grocery/image/upload/v1718298355/answer_img/xn446ck6ioag03in3vlc.png"

                        alt="Banner 2"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Add more slides as needed */}
            </Slider>
        </div>
    );
};

export default LeaderboardCarousel;
