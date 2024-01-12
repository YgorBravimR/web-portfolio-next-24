import { Footer } from "@/components/Footer"
import { GetInTouchButton } from "@/components/GetInTouchButton"
import homeImage from "../assets/images/homeImage.png"
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
      </main>
      <Footer />
    </>
  )
}
