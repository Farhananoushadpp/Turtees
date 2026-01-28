import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const BabyFoods = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scalevariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main>
      <section className="relative mx-auto">
        <img
          src="/images/baby_foods/babyfoodbanner.webp"
          className="h-60 w-full object-cover lg:h-auto"
        />
        <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 p-3">
          <div className="container mx-auto grid grid-cols-12">
            <div
              className="col-span-5 flex flex-col items-start"
            >
              <h2 className="text-left text-2xl font-semibold uppercase leading-snug text-primary-800 lg:text-left lg:text-6xl lg:leading-tight">
                BABY FOOD 
                <br />
                PROCESSOR
              </h2>
              <h6 className="mt-1 text-left text-lg leading-snug text-primary-800 lg:mt-3 lg:text-left lg:text-4xl">
                Fresh meals. One touch.
                <br />
                Zero stress
              </h6>
              
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-3 pb-3 pt-6 lg:pb-12 lg:pt-12">
        <div className="container mx-auto">
          <h2 className="text-center text-xl font-bold uppercase text-zinc-700 lg:text-5xl">
            Hightlights
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-2 lg:mt-10 lg:gap-12">
            <div className="relative overflow-hidden">
              <img
                className="h-40 w-full transform rounded-xl object-cover transition-transform duration-300 ease-in-out lg:h-auto lg:rounded-3xl lg:hover:scale-105"
                src="/images/baby_foods/Highlight 1.webp"
                alt=""
              />
              <motion.h2
                className="unset left-3 top-9 my-2 flex justify-center text-center text-base font-medium uppercase leading-normal text-white lg:absolute lg:left-9 lg:my-0 lg:text-left lg:text-4xl"
                 variants={scalevariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                STEAMING FRESH
                <br />
                FOR YOUR BABY
              </motion.h2>
            </div>
            <div className="relative overflow-hidden">
              <img
                className="h-40 w-full transform rounded-xl object-cover transition-transform duration-300 ease-in-out lg:h-auto lg:rounded-3xl lg:hover:scale-105"
                src="/images/baby_foods/Highlight 2.webp"
                alt=""
              />
              <motion.h2
                className="unset left-3 top-9 my-2 flex justify-center text-center text-base font-medium uppercase leading-normal text-primary-800 lg:absolute lg:left-9 lg:my-0 lg:text-left lg:text-4xl"
                 variants={scalevariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                STEAM .
                <br />
                 BLEND.
                 <br />
                 DONE.
              </motion.h2>
            </div>
            <div className="relative overflow-hidden">
              <img
                className="h-40 w-full transform rounded-xl object-cover transition-transform duration-300 ease-in-out lg:h-auto lg:rounded-3xl lg:hover:scale-105"
                src="/images/baby_foods/Highlight 3.webp"
                alt=""
              />
              <motion.h2
                className="unset left-3 bottom-9 my-2 flex justify-center text-center text-base font-medium uppercase leading-normal text-primary-800 lg:absolute lg:left-9 lg:my-0 lg:text-left lg:text-4xl"
                 variants={scalevariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                STEAMING
                <br />
                STARTS HERE
              </motion.h2>
            </div>
            <div className="relative overflow-hidden">
              <img
                className="h-40 w-full transform rounded-xl object-cover transition-transform duration-300 ease-in-out lg:h-auto lg:rounded-3xl lg:hover:scale-105"
                src="/images/baby_foods/Highlight 4.webp"
                alt=""
              />
              <motion.h2
                className="unset left-3 top-9 my-2 flex justify-center text-center text-base font-medium uppercase leading-normal text-white lg:absolute lg:left-9 lg:my-0 lg:text-left lg:text-4xl"
                 variants={scalevariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                ONE-TOUCH
                <br />
                CONTROL
              </motion.h2>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-3 pt-6 lg:pt-12">
        <div className="container mx-auto grid grid-cols-12 gap-x-3 lg:gap-x-12">
          <div className="relative col-span-6">
            <img
              src="/images/baby_foods/blendermode.webp"
              className="w-full rounded-3xl"
            />
            <motion.div
              className="static right-5 top-5 w-full md:absolute lg:right-10"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="mt-3 text-right text-base font-medium uppercase leading-snug text-primary-800 md:mt-0 md:text-right md:text-5xl md:font-semibold md:text-primary-800 lg:leading-tight">
                THOUGHTFULLY
                <br />
                BLENDED FOR
                <br />
                EVERY STAGE
              </h2>
            </motion.div>
          </div>
          <div className="relative col-span-6">
            <img
              src="/images/baby_foods/blenderfeatures.webp"
              className="w-full rounded-3xl"
            />
            <motion.div
              className="static left-5 top-5 w-full md:absolute lg:left-10"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="mt-3 text-left text-base font-medium uppercase leading-snug text-primary-800 md:mt-0 md:text-left md:text-5xl md:font-semibold md:text-primary-800 lg:leading-tight">
                 MADE
                <br />
                 WITH CARE.
                 <br/>
                 BUILT FOR BABIES.
              </h2>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-white px-3 py-12 relative mx-auto lg:py-16">
        <div className="container relative mx-auto">
          <img
            src="/images/baby_foods/realsmooth.webp"
            className="h-56 w-full rounded-3xl object-cover lg:h-auto"
          />
          <motion.div
            className="absolute left-7 top-7 w-full lg:left-10 lg:top-10"
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="col-span-5 flex flex-col items-start">
              <h2 className="text-left text-xl font-extrabold uppercase text-black lg:text-5xl">
                "REAL FOOD. REAL FAST.
                <br/>
                REAL SMOOTH."
              </h2>
              <h6 className="mt-3 text-left text-lg text-black lg:text-3xl">
                Powerful blending for smooth,
                <br/>
                homemade meals.
              </h6>
              <h6 className="mt-4 text-left text-base leading-normal text-black lg:mt-14 lg:text-3xl">
                Precision Blade Perfomance
              </h6>
              <p className="text-left text-black ">S Shaped Blade for consistent blending
                <br/>
                Easily detachable for quick
                <br/>
                and through cleaning
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="bg-white px-3 pb-12 lg:pb-16">
        <div className="container relative mx-auto">
          <img
            src="/images/baby_foods/motherhood.webp"
            className="h-56 w-full rounded-3xl object-cover lg:h-auto"
          />
          <motion.div
            className="absolute left-7 top-20 w-full lg:left-10 lg:top-20"
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="col-span-5 flex flex-col items-start">
              <h2 className="text-left text-xl font-extrabold uppercase text-black lg:text-5xl">
                MOTHERHOOD,
                <br/>
                MADE SIMPLER
              </h2>
              <h6 className="mt-3 text-left text-lg text-black lg:text-3xl">
                One appliance.
                <br/>
                Every feeding stage.
              </h6>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default BabyFoods;
