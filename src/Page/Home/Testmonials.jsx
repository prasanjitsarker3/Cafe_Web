import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testmonials = () => {
    const [review, setReview] = useState([])
    fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    return (
        <div>
            <SectionTitle subHeading={"---What Our Clients Say---"} heading={"TESTIMONIALS"}></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {/* <SwiperSlide>Slide 1</SwiperSlide> */}
                {
                    review.map(review => <SwiperSlide key={review._id}>
                        <div className="m-24 flex justify-center items-center">
                            <div className=" m-24 flex flex-col items-center">
                                <Rating
                                    className="flex justify-center items-center text-center"
                                    style={{ maxWidth: 130 }}
                                    value={review.rating} 
                                    readOnly
                                />
                                <p>{review.details}</p>
                                <h3 className="text-2xl text-orange-400">{review.name}</h3>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Testmonials;