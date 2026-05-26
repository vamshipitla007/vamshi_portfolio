import ApplicationProcess from "./ApplicationProcess";
import HeroSection from "./HeroSection";
import WhatsNewFaqSection from "./WhatsNewFaqSection";

export default function HomePage() {
    return (
        <div>
           <HeroSection/>
           <WhatsNewFaqSection/>
           <ApplicationProcess/>
        </div>
    );
}
