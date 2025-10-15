import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  technologies: readonly string[];
  date: string;
  category: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  technologies,
  date,
  category,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="w-full relative overflow-hidden rounded-lg shadow-lg hover:scale-[1.06] transition duration-300 border border-[#2A0E61] hover:border-red-500 group"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <div className="relative p-6 bg-[#0C0C0C] rounded-b-lg">
        <div className="flex justify-between items-start mb-3">
          <span className="text-sm text-red-400 font-medium">{date}</span>
          <span className="text-xs px-2 py-1 bg-red-500/20 text-red-300 rounded-full">
            {category.toUpperCase()}
          </span>
        </div>
        
        <h1 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
          {title}
        </h1>
        
        <p className="text-gray-300 text-sm mb-4 leading-relaxed overflow-hidden" style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
        }}>
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded border border-gray-700 hover:border-red-500 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
