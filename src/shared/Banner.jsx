
import { motion } from "framer-motion"

import FadeIn from "../variants.js"

const Banner = ({ banner, heading, subheading, btn1, btn2 }) => {
  return (
    <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>

      <div className='flex flex-col md:flex-row justify-between items-center gap-10'>


        {/*banner content*/}
        <div className='md:w-3/5'>
          <h3 className='md:text-7xl  text-4xl  font-bold text-white mb-6 leading-relaxed '>{heading}</h3>
          <p className='text-[#EBEBEB] text-2xl mb-8 '>{subheading}</p>

          <div className='space-x-5 space-y-4'>
            <button className='btnPrimary'>{btn1}</button>
            <button className='btnPrimary'>{btn2}</button>
          </div>

        </div>



        {/*banner image*/}
        <motion.div variants={FadeIn("down", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
          <img src={banner} alt=" site banner" className='lg:h-[360px]' />
        </motion.div>

      </div>
    </div>
  )
}

export default Banner