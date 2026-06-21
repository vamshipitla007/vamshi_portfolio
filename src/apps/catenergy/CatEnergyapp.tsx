import CatHome from '@/sections/catenergy/CatHome'
import { Route, Routes } from 'react-router-dom'

const CatEnergyapp = () => {
  return (
     <Routes>
         <Route path="/home/*" element={<CatHome />} />
     </Routes>
  )
}

export default CatEnergyapp