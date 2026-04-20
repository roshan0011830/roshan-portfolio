import { Route, Routes } from 'react-router-dom'
import './App.css'


//pura folder name path nhi dena pada alias se ho gya @ or vite config mai bta diya resolve ke andar alias or alias mai "@": 
import Component from '@/Component.jsx'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

import {Toaster} from '../src/components/ui/toaster.jsx'



function App() {

  return (
    <>
    
    <Routes>

      //jab koi or route match na ho ye chla dena lekin parent match ho 
      <Route index element={<Home/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
