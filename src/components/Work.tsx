/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import ProjectCard from "./ProjectCard";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const Work = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn({
            type: "",
            delay: 0.1,
            duration: 1,
            direction: "",
          })}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Work, "");
