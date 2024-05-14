import { VerticalTimelineElement } from "react-vertical-timeline-component";

type Props = {
  icon: string;
  date: string;
  title: string;
  iconBg: string;
  points: string[];
  company_name: string;
};

const ExperienceCard = ({
  date,
  icon,
  title,
  iconBg,
  points,
  company_name,
}: Props) => {
  return (
    <VerticalTimelineElement
      date={date}
      iconStyle={{ background: iconBg }}
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={icon}
            alt={company_name}
            className="size-[100%] object-contain rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
