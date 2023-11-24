import Slide from 'react-reveal/Slide'
import Button from '../../components/button'

const AboutSection = () => {
  return (
    <section className="">
      <div className="container px-5 py-24 mx-auto">
        <Slide bottom>
          <div className="text-center mb-20">
            <h2 className="sm:text-5xl text-2xl font-medium title-font mb-4 uppercase">
              About
            </h2>
          </div>
        </Slide>
        <Slide bottom cascade>
          <div className="flex items-center justify-center flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 gap-10">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center border border-[#475569] cursor-pointer">
              <p>
                Hello! I'm Md. Muzahid, a passionate frontend developer. I
                develop web applications, mobile applications. My core skill is
                based on JavaScript and I love to do most of the things using
                JavaScript. I have graduated with a bachelor's degree in Civil
                Engineering from Dhaka International University at Dhaka,
                Bangladesh in 2019. I am available for any kind of job
                opportunity that suits my interests.
              </p>
              <div className="flex-grow mt-6 space-x-5">
                <Button>Get Resume</Button>
                <Button>My Skills</Button>
              </div>
            </div>
            <div className="p-4 h-80 md:w-1/3 flex flex-col text-center items-center border border-[#475569] cursor-pointer"></div>
          </div>
        </Slide>
      </div>
    </section>
  )
}

export default AboutSection
