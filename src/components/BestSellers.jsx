import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const scalevariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const products = [
  {
    img: "/images/best_sellers/feeding_bottles.webp",
    title: "Sip & smile",
    subtitle: "Feeding Bottles",
    description:
      "Our baby bottles feature leak-proof technology, easy-to-clean materials, and a natural nipple shape for safe, comfortable feeding.",
    position: "left-0 lg:left-16",
    link: "/breast-pumbs",
    bg: "bg-[#c2bfb8]",
    text: "text-black",
    button: "text-[#c2bfb8]",
    img_position: "object-right",
  },
  {
    img: "/images/best_sellers/toys.webp",
    title: "Unveiling wonder",
    subtitle: "Toys collections",
    description:
      "Explore our baby toys, designed to stimulate senses, encourage development, and provide hours of safe, colorful fun.",
    position: "right-0 lg:right-16",
    link: "#",
    bg: "bg-[#716d6c]",
    text: "text-white",
    button: "text-[#716d6c]",
    img_position: "object-left",
  },
  {
    img: "/images/best_sellers/bath_products.webp",
    title: "bubble bliss",
    subtitle: "bath products",
    description:
      "Our baby bath products are gentle, safe, and nourish delicate skin with hypoallergenic ingredients for soothing bath time.",
    position: "left-0 lg:left-16",
    link: "#",
    bg: "bg-[#c2bfb8]",
    text: "text-black",
    button: "text-[#c2bfb8]",
    img_position: "object-right",
  },
  {
    img: "/images/best_sellers/moms_collection.webp",
    title: "premium",
    subtitle: "mom’s collection",
    description:
      "Our mom’s baby products use natural ingredients, ensuring comfort, safety, and well-being with every gentle, reliable use.",
    position: "right-0 lg:right-16",
    link: "#",
    bg: "bg-[#716d6c]",
    text: "text-white",
    button: "text-[#716d6c]",
    img_position: "object-left",
  },
  {
    img: "/images/best_sellers/skin_care_products.webp",
    title: "Natural Glow",
    subtitle: "Skin Care products",
    description:
      "Natural care uses pure, gentle ingredients to nourish, protect, and soothe your skin, naturally and safely.",
    position: "left-0 lg:left-16",
    link: "#",
    bg: "bg-[#c2bfb8]",
    text: "text-black",
    button: "text-[#c2bfb8]",
    img_position: "object-right",
  },
  {
    img: "/images/best_sellers/food_warmer.webp",
    title: "Soft Bites",
    subtitle: "Food Warmer & Processor",
    description:
      "Our baby food processor makes fresh, nutritious purees effortlessly, ensuring healthy, homemade meals for your little one.",
    position: "right-0 lg:right-16",
    link: "#",
    bg: "bg-[#716d6c]",
    text: "text-white",
    button: "text-[#716d6c]",
    img_position: "object-left",
  },
];

const ProductCard = ({
  img,
  title,
  subtitle,
  description,
  position,
  link,
  bg,
  text,
  button,
  img_position,
}) => (
  <Link
    className="relative w-full transition-transform duration-300 ease-in-out lg:hover:scale-105"
    to={link}
  >
    <img
      src={img}
      alt={title}
      className={`h-48 w-full rounded-2xl object-cover sm:h-56 md:h-64 lg:h-auto ${img_position}`}
    />
    <motion.div
      className={`relative mx-auto -mt-16 flex h-auto w-11/12 flex-col justify-between rounded-xl sm:-mt-20 sm:w-10/12 md:-mt-24 md:w-9/12 lg:absolute ${position} lg:top-16 lg:-m-0 lg:h-[540px] lg:w-5/12 ${bg} p-3 sm:p-4 md:p-5 lg:p-7`}
      variants={scalevariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div>
        <h3 className="text-sm font-bold uppercase leading-tight sm:text-base md:text-lg lg:text-5xl lg:leading-snug">
          {title}
        </h3>
        <span className="text-sm font-medium uppercase leading-tight sm:text-base md:text-lg lg:text-5xl">
          {subtitle}
        </span>
        <p
          className={`mt-1 text-xs !leading-normal sm:mt-2 sm:text-sm md:mt-3 md:text-base lg:mt-3 lg:text-2xl ${text}`}
        >
          {description}
        </p>
      </div>
      <button
        className={`${button} mt-2 self-start rounded-full bg-white px-2 py-1 text-xs font-bold uppercase transition-colors duration-200 hover:bg-primary-500 hover:text-white sm:mt-3 sm:px-3 sm:py-1.5 sm:text-sm md:mt-4 md:px-4 md:py-2 md:text-base lg:mt-0 lg:px-6 lg:py-2 lg:text-2xl`}
      >
        Explore
      </button>
    </motion.div>
  </Link>
);

export default function BestSellers() {
  return (
    <div className="flex flex-col gap-2 px-4 sm:gap-3 sm:px-6 md:gap-4 md:px-8 lg:flex-wrap lg:gap-12 lg:px-10">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}
