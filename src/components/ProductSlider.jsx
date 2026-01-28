import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const ProductSlider = () => {
  const products = [
    {
      image: "/images/home_slider/baby_food_processor.webp",
      title: "Food Processor",
    },
    {
      image: "/images/home_slider/baby_bottle_warmer.webp",
      title: "Bottle& food Warmer",
    }, 
    { image: "/images/home_slider/breastpad.webp", title: "Reusable nursing pad" },
    { image: "/images/home_slider/nipple_shields.webp", title: "Silver nipple cup" },
    { image: "/images/home_slider/shaper.webp", title: "Postpartum boxer" },
    { image: "/images/home_slider/baby_bottle_brush.webp", title: "Bottle brush" },
    { image: "/images/home_slider/baby_bath_tub.webp", title: "Bath supports" },
  ];

  return (
    <Swiper
      loop={true}
      speed={3000} // Controls smoothness
      autoplay={{ delay: 0, disableOnInteraction: false }}
      allowTouchMove={false} // Prevents manual dragging
      modules={[Autoplay]}
      className="mySwiper"
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 10 }, // 2 slides for mobile screens
        1024: { slidesPerView: 4, spaceBetween: 30 }, // 4 slides for desktop
      }}
    >
      {products.concat(products).map(
        (
          product,
          index, // Duplicate items for seamless effect
        ) => (
          <SwiperSlide key={index} className="bg-white text-center">
            <img src={product.image} alt={product.title} className="w-full" />
            <div className="flex w-full items-center justify-between p-4">
              <h3 className="text-left text-sm font-semibold uppercase text-black lg:text-xl">
                {product.title}
              </h3>
              <button className="rounded-full bg-teal-500 px-2 py-0 text-base font-bold leading-relaxed text-white transition-colors duration-200 hover:bg-primary-600 lg:px-3 lg:py-1 lg:text-2xl lg:leading-normal">
                +
              </button>
            </div>
          </SwiperSlide>
        ),
      )}
    </Swiper>
  );
};

export default ProductSlider;
