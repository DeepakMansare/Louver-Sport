import About from "../Components/About";
import Contact from "../Components/Contact";
import Facilities from "../Components/Facilities";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Newsletter from "../Components/Newsletter";
import OtherFeatures from "../Components/OtherFeatures";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Facilities />
      <OtherFeatures />
      <Contact />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};
export default Home;
