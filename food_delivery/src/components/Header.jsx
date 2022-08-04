import React, { useState } from 'react'
import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'
import { motion } from 'framer-motion'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebaseConfig';
import { MdShoppingCart, MdAdd, MdLogout, MdPassword } from 'react-icons/md'
import { AiFillInfoCircle } from 'react-icons/ai'
import { MdShoppingBasket } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {

     const firebaseAuth = getAuth(app)
     const provider = new GoogleAuthProvider()
     const [{ user }, dispatch] = useStateValue()
     const [isMenu, setIsMenu] = useState(false)

     const login = async () => {
          if (!user) {
               const { user: { refreshToken, providerData } } =
                    await signInWithPopup(firebaseAuth, provider)
               dispatch({
                    type: actionType.SET_USER,
                    user: providerData[0],
               })
               localStorage.setItem('user', JSON.stringify(providerData[0]))
          } else {
               setIsMenu(!isMenu)
          }
     }
     return (
          <div className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16' >
               {/*-----------Desktop----------------*/}
               <div className='hidden md:flex w-full h-full items-center justify-between'>
                    <Link to={'/'} className='flex items-center gap-2'>
                         <img
                              src={Logo}
                              alt='logo'
                              className='w-10 object-contain'
                         />
                         <p className='text-headingColor text-xl font-bold'>Chicken BoOm!!!</p>
                    </Link>
                    <div className='flex items-center gap-8'>
                         <motion.ul
                              initial={{ opacity: 0, x: 200, }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 200 }}
                              className='flex items-center gap-8'>
                              <li className='text-base text-textColor hover:text-headingColor 
                                   cursor-pointer transition-all ease-in-out duration-100'>
                                   Home
                              </li>
                              <li className='text-base text-textColor hover:text-headingColor 
                                   cursor-pointer transition-all ease-in-out duration-100'>
                                   Menu
                              </li>
                              <li className='text-base text-textColor hover:text-headingColor 
                                   cursor-pointer transition-all ease-in-out duration-100'>
                                   About Us
                              </li>
                              <li className='text-base text-textColor hover:text-headingColor 
                                   cursor-pointer transition-all ease-in-out duration-100'>
                                   Service
                              </li>
                         </motion.ul>
                         <div className='relative flex items-center justify-center'>
                              <MdShoppingBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
                              <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg 
                                   items-center flex justify-center'>
                                   <p className='text-xs text-white font-semibold'>2</p>
                              </div>
                         </div>
                         <div className='relative '>
                              <motion.img
                                   whileTap={{ scale: 0.6 }}
                                   src={user ? user.photoURL : Avatar}
                                   alt='userprofile'
                                   className='w-10 h-10 min-w-[40px] min-h-[40px] drop-shadow-xl 
                                   rounded-full'
                                   onClick={login}
                              />
                              {
                                   isMenu && (
                                        <motion.div
                                             initial={{ opacity: 0, scale: 0.6 }}
                                             animate={{ opacity: 1, scale: 1 }}
                                             exit={{ opacity: 0, scale: 0.6 }}
                                             className='w-40 h-fitcontext bg-primary flex shadow-xl 
                                             flex-col rounded-lg absolute top-11 right-0'>
                                             {
                                                  user && user.email === "phannguyen7565@gmail.com" && (
                                                       <Link to={'/createItem'}>
                                                            <p className='text-xs px-2 py-2 flex items-center gap-3 cursor-pointer 
                                                  hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor'>
                                                                 New Account <MdAdd />
                                                            </p>
                                                       </Link>
                                                  )
                                             }
                                             <p className='text-xs px-2 py-2 flex items-center gap-3 cursor-pointer 
                                             hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor'>
                                                  Logout <MdLogout /></p>
                                             <p className='text-xs px-2 py-2 flex items-center gap-3 cursor-pointer 
                                             hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor'>
                                                  Information <AiFillInfoCircle /></p>
                                             <p className='text-xs px-2 py-2 flex items-center gap-3 cursor-pointer 
                                             hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor'>
                                                  Forget Password <MdPassword /></p>
                                        </motion.div>
                                   )
                              }
                         </div>
                    </div>
               </div>
               {/*-----------Mobile----------------*/}
               <div className='flex md:hidden w-full h-full flex items-center justify-between'>
                    <Link to={'/'} className='flex items-center gap-2'>
                         <img
                              src={Logo}
                              alt='logo'
                              className='w-10 object-contain'
                         />
                         <p className='text-headingColor text-xl font-bold'>Chicken BoOm!!!</p>
                    </Link>
                    <div className='relative'>
                         <motion.img
                              whileTap={{ scale: 0.6 }}
                              src={user ? user.photoURL : Avatar}
                              alt='userprofile'
                              className='w-10 h-10 min-w-[40px] min-h-[40px] drop-shadow-xl 
                                   rounded-full'
                              onClick={login}
                         />
                         {
                              isMenu && (
                                   <motion.div
                                        initial={{ opacity: 0, scale: 0.6 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.6 }}
                                        className='w-40 h-fitcontext bg-primary flex shadow-xl 
                                             flex-col rounded-lg absolute top-11 right-0'>
                                        {
                                             user && user.email === "phannguyen7565@gmail.com" && (
                                                  <Link to={'/createItem'}>
                                                       <p className='text-xs px-2 py-2 flex items-center gap-3 cursor-pointer 
                                                  hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor'>
                                                            New Account <MdAdd />
                                                       </p>
                                                  </Link>
                                             )
                                        }
                                        <p className='text-xs px-2 py-2 flex items-center gap-3 cursor-pointer 
                                             hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor'>
                                             Logout <MdLogout /></p>
                                        <p className='text-xs px-2 py-2 flex items-center gap-3 cursor-pointer 
                                             hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor'>
                                             Information <AiFillInfoCircle /></p>
                                        <p className='text-xs px-2 py-2 flex items-center gap-3 cursor-pointer 
                                             hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor'>
                                             Forget Password <MdPassword /></p>
                                   </motion.div>
                              )
                         }
                         {/* <p className='text-xs text-black drop-shadow-xl'>
                                   {user ? user.displayName : ''}
                              </p> */}
                    </div>
               </div>
          </div>
     )
}

export default Header