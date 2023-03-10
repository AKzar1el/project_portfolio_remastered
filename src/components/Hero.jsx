//Import the motion object from framer-motion library and the styles object from "../styles"
//Also import ComputersCanvas and Lol components from "./canvas"
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Phoenix } from "./canvas";

//Define a functional component called Hero
const Hero = () => {
  //Return JSX code to render a hero section
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Tomi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications <br className='sm:block hidden' />
            and offer IT consulting
          </p>
        </div>
      </div>

      <Phoenix />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
      
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

//Export the Hero component as the default export of this module
export default Hero;
