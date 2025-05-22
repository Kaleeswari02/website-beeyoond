import AboutSection from "./aboutsection/page";
import Header from "./header/page";
import HomeSection from "./home/page";
import { Services } from "./services/page";
import { Testimonials } from "./testimonials/page";
export default function Home() {
  return (
  <>
    <Header/>
    <HomeSection/>
    <AboutSection/>
    <Services />
    <Testimonials/>
  </>
  );
}
 