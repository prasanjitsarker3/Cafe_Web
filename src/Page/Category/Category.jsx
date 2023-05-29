import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import category1 from '../../assets/home/slide1.jpg'
import category2 from '../../assets/home/slide2.jpg'
import category3 from '../../assets/home/slide3.jpg'
import category4 from '../../assets/home/slide4.jpg'
import category5 from '../../assets/home/slide5.jpg'
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <div className="py-5 px-12">
            <SectionTitle subHeading={"From 11.00 am to 10.00 pm"} heading={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={25}
                centeredSlides={true}
                
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={category1} alt="" className="rounded  " />
                    <p className="uppercase md:text-lg text-white font-bold -mt-10 text-center">salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category2} alt="" className="rounded " />
                    <p className="uppercase md:text-lg text-white font-bold -mt-20 text-center">soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category3} alt="" className="rounded " />
                    <p className="uppercase md:text-lg text-white font-bold -mt-20 text-center">pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category4} alt="" className="rounded " />
                    <p className="uppercase md:text-lg text-white font-bold -mt-20 text-center">desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category5} alt="" className="rounded  " />
                    <p className="uppercase md:text-lg text-white font-bold -mt-20 text-center">salads</p>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;