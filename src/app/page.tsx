import { Footer } from "@/components/Footer"
import { GetInTouchButton } from "@/components/GetInTouchButton"
import homeImage from "../assets/images/homeImage.png"
import aboutImage from "../assets/images/aboutImage.jpeg"
import mainProjectImage from "../assets/images/mainProjectImage.png"
import { Header } from "@/components/Header"
import Image from "next/image"
import { TechsShowList } from "@/components/TechsShowList"
import { mainProjectTechs, personalInformation } from "@/utils/InformationData"
import { SidePersonalInfo } from "@/components/SidePersonalInfo"
import { ContactForm } from "@/components/ContactForm"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12 w-full gap-24 text-xl text-blackColor dark:text-whiteColor">
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
        <section id="showcase" className="w-full flex flex-col items-center justify-center gap-6">
          <h3 className="uppercase text-xl" >
            Showcase
          </h3>
          <h4 className="font-bold text-2xl">Brave Finances</h4>
          <div className="flex flex-col-reverse md:flex-row items-center text-center justify-center gap-4">
            <div className="flex flex-col-reverse md:flex-col items-center justify-center gap-4 w-full md:w-full md:max-w-2xl">
              <p>Application in development that unify the control of personal
                finances and investments in the same place, making it easier to get control of the financial life.
              </p>
              <button className="text-whiteColor dark:text-whiteColor border-blackColor dark:border-whiteColor bg-mainColor font-bold py-2 px-4 rounded-sm border cursor-default">
                Coming Soon!!
              </button>
            </div>
            <Image
              className="rounded-xl w-full md:w-3/5 lg:w-130 lg:h-130"
              src={mainProjectImage}
              alt="Ygor image, person picture."
              width={540}
              height={400}
            />
          </div>
          <div className="flex flex-col items-start text-center gap-4">
            <TechsShowList techList={mainProjectTechs.frontend} label="Front-end" />
            <TechsShowList techList={mainProjectTechs.backend} label="Back-end" />
          </div>
        </section>

        <section id="contact" className="w-full flex flex-col items-center justify-center gap-6">
          <div className="text-center">
            <h3 className="uppercase text-xl" >
              Contact me
            </h3>
            <p className="text-darkGrayColor">
              Leave me a message
            </p>
          </div>
          <div className="flex flex-col-reverse md:flex-row text-center justify-center gap-6 w-full max-w-5xl">
            <div className="flex flex-col gap-6 mt-4">
              {personalInformation.map((item, i) => (
                <SidePersonalInfo
                  key={item.title + i}
                  title={item.title}
                  information={item.information}
                  icon={item.icon}
                />
              ))}
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
