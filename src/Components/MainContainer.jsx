import React from 'react'
import HomeContainer from './HomeContainer'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { motion } from 'framer-motion'
import RowContainer from './RowContainer'
import MenuContainer from './MenuContainer'

const MainContainer = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer />

        <section className='w-full my-6'>
          <div className='w-full flex items-center justify-between'>
            <p className='text-2xl font-semibold capitalize text-headingColor relative
              before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2
              before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-out duration-100
            '>Our Fresh Fruits</p>

            <div className='hidden md:flex gap-3 items-center'>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 flex items-center justify-center 
                  cursor-pointer transition-all ease-in-out duration-100 hover:shadow-lg'>
                <MdChevronLeft className='text-base text-white' />
              </motion.div>
              <motion.div 
                whileTap={{ scale: 0.75 }}
                className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 flex items-center justify-center 
                  cursor-pointer transition-all ease-in-out duration-100 hover:shadow-lg'>
                <MdChevronRight className='text-base text-white' />
              </motion.div>
            </div>
          </div>
          <RowContainer flag={true} />
        </section>

      <MenuContainer />
    </div>  
  )
}

export default MainContainer