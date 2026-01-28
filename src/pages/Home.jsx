import { useEffect } from "react";
import ProductSlider from "../components/ProductSlider";
import BestSellers from "../components/BestSellers";
import { Link } from "react-router-dom";
import MainProductRail from "../components/MainProductRail";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const scalevariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <section className="relative">
        <video
          className="h-96 w-full object-cover lg:h-auto"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/home_banner.webm" type="video/webm" />
          <source src="/images/home_banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-8 flex w-full flex-col items-center lg:bottom-20">
          <h2 className="text-center text-2xl font-bold uppercase text-black lg:text-6xl">
            We Make Your Journey Beautiful
          </h2>
          <button className="mt-2 rounded-lg bg-primary-500 px-4 py-1 text-base font-semibold uppercase text-white transition-colors duration-200 hover:bg-primary-600 lg:mt-5 lg:py-2 lg:text-2xl">
            Explore
          </button>
        </div>
      </section>
      <MainProductRail />
      <section className="relative">
        <img
          src="/images/home_section_banner1.webp"
          className="h-60 w-full object-cover object-right lg:h-auto"
        />
        <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 p-3">
          <div className="container mx-auto grid grid-cols-12">
            <motion.div
              className="col-span-5 flex flex-col items-center"
              variants={scalevariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-center text-xl font-semibold uppercase leading-normal text-black lg:text-6xl lg:leading-snug">
                Enjoy Smart
                <br />
                Pumbing Life
              </h2>
              <button className="mt-2 rounded-full bg-primary-500 px-4 py-1 text-sm font-semibold uppercase text-white transition-colors duration-200 hover:bg-primary-600 lg:mt-5 lg:px-12 lg:py-4 lg:text-3xl">
                <Link to="/breast-pumbs">Explore More</Link>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-primary-50 py-6 lg:py-12">
        <h2 className="mb-5 text-center text-xl font-bold uppercase text-zinc-700 lg:mb-8 lg:text-5xl">
          Featured Products
        </h2>
        <ProductSlider />
      </section>
      <section className="bg-white pb-6 pt-6 lg:pb-28 lg:pt-12">
        <div className="container mx-auto">
          <h2 className="mb-2 text-center text-xl font-bold uppercase text-zinc-700 lg:mb-5 lg:text-5xl">
            Best Sellers
          </h2>
          <p className="mx-auto mb-4 w-full text-center text-xs leading-relaxed text-zinc-500 lg:mb-12 lg:text-lg lg:leading-loose">
            Turtees, the epitome of comfort and care for babies, offers a
            comprehensive range of baby essentials. Our feeding bottles are
            designed with precision to provide a seamless feeding experience.
            Engage and stimulate your little one’s development with our
            enchanting toys. For on-the-go convenience, explore our travel gear
            collection.
          </p>
          <BestSellers />
        </div>
      </section>
      <section className="relative">
        <img
          src="/images/home_section_banner2.webp"
          className="h-60 w-full object-cover lg:h-auto"
        />
        <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 p-3">
          <div className="container mx-auto grid grid-cols-12">
            <motion.div
              className="col-span-5 flex flex-col items-center"
              variants={scalevariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-center text-xl font-semibold uppercase leading-normal text-white lg:text-6xl lg:leading-snug">
                Smooth Rides,
                <br />
                Stylish Gear
              </h2>
              <button className="mt-2 rounded-full bg-primary-500 px-4 py-1 text-sm font-semibold uppercase text-white transition-colors duration-200 hover:bg-primary-600 lg:mt-5 lg:px-12 lg:py-4 lg:text-3xl">
                Explore More
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
