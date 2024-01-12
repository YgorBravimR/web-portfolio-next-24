import { Footer } from "@/components/Footer"
import { GetInTouchButton } from "@/components/GetInTouchButton"
import homeImage from "../assets/images/homeImage.png"
import aboutImage from "../assets/images/aboutImage.jpeg"
import { Header } from "@/components/Header"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="home" className="w-full flex flex-col md:flex-row  items-center justify-center gap-6">
          <div className="flex flex-col items-center text-center gap-3">
            <p>
              <strong className="text-2xl">{"Hi, I'm Ygor!!"}</strong><br />
              <strong className="text-lg">Full Stack Developer</strong>
            </p>
            <p className="mb-4 md:max-w-lg">
              Technology enthusiast, constant learner,
              tech and financial market world lover,
              developing quality applications.
            </p>
            <div className="hidden md:block">
              <GetInTouchButton href="#contact" />
            </div>
          </div>
          <Image
            className="rounded-md md:w-52 md:h-52 lg:w-72 lg:h-72"
            src={homeImage}
            alt="Home image, virtualized picture from a man sitting in front of a laptop with a window behind showing a big city night."
            width={288}
            height={288}
          />
          <div className="md:hidden">
            <GetInTouchButton href="#contact" />
          </div>
        </section>
        <section id="about" className="w-full flex flex-col items-center justify-center gap-6">
          <h3 className="uppercase text-xl" >
            About Me
          </h3>
          <div className="flex flex-col md:flex-row items-center text-center justify-center gap-8">
            <Image
              className="rounded-tr-7xl rounded-bl-7xl rounded-tl-2xl rounded-br-2xl md:w-52 md:h-52 lg:w-72 lg:h-72"
              src={aboutImage}
              alt="Ygor image, person picture."
              width={288}
              height={288}
            />
            <p className="max-w-xl text-justify md:text-center">
              Web developer, passionate for applying knowledge to improve lives and make
              them easier and more enjoyable. Student at RocketSeat, focusing on ReactJS with Typescript.
              Portuguese native speaker, English learned speaker, 4 years living in the United States, 22 (and counting) living in Brazil.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
