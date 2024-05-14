/* eslint-disable react-refresh/only-export-components */
import { technologies } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map(({ icon, name }) => (
        <div className="size-28" key={name}>
          <BallCanvas icon={icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
