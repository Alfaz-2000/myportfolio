import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiWordpress,
  SiPostman,
  SiFigma,
} from "react-icons/si";

const icons = [
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiWordpress,
  SiPostman,
  SiFigma,
];

const TechMarquee = () => {
  return (
    <div className="marquee py-10">
      <div className="marquee-track text-gray-600">
        {[...icons, ...icons].map((Icon, index) => (
          <Icon
            key={index}
            size={32}
            className="hover:text-[#111111] transition"
          />
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
