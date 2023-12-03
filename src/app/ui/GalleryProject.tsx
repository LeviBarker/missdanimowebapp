import Link from "next/link";
import Image from "next/image";
import { Project } from "../models/project";
import ProjectMetadata from "./ProjectMetadata";

interface GalleryProjectProps {
  project: Project;
}

export default function GalleryProject({ project }: GalleryProjectProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      style={{
        backgroundImage: "url(" + project.thumbnail_url + ")",
      }}
      className="relative max-w-96 bg-center bg-cover w-full h-36 bg-slate-300 rounded-3xl p-4 overflow-hidden"
    >
      <button className="absolute right-2 top-2 bg-red-400 rounded-full w-12 h-12 hover:rotate-12 z-20 flex items-center justify-center">
        <Image src="/touch_white.svg" width={24} height={24} alt="Touch icon" />
      </button>
      <div className="top-0 left-0 absolute w-full h-full bg-gradient-to-t from-slate-800 to-slate-50/10 z-10"></div>
      <div className=" absolute bottom-2 left-4 z-20">
        <span className="text-white font-bold text-lg">{project.title}</span>

        <ProjectMetadata {...project} />
      </div>
    </Link>
  );
}
