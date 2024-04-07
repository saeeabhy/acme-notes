import Header from "./components/header";
import Features from "./components/features";
import Carousal from "./components/carousal/carousal";
import Aurora from "./components/aurora";
import Reviews from "./components/reviews";

export default function Home() {
  return (
    <main className="width-full">
      <Header></Header>
      <Carousal></Carousal>
      <Features></Features>
      <Reviews></Reviews>
      <Aurora></Aurora>
    </main>
  );
}
