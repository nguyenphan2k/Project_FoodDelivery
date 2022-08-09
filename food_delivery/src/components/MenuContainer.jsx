import React, { useEffect, useState } from 'react'
import { IoFastFood } from 'react-icons/io5'
import { categories } from '../utils/data'
import { motion } from 'framer-motion'

const MenuContainer = () => {
     const [filter, setFilter] = useState("chicken")

     return (
          <section className='w-full my-6' id='menu'>
               <div className='w-full flex flex-col items-center justify-center'>
                    <p
                         className='text-lg font-semibold capitalize relative text-2xl text-headingColor 
                         before:absolute before:rounded-lg before:content before:w-32 before:-bottom-2
                         before:left-8 before:bg-gradient-to-br from-orange-400 to-orange-600 transition-all 
                         ease-in-out duration-100 before:h-1 mr-auto'>
                         Our Hot Dishes
                    </p>
                    <div className='w-full flex items-center justify-start lg:justify-center gap-8
                    overflow-x-scroll scrollbar-none py-6'>
                         {
                              categories && categories.map(category => (
                                   <motion.div
                                        whileTap={{scale: 0.9}}
                                        key={category.id}
                                        className={`group ${filter === category.urlParamName ? 'bg-red-500'
                                             : 'bg-gray-200'} w-24 min-w-[94px] h-28 cursor-pointer
                                        rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center
                                        duration-150 ease-in-out transition-all hover:bg-red-700`}
                                        onClick={() => setFilter(categories.urlParamName)}>
                                        <div
                                             className={`w-10 h-10 bg-red-500 rounded-full group-hover:bg-gray-300
                                             flex items-center justify-center ${filter === category.urlParamName ?
                                                       'bg-gray-200' : 'bg-red-500'} shadow-xl`}>
                                             <IoFastFood
                                                  className={`text-lg ${filter === category.urlParamName ? 'text-yellow' : 'text-black'}`}
                                             />
                                        </div>
                                        <p className={`text-sm font-semibold group-hover:text-pink-200
                                        ${filter === category.urlParamName ? 'text-white' : 'text-red-300'}`}>
                                             {category.name}
                                        </p>
                                   </motion.div>
                              ))
                         }
                    </div>
               </div>
          </section>
     )
}

export default MenuContainer