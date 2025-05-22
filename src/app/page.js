import AboutSection from "./aboutsection/page";
import Footer from "./footer/page";
import Header from "./header/page";
import HomeSection from "./home/page";
import TabbedContent from "./portfolio/page";
import { Services } from "./services/page";
import { Testimonials } from "./testimonials/page";
export default function Home() {
  
  return (
  <>
    <Header/>
    <HomeSection/>
    <AboutSection/>
    <Services />
    <TabbedContent/>
    {/* <Testimonials/> */}
    <Footer/>
  </>
  );
}
 