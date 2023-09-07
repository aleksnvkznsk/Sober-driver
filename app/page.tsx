import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import Pictures from "@/components/Pictures/Pictures";
import Reviews from "@/components/Reviews/Reviews";
import ServiceOrder from "@/components/ServiceOrder/ServiceOrder";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Pictures />
      <ServiceOrder />
      <Reviews />
    </>
  );
}
