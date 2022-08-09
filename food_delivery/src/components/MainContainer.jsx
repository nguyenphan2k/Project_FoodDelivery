import React, { useEffect, useState } from 'react'
import HomeContainer from './HomeContainer'
import { motion } from 'framer-motion'
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useStateValue } from '../context/StateProvider';
import RowContainer from './RowContainer'
import MenuContainer from './MenuContainer';



const MainContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue()

  const [scrollValue, setScrollValue] = useState(0)

  useEffect(() => {
    setScrollValue()
  }, [scrollValue])
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer />
      <section className='w-full my-6'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-lg font-semibold capitalize relative text-2xl text-headingColor 
          before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2
          before:left-0 before:bg-gradient-to-br from-orange-400 to-orange-600 transition-all 
          ease-in-out duration-100'>
            Our fresh and healthy fruits
          </p>
          <div className='hidden md:flex gap-3 items-center'>
            <motion.div whiteTag={{ scale: 0.75 }} className='w-8 h-8 rounded-lg bg-orange-300 
            hover:bg-orange-500 flex items-center justify-center cursor-pointer transition-all 
            ease-in-out duration-100 hover:shadow-lg'
              onClick={() => scrollValue(-200)}>
              <MdChevronLeft className='text-base text-white' />
            </motion.div>
            <motion.div whiteTag={{ scale: 0.75 }} className='w-8 h-8 rounded-lg bg-orange-300 
            hover:bg-orange-500 flex items-center justify-center cursor-pointer transition-all 
            ease-in-out duration-100 hover:shadow-lg'
              onClick={() => scrollValue(200)}>
              <MdChevronRight className='text-base text-white' />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter(n => n.category === 'fruits')}
        />
      </section>
      <MenuContainer />
    </div>
  )
}

export default MainContainer