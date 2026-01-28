// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: index * 0.2 },
  }),
};

const InstaPosts = () => {
  const images = [
    "/images/insta_links/1.webp",
    "/images/insta_links/2.webp",
    "/images/insta_links/3.webp",
    "/images/insta_links/4.webp",
    "/images/insta_links/5.webp",
  ];

  return (
    <section className="bg-primary-50 px-3 py-6 lg:px-0 lg:py-12">
      <div className="container mx-auto">
        <h2 className="mb-2 text-center text-xl font-bold uppercase text-zinc-700 lg:mb-5 lg:text-5xl">
          The Edit
        </h2>
        <p className="mx-auto mb-5 w-full text-center text-xs leading-relaxed text-zinc-500 lg:mb-12 lg:text-lg lg:leading-loose">
          The Edit is here to guide you through this incredible journey. We work
          with parenting experts to offer the advice and support you really
          need, talk to parents about their real-life experiences – plus there’s
          a whole lot of inspiration and escapism too.
        </p>
        <div className="grid w-full grid-cols-5 gap-x-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <a className="block transform transition-transform duration-300 lg:hover:rotate-[-2deg]">
                <img src={src} alt={`Instagram Link ${index + 1}`} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstaPosts;
