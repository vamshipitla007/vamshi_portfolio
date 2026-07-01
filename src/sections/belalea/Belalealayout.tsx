import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Belaleafooter'

const Belalealayout = () => {
  return (
     <div className="bg-white min-h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <div className="mx-auto w-full">
        <Navbar />
      </div>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Belalealayout