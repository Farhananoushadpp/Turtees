import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const products = [
  {
    imgSrc: "/images/product_rails/bath_potty.webp",
    title: "Bath & Potty Time",
    description:
      "Keep your little one clean, comfy, and happy with our gentle, safe, and ultra-absorbent bath & potty essentials, designed for the best care every day!",
    link: "#",
  },
  {
    imgSrc: "/images/product_rails/breast_pumbs.webp",
    title: "Breast Pumps",
    description:
      "A breast pump helps mothers express and store milk, maintain supply, and offers flexibility for feeding schedules, ensuring convenience.",
    link: "/breast-pumbs",
  },
  {
    imgSrc: "/images/product_rails/feeding bottle.webp",
    title: "Feeding Bottle",
    description:
      "Our feeding bottles are safe, BPA-free, durable, easy to clean, and designed for comfortable feeding, ensuring a hassle-free and enjoyable experience.",
    link: "/feeding-bottles",
  },
  {
    imgSrc: "/images/product_rails/baby_rattles.webp",
    title: "Baby Rattles",
    description:
      "Our baby rattles are safe, colorful, lightweight, and designed to stimulate sensory development for infants, helping them explore, learn, and have fun.",
    link: "#",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: index * 0.2 },
  }),
};

const MainProductRail = () => {
  return (
    <section className="bg-white px-3 py-6 lg:px-10 lg:py-10">
      <div className="container mx-auto grid grid-cols-12 gap-x-3 gap-y-4 lg:gap-x-4 lg:gap-y-0">
        {products.map(({ imgSrc, title, description, link }, index) => (
          <motion.div
            key={title}
            className="col-span-6 lg:col-span-3"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <Link to={link}>
              <div className="group grid transform gap-y-2 rounded-2xl p-0 text-center transition-transform duration-300 ease-in-out lg:gap-y-3 lg:p-3 lg:hover:scale-105 lg:hover:bg-primary-500">
                <img
                  className="mb-2 w-full rounded-2xl object-cover sm:mb-3 md:mb-4 lg:mb-2"
                  src={imgSrc}
                  alt={title}
                />
                <h2 className="mb-1 text-sm font-semibold uppercase text-black sm:mb-2 sm:text-base md:text-lg lg:mb-2 lg:text-xl">
                  {title}
                </h2>
                <p className="mb-2 text-xs leading-relaxed text-black sm:mb-3 sm:text-sm md:text-base lg:mb-3 lg:text-base lg:leading-normal">
                  {description}
                </p>
                <button className="mx-auto w-auto rounded-3xl bg-primary-500 px-3 py-1.5 text-xs font-bold uppercase text-white transition-colors duration-300 hover:bg-primary-600 sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2.5 md:text-base lg:px-4 lg:py-2 lg:text-sm lg:group-hover:bg-white lg:group-hover:text-primary-500">
                  Explore More
                </button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MainProductRail;
