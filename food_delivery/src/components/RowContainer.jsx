import React, { useEffect, useRef } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'


const RowContainer = ({ flag, data, scrollValue }) => {
     const handleClick = () => {

     }
     const rowContainer = useRef()
     useEffect(() => {
          rowContainer.current.scrollLeft += scrollValue
     }, [scrollValue])
     return (
          <div
               ref={rowContainer}
               className={`w-full my-12 items-center gap-3 scroll-smooth ${flag
                    ? 'overflow-x-scroll scrollbar-none'
                    : 'overflow-x-hidden flex-wrap'}`}
          >
               {
                    data && data.map(item => {
                         <div
                              key={item?.id}
                              className='w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px] 
                              bg-gray-100 rounded-lg p-2  h-auto flex flex-col items-center 
                              my-12 ml-1 backdrop-blur-lg hover:drop-shadow-2xl justify-between'
                         >
                              <div className='w-full flex items-center justify-between'>
                                   <motion.img
                                        whileHover={{ scale: 1.0 }}
                                        src={item?.imageURL}
                                        alt=''
                                        className='w-40 -mt-8 drop-shadow-2xl'
                                   />
                                   <motion.div
                                        whileTap={{ scale: 0.8 }}
                                        className='w-10 h-10 rounded-full bg-orange-500 flex items-center 
                              justify-center cursor-pointer hover:shadow-md'>
                                        <MdShoppingBasket
                                             className='text-lg text-white'
                                             onClick={handleClick} />
                                   </motion.div>
                              </div>
                              <div className='w-full flex items-end flex-col justify-end'>
                                   <p className='text-textColor font-semibold text-base md:text-lg'>
                                        {item?.qty}
                                   </p>
                                   <p className='text-yellow-500 font-semibold text-sm mt-2'>
                                        {item?.calories}
                                   </p>
                                   <div className='flex items-center gap-8'>
                                        <p className='text-sl mt-1 text-black font-semibold'
                                        >
                                             <span className='text-xs text-red-500 px-1'>$</span>
                                             {item?.price}
                                        </p>
                                   </div>
                              </div>
                         </div>
                    })
               }
          </div>
     )
}

export default RowContainer