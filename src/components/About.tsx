/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import ServiceCard from "./ServiceCard";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn({ direction: "", type: "", delay: 0.1, duration: 1 })}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with a year of experience in React.js
        and Typescript, and expertise in frameworks like Next.js, Node.js, and
        React Native. <br /> I'm a quick learner and collaborate closely with
        clients to create efficient, scalable, and user-friendly solutions that
        solve real-world problems. <br /> My educational background includes
        studying ITE at the esteemed Syrian Virtual University. <br /> I thrive
        on embracing new challenges and continuously seeking innovative
        solutions to drive the success of projects.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map(({ icon, title }, index) => (
          <ServiceCard key={title} icon={icon} title={title} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
