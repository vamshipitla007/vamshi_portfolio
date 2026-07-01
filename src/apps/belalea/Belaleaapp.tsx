import BelaleaHome from '@/sections/belalea/BelaleaHome'
import Belalealayout from '@/sections/belalea/Belalealayout'
import { Route, Routes } from 'react-router-dom'

const Belaleaapp = () => {
  return (
      <Routes>
      <Route path="/" element={<Belalealayout />}>
        <Route path="homepage" element={<BelaleaHome />} />
      </Route>
    </Routes>
  )
}

export default Belaleaapp