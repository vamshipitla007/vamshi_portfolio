import AdvantagesSection from './AdvantagesSection'
import ChefHero from './ChefHero'
import ChefMenu from './ChefMenu'
import ContactSection from './ContactSection'
import DeliveryAreas from './DeliveryAreas'
import FAQSection from './FAQSection'

const Dashboard = () => {
  return (
    <div>
        <ChefHero/>
        <ChefMenu/>
        <DeliveryAreas/>
        <AdvantagesSection/>
        <FAQSection/>
        <ContactSection/>
    </div>
  )
}

export default Dashboard