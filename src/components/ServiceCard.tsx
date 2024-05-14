import { Tilt } from "react-tilt";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

type Props = {
  icon: string;
  index: number;
  title: string;
};

const ServiceCard = ({ index, title, icon }: Props) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn({
          direction: "right",
          type: "spring",
          delay: 0.5 * index,
          duration: 0.75,
        })}
        className="w-full bg-gradient-to-br from-green-500 to-pink-600 p-1 rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="size-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
