import feature from "../assets/feature.svg";

import { motion } from "framer-motion"

import FadeIn from "../variants.js"


const Features = () => {
  return (
    <div className="my-24 md:px-14  max-w-screen-2xl mx-auto" id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <motion.div variants={FadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="lg:w-1/4">
          <h3 className="text-3xl text-primary font-bold lg:w-3/4 mb-3">
            Why we are better than others
          </h3>
          <p className="text-base text-tertiary">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence, is called the
            “topic sentence.”
          </p>
        </motion.div>
        {/*features card*/}
        <motion.div variants={FadeIn("up", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="lg:w-3/4">

          <div className="grid md:grid-cols-3 grid-cols-1 items-start md:gap-12 gap-8 ">

            <div className="bg-[rgba(255, 255 , 255 , 0.04)] rounded-[35px] h-96  shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-500 cursor-pointer ">
              <div>
                <img src={feature} alt="img" />
                <h5 className=" text-2xl text-primary font-bold px-5 text-center mt-5">
                  Conventient study schedule
                </h5>
              </div>
            </div>

            <div className="bg-[rgba(255, 255 , 255 , 0.04)] rounded-[35px] h-96  shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-500 cursor-pointer md:mt-16 ">
              <div>
                <img src={feature} alt="img" />
                <h5 className=" text-2xl text-primary font-bold px-5 text-center mt-5">
                  Conventient study schedule
                </h5>
              </div>
            </div>

            <div className="bg-[rgba(255, 255 , 255 , 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-500 cursor-pointer ">
              <div>
                <img src={feature} alt="img" />
                <h5 className=" text-2xl text-primary font-bold px-5 text-center mt-5">
                  Conventient study schedule
                </h5>
              </div>
            </div>


          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
