import ContactFormSection from './ContactFormSection'
import EuroAboutSection from './EuroAboutSection'
import Eurofooter from './Eurofooter'
import EuroNavbar from './EuroNavbar'
import TruckServiceSection from './TruckServiceSection'

const EurolandingScreen = () => {
  return (
    <div>
        <EuroNavbar />
        <TruckServiceSection/>
        <EuroAboutSection />
        <ContactFormSection/>
        <Eurofooter />
    </div>
  )
}

export default EurolandingScreen