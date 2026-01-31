import BreastPumpProducts from "../components/BreastPumbProducts";
import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const BreastPumbs = () => {
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
      <section className="relative">
        <img
          src="/images/home_section_banner1.webp"
          className="h-72 w-full object-cover lg:h-auto"
        />
        <div className="absolute left-3 top-1/2 w-full -translate-y-1/2 lg:left-0 lg:top-1/2">
          <div className="container mx-auto grid grid-cols-12">
            <motion.div
              className="col-span-7 flex flex-col"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-center text-2xl font-semibold uppercase leading-snug text-primary-800 lg:text-left lg:text-6xl lg:leading-tight">
                Electric
                <br />
                Breast Pumb
              </h2>
              <h6 className="mt-1 text-center text-lg leading-snug text-primary-800 lg:mt-3 lg:text-left lg:text-4xl">
                enjoy smart pumbing life
              </h6>
            </motion.div>
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
                src="/images/breast_pumbs/highlight1.webp"
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
                Feather-light
                <br />
                Comfort
              </motion.h2>
            </div>
            <div className="relative overflow-hidden">
              <img
                className="h-40 w-full transform rounded-xl object-cover transition-transform duration-300 ease-in-out lg:h-auto lg:rounded-3xl lg:hover:scale-105"
                src="/images/breast_pumbs/highlight2.webp"
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
                4 Modes &<br />
                36 Levels
              </motion.h2>
            </div>
            <div className="relative overflow-hidden">
              <img
                className="h-40 w-full transform rounded-xl object-cover transition-transform duration-300 ease-in-out lg:h-auto lg:rounded-3xl lg:hover:scale-105"
                src="/images/breast_pumbs/highlight3.webp"
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
                Heat-assisted
                <br />
                Massage
              </motion.h2>
            </div>
            <div className="relative overflow-hidden">
              <img
                className="h-40 w-full transform rounded-xl object-cover transition-transform duration-300 ease-in-out lg:h-auto lg:rounded-3xl lg:hover:scale-105"
                src="/images/breast_pumbs/highlight4.webp"
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
                Gentle
                <br />
                Heating for
                <br />
                better flow
              </motion.h2>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-3">
        <div className="container relative mx-auto">
          <img
            src="/images/breast_pumbs/banner2.webp"
            className="h-44 w-full rounded-3xl object-cover object-left lg:h-auto"
          />
          <motion.div
            className="absolute left-10 top-10 w-full"
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="col-span-5 flex flex-col">
              <h2 className="text-left text-xl font-semibold uppercase leading-snug text-black lg:text-5xl lg:leading-tight">
                POWERED FOR FREEDOM
              </h2>
              <h6 className="mt-1 text-left text-lg leading-snug text-black lg:mt-3 lg:text-3xl">
                Cordless pumping with long-lasting
                <br />
                battery life to keep up 
                <br />
                with your busy day
              </h6>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="bg-white px-3 py-6 lg:py-12">
        <div className="container mx-auto">
          <h2 className="mb-1 text-center text-xl font-bold uppercase text-zinc-700 lg:mb-5 lg:text-5xl">
            Effortless Extraction
          </h2>
          <h6 className="mb-3 text-center text-base font-medium uppercase text-zinc-700 lg:mb-12 lg:text-3xl">
            Upgrade to Efficiency, Upgrade to Portability
          </h6>
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <video
                className="w-full rounded-3xl"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="/images/breast_pumbs/banner_video.webm"
                  type="video/webm"
                />
                <source
                  src="/images/breast_pumbs/banner_video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <motion.div
              className="col-span-12 pl-0 pt-4 lg:col-span-6 lg:pl-14 lg:pt-10"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-1 text-center text-2xl font-bold uppercase text-zinc-700 lg:mb-5 lg:text-left lg:text-4xl">
                Free Hands
              </h2>
              <h6 className="mb-4 text-center text-lg font-medium uppercase text-zinc-700 lg:mb-12 lg:text-left lg:text-2xl">
                Turtles Wearable Breast Pumb
              </h6>
              <div className="grid grid-cols-2 gap-7 text-center lg:grid-cols-1 lg:gap-16 lg:text-left">
                <div className="hidden md:block">
                  <h2 className="text-2xl font-bold uppercase text-primary-700 lg:text-4xl">
                    246G
                  </h2>
                </div>
                <div>
                  <h2 className="lg;text-4xl text-2xl font-bold uppercase text-primary-700">
                    72 MM
                  </h2>
                  <h6 className="mt-1 text-base font-medium uppercase text-zinc-700 lg:mt-2 lg:text-2xl">
                    Super Thin
                  </h6>
                </div>
                <div>
                  <h2 className="lg;text-4xl text-2xl font-bold uppercase text-primary-700">
                    160
                  </h2>
                  <h6 className="mt-1 text-base font-medium uppercase text-zinc-700 lg:mt-2 lg:text-2xl">
                    Large Angle
                  </h6>
                </div>
                <div>
                  <h2 className="lg;text-4xl text-2xl font-bold uppercase text-primary-700">
                    9 Levels
                  </h2>
                  <h6 className="mt-1 text-base font-medium uppercase text-zinc-700 lg:mt-2 lg:text-2xl">
                    Expression Mode
                  </h6>
                </div>
                <div>
                  <h2 className="lg;text-4xl text-2xl font-bold uppercase text-primary-700">
                    9 Levels
                  </h2>
                  <h6 className="mt-1 text-base font-medium uppercase text-zinc-700 lg:mt-2 lg:text-2xl">
                    Suction Mode
                  </h6>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-white px-3">
        <div className="container relative mx-auto">
          <img
            src="/images/breast_pumbs/banner3.webp"
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
            <div className="col-span-5 flex flex-col">
              <h2 className="text-left text-xl font-extrabold uppercase text-black lg:text-5xl">
                Long Lasting Time
              </h2>
              <h6 className="mt-3 text-left text-lg text-black lg:text-3xl">
                Type-C Charging port
              </h6>
              <h6 className="mt-4 text-left text-base leading-normal text-black lg:mt-14 lg:text-3xl">
                3-4 H Charging time
                <br />
                1400 mah Lithium Battery
                <br />
                80 min Lasting Time
              </h6>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="bg-white px-3 pt-6 lg:pt-12">
        <div className="container mx-auto grid grid-cols-12 gap-x-3 lg:gap-x-12">
          <div className="relative col-span-6">
            <img
              src="/images/breast_pumbs/banner4.webp"
              className="w-full rounded-3xl"
            />
            <motion.div
              className="static left-5 top-8 w-full md:absolute lg:left-10"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="mt-3 text-center text-base font-medium uppercase leading-snug text-primary-800 md:mt-0 md:text-left md:text-5xl md:font-semibold md:text-black lg:leading-tight">
                4 massage modes &
                <br />
                9 suction levels
              </h2>
              <h6 className="mt-1 hidden text-left text-lg text-black md:block lg:mt-3 lg:text-3xl">
                comfortable, customizable,
                <br />
                hospital-grade suction for
                <br />
                efficient milk flow.
              </h6>
            </motion.div>
          </div>
          <div className="relative col-span-6">
            <img
              src="/images/breast_pumbs/banner5.webp"
              className="w-full rounded-3xl"
            />
            <motion.div
              className="static left-5 top-8 w-full md:absolute lg:left-10"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="mt-3 text-center text-base font-medium uppercase leading-snug text-primary-800 md:mt-0 md:text-left md:text-5xl md:font-semibold md:text-black lg:leading-tight">
                Love the
                <br />
                way it flows
              </h2>
              <h6 className="mt-1 hidden text-left text-lg text-black md:block lg:mt-3 lg:text-3xl">
                easy to remove,easy to use,
                <br />
                gentle milk flow  
              </h6>
            </motion.div>
          </div>
        </div>
      </section>
      <BreastPumpProducts />
    </main>
  );
};

export default BreastPumbs;
