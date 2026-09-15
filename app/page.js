import Image from "next/image";
import Hero from "./components/Hero";
import Skills from "./components/Skills"

export default function Home() {
  return (
    <div className="">


      <div className="">
      <Hero/>
      </div>

      <div className="">
        <Skills/>
      </div>

    </div>

  );
}
