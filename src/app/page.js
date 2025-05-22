import { Explore } from "./Explore/page";
import AboutSection from "./aboutsection/page";
import Header from "./header/page";
import HomeSection from "./home/page";
import { Services } from "./services/page";
export default function Home() {
  return (
  <>
    <Header/>
    <HomeSection/>
    <Services />
    <Explore/>
    <AboutSection/>
  </>
  );
}
