import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Section5 from "./Sections/Section5";
import Footer from "./Sections/Footer";

const Home = () => {
  return (
    <main>
      {/* INTRO*/}
      <Section1 />

      {/*BUY RENT SELL  */}
      <Section2 />

      {/* BEST HOUSES */}
      <Section3 />

      {/* HAPPY CLIENTS */}
      <Section4 />

      {/* GET STARTED */}
      <Section5 />

      <Footer />
    </main>
  );
};

export default Home;
