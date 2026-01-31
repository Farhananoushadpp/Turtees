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
        320: { slidesPerView: 2, spaceBetween: 8 }, // 2 slides for small mobile
        480: { slidesPerView: 2, spaceBetween: 12 }, // 2 slides for mobile
        640: { slidesPerView: 3, spaceBetween: 15 }, // 3 slides for large mobile
        768: { slidesPerView: 3, spaceBetween: 20 }, // 3 slides for tablet
        1024: { slidesPerView: 4, spaceBetween: 25 }, // 4 slides for desktop
        1280: { slidesPerView: 5, spaceBetween: 30 }, // 5 slides for large desktop
      }}
    >
      {products.concat(products).map(
        (
          product,
          index, // Duplicate items for seamless effect
        ) => (
          <SwiperSlide key={index} className="bg-white text-center">
            <img src={product.image} alt={product.title} className="h-32 w-32 mx-auto mb-4 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-44 lg:w-44" />
            <div className="flex w-full items-center justify-between px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6 lg:px-5 lg:py-5">
              <h3 className="text-left text-sm font-semibold uppercase text-black sm:text-base md:text-lg lg:text-xl">
                {product.title}
              </h3>
              <button className="rounded-full bg-teal-500 px-3 py-2 text-sm font-bold leading-relaxed text-white transition-colors duration-200 hover:bg-primary-600 sm:px-4 sm:py-2.5 sm:text-base md:px-4 md:py-3 md:text-lg lg:px-4 lg:py-2 lg:text-2xl lg:leading-normal">
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
