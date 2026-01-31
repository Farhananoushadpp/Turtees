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
          className="h-48 w-full object-cover sm:h-56 md:h-60 lg:h-auto"
        />
        <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 p-2 sm:p-3 md:p-4">
          <div className="container mx-auto grid grid-cols-12">
            <div
              className="col-span-12 flex flex-col items-start text-left sm:col-span-10 md:col-span-8 lg:col-span-5 lg:items-start lg:text-left"
            >
              <h2 className="text-left text-lg font-semibold uppercase leading-snug text-primary-800 sm:text-xl md:text-2xl lg:text-left lg:text-6xl lg:leading-tight">
                BABY FOOD 
                <br />
                PROCESSOR
              </h2>
              <h6 className="mt-1 text-left text-base leading-snug text-primary-800 sm:mt-2 sm:text-lg md:mt-3 md:text-xl lg:mt-3 lg:text-left lg:text-4xl">
                Fresh meals. One touch.
                <br />
                Zero stress
              </h6>
              
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-3 lg:pb-12 lg:pt-12">
        <div className="container mx-auto">
          <h2 className="text-center text-lg font-bold uppercase text-zinc-700 sm:text-xl md:text-2xl lg:text-5xl">
            Hightlights
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 lg:mt-10 lg:grid-cols-2 lg:gap-12">
            <div className="relative overflow-hidden">
              <img
                className="h-40 w-full transform rounded-xl object-cover transition-transform duration-300 ease-in-out sm:h-48 md:h-56 lg:h-auto lg:rounded-3xl lg:hover:scale-105"
                src="/images/baby_foods/Highlight 1.webp"
                alt=""
              />
              <motion.h2
                className="absolute left-3 top-3 flex justify-center text-center text-sm font-medium uppercase leading-normal text-white sm:left-4 sm:top-4 sm:text-base md:left-5 md:top-5 md:text-lg lg:left-9 lg:text-left lg:text-4xl"
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
                className="h-40 w-full transform rounded-xl object-cover transition-transform duration-300 ease-in-out sm:h-48 md:h-56 lg:h-auto lg:rounded-3xl lg:hover:scale-105"
                src="/images/baby_foods/Highlight 2.webp"
                alt=""
              />
              <motion.h2
                className="absolute left-3 top-3 flex justify-center text-center text-sm font-medium uppercase leading-normal text-primary-800 sm:left-4 sm:top-4 sm:text-base md:left-5 md:top-5 md:text-lg lg:left-9 lg:text-left lg:text-4xl"
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
                className="h-40 w-full transform rounded-xl object-cover transition-transform duration-300 ease-in-out sm:h-48 md:h-56 lg:h-auto lg:rounded-3xl lg:hover:scale-105"
                src="/images/baby_foods/Highlight 3.webp"
                alt=""
              />
              <motion.h2
                className="absolute left-3 bottom-3 flex justify-center text-center text-sm font-medium uppercase leading-normal text-primary-800 sm:left-4 sm:bottom-4 sm:text-base md:left-5 md:bottom-5 md:text-lg lg:left-9 lg:text-left lg:text-4xl"
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
                className="h-40 w-full transform rounded-xl object-cover transition-transform duration-300 ease-in-out sm:h-48 md:h-56 lg:h-auto lg:rounded-3xl lg:hover:scale-105"
                src="/images/baby_foods/Highlight 4.webp"
                alt=""
              />
              <motion.h2
                className="absolute left-3 top-3 flex justify-center text-center text-sm font-medium uppercase leading-normal text-white sm:left-4 sm:top-4 sm:text-base md:left-5 md:top-5 md:text-lg lg:left-9 lg:text-left lg:text-4xl"
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
      <section className="bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-3 lg:pt-12">
        <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-12 lg:gap-x-12">
          <div className="relative col-span-1 lg:col-span-6">
            <img
              src="/images/baby_foods/blendermode.webp"
              className="h-48 w-full rounded-2xl object-cover sm:h-56 md:h-64 lg:h-auto lg:w-full lg:rounded-3xl"
            />
            <motion.div
              className="absolute right-4 top-4 w-full max-w-xs text-right sm:right-6 sm:top-6 md:right-8 md:top-8 lg:right-10 lg:top-5 lg:w-auto lg:text-right"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-right text-sm font-medium uppercase leading-snug text-primary-800 sm:text-base md:text-lg md:font-semibold lg:text-right lg:text-5xl lg:font-semibold lg:text-primary-800 lg:leading-tight">
                THOUGHTFULLY
                <br />
                BLENDED FOR
                <br />
                EVERY STAGE
              </h2>
            </motion.div>
          </div>
          <div className="relative col-span-1 lg:col-span-6">
            <img
              src="/images/baby_foods/blenderfeatures.webp"
              className="h-48 w-full rounded-2xl object-cover sm:h-56 md:h-64 lg:h-auto lg:w-full lg:rounded-3xl"
            />
            <motion.div
              className="absolute left-4 top-4 w-full max-w-xs text-left sm:left-6 sm:top-6 md:left-8 md:top-8 lg:left-10 lg:top-5 lg:w-auto lg:text-left"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-left text-sm font-medium uppercase leading-snug text-primary-800 sm:text-base md:text-lg md:font-semibold lg:text-left lg:text-5xl lg:font-semibold lg:text-primary-800 lg:leading-tight">
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
      <section className="bg-white px-4 py-8 relative mx-auto sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-3 lg:py-16">
        <div className="container relative mx-auto">
          <img
            src="/images/baby_foods/realsmooth.webp"
            className="h-48 w-full rounded-2xl object-cover sm:h-56 md:h-64 lg:h-auto lg:rounded-3xl"
          />
          <motion.div
            className="absolute left-4 top-4 w-full max-w-xs sm:left-6 sm:top-6 md:left-8 md:top-8 lg:left-20 lg:top-10 lg:w-auto lg:max-w-md"
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-start text-left lg:items-start lg:text-left">
              <h2 className="text-left text-sm font-extrabold uppercase text-black sm:text-base md:text-lg lg:text-left lg:text-5xl">
                "REAL FOOD. REAL FAST.
                <br/>
                REAL SMOOTH."
              </h2>
              <h6 className="mt-1 text-left text-xs text-black sm:mt-2 sm:text-sm md:mt-3 md:text-base lg:mt-3 lg:text-left lg:text-3xl">
                Powerful blending for smooth,
                <br/>
                homemade meals.
              </h6>
              <h6 className="mt-2 text-left text-xs leading-normal text-black sm:mt-3 sm:text-sm md:mt-4 md:text-base lg:mt-14 lg:text-left lg:text-3xl">
                Precision Blade Perfomance
              </h6>
              <p className="text-left text-xs text-black sm:text-xs md:text-sm lg:text-left lg:text-base">
                S Shaped Blade for consistent blending
                <br/>
                Easily detachable for quick
                <br/>
                and through cleaning
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-3 lg:pb-16">
        <div className="container relative mx-auto">
          <img
            src="/images/baby_foods/motherhood.webp"
            className="h-48 w-full rounded-2xl object-cover sm:h-56 md:h-64 lg:h-auto lg:rounded-3xl"
          />
          <motion.div
            className="absolute left-4 top-8 w-full max-w-xs sm:left-6 sm:top-12 md:left-8 md:top-16 lg:left-10 lg:top-20"
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-start text-left lg:items-start lg:text-left">
              <h2 className="text-left text-sm font-extrabold uppercase text-black sm:text-base md:text-lg lg:text-left lg:text-5xl">
                MOTHERHOOD,
                <br/>
                MADE SIMPLER
              </h2>
              <h6 className="mt-1 text-left text-xs text-black sm:mt-2 sm:text-sm md:mt-3 md:text-base lg:mt-3 lg:text-left lg:text-3xl">
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
