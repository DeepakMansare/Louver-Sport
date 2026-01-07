import {
  Hero,
  About,
  Facilities,
  OtherFeatures,
  ContactForm,
  Testimonials,
  Newsletter,
  Footer,
  Navbar,
} from "@components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <OtherFeatures />
      <ContactForm />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};
export default Home;
