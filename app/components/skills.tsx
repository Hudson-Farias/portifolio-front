import { FaHtml5 as Html, FaNodeJs as NodeJs } from "react-icons/fa6";
import { IoLogoCss3 as CssIcon } from "react-icons/io";
import {
  DiJavascript as Javascript,
  DiMongodb as Database,
} from "react-icons/di";
import { FaReact as ReactIcon } from "react-icons/fa";
import {
  SiNextdotjs as NextJs,
  SiExpress as Server,
  SiKubernetes as Kubernate,
} from "react-icons/si";
import {
  RiTailwindCssFill as Tailwind,
  RiRemixRunFill as Remix,
  RiSupabaseFill as Supabase,
} from "react-icons/ri";
import { GrMysql as Sql } from "react-icons/gr";
import {
  FaGitAlt as Git,
  FaDocker as Docker,
  FaCloud as CloudCog,
  FaFigma as Figma,
} from "react-icons/fa";
import { VscVscode as VsCode } from "react-icons/vsc";
import React from "react";

interface Skill {
  name: string;
  icon: React.ElementType;
}

const SkillIcon = ({ skill }: { skill: Skill }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <skill.icon className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer" />
      </div>

      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded-md whitespace-nowrap">
          <p>{skill.name}</p>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black" />
        </div>
      )}
    </div>
  );
};

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: Skill[];
}) => (
  <div className="flex items-center flex-col">
    <h3 className="text-lg font-semibold">{title}</h3>
    <div className="p-4">
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <SkillIcon key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  </div>
);

export default function Skills() {
  const frontendSkills: Skill[] = [
    { name: "HTML", icon: Html },
    { name: "CSS", icon: CssIcon },
    { name: "JavaScript", icon: Javascript },
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: NextJs },
    { name: "Remix", icon: Remix },
    { name: "Tailwind CSS", icon: Tailwind },
  ];

  const backendSkills: Skill[] = [
    { name: "Node.js", icon: NodeJs },
    { name: "Express", icon: Server },
    { name: "Supabase", icon: Supabase },
    { name: "SQL", icon: Sql },
    { name: "MongoDB", icon: Database },
  ];

  const devopsSkills: Skill[] = [
    { name: "Git", icon: Git },
    { name: "Docker", icon: Docker },
    { name: "CI/CD", icon: CloudCog },
    { name: "Kubernetes", icon: Kubernate },
  ];

  const toolsSkills: Skill[] = [
    { name: "VS Code", icon: VsCode },
    { name: "Figma", icon: Figma },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <SkillCategory title="Frontend" skills={frontendSkills} />
      <SkillCategory title="Backend" skills={backendSkills} />
      <SkillCategory title="DevOps" skills={devopsSkills} />
      <SkillCategory title="Tools" skills={toolsSkills} />
    </div>
  );
}
