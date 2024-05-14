import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github, www } from "../assets";
import { fadeIn } from "../utils/motion";

type Props = {
  name: string;
  image: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  index: number;
  web_link: string;
  source_code_link: string;
};

const ProjectCard = ({
  name,
  tags,
  index,
  image,
  description,
  source_code_link,
  web_link,
}: Props) => {
  return (
    <>
      <motion.div
        variants={fadeIn({
          type: "spring",
          direction: "up",
          delay: index * 0.5,
          duration: 0.75,
        })}
      >
        <Tilt
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="size-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end gap-3 m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-gradient-to-r from-black  via-gray-600 via-80% to-gray-400  size-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="size-1/2 object-contain"
                />
              </div>

              <div
                onClick={() => window.open(web_link, "_blank")}
                className="bg-gradient-to-r from-black  via-gray-600 via-80% to-gray-400  size-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={www}
                  alt="world wide web"
                  className="size-1/2 rounded-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map(({ color, name }) => (
              <p key={name} className={`text-[14px] ${color}`}>
                #{name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};

export default ProjectCard;
