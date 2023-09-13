import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import Pictures from "@/components/Pictures/Pictures";
import Price from "@/components/Price/Price";
import Reviews from "@/components/Reviews/Reviews";
import ServiceOrder from "@/components/ServiceOrder/ServiceOrder";
import Contacts from "@/components/Сontacts/Сontacts";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Pictures />
      <ServiceOrder />
      <Price />
      <Reviews />
      <Contacts />
      <Footer />
    </>
  );
}
