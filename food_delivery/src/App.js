import React from 'react'
import './App.css';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom'
import { Header, MainContainer, CreateContainer } from './components';

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-fit flex flex-col bg-primary">
        <Header />
        <main className='mt-24 p-8 w-full h-fit'>
          <Routes>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/createItem' element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App