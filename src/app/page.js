import { Explore } from "./Explore/page";
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
  </>
  );
}
