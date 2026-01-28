import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.1 },
  }),
};

const products = [
  {
    id: 1,
    name: "Manual Breast Pump",
    image: "/images/breast_pumbs/products/1.png",
  },
  {
    id: 2,
    name: "Breast Milk Collector",
    image: "/images/breast_pumbs/products/2.png",
  },
  { id: 3, name: "Breast Pad", image: "/images/breast_pumbs/products/3.png" },
  {
    id: 4,
    name: "Silicone Milk Storage",
    image: "/images/breast_pumbs/products/4.png",
  },
  {
    id: 5,
    name: "Milk Storage Holder",
    image: "/images/breast_pumbs/products/5.png",
  },
  {
    id: 6,
    name: "Milk Storage Bag",
    image: "/images/breast_pumbs/products/6.png",
  },
  {
    id: 7,
    name: "Silver Cups 999",
    image: "/images/breast_pumbs/products/7.png",
  },
  {
    id: 8,
    name: "Lactation Massager",
    image: "/images/breast_pumbs/products/8.png",
  },
];

const BreastPumpProducts = () => {
  return (
    <section className="bg-white px-3 py-6 lg:py-12">
      <div className="container mx-auto">
        <h2 className="mb-5 text-center text-xl font-bold uppercase text-zinc-700 lg:text-4xl">
          Continue to explore breast pumps
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-5 md:grid-cols-4 lg:mt-10 lg:gap-14">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="flex flex-col items-center"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-5/6 object-contain"
              />
              <h3 className="py-4 text-center text-base font-medium uppercase text-black lg:text-2xl">
                {product.name}
              </h3>
              <button className="rounded-3xl bg-primary-500 px-4 py-2 text-sm font-semibold uppercase text-white transition-colors duration-200 hover:bg-primary-600 lg:px-8 lg:py-3 lg:text-xl">
                Explore
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreastPumpProducts;
