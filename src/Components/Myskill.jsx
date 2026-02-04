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
    <div className="marquee min-w-screen py-10 min-h-[20vh]">
      <h2 className="text-2xl font-bold mb-7 text-center">SKILL'S</h2>
      <div className="marquee-track text-black">
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
