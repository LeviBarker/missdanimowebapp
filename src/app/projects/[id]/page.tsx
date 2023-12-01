import { app } from "@/app/firebase";
import Layout from "@/app/layout";
import Image from "next/image";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  getFirestore,
} from "firebase/firestore";
import Link from "next/link";
import { Project as ProjectModel } from "@/app/models/project";
import ProjectMetadata from "@/app/ui/ProjectMetadata";

const firestore = getFirestore(app);

const getProject = async (id: string): Promise<ProjectModel> => {
  const projectDoc = await getDoc(doc(firestore, "projects", id));
  const project = projectDoc.data();
  return project as ProjectModel;
};

export default async function Project({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);

  return (
    <main className="h-screen overflow-auto bg-slate-200">
      <nav className="bg-slate-200/90 flex justify-start items-center gap-2 p-8 w-screen">
        <Link
          href="/"
          className="cursor-pointer rounded-full w-12 h-12 hover:bg-slate-300 flex items-center justify-center"
        >
          <Image
            src="/arrow_back_teal.svg"
            width={32}
            height={32}
            alt="Go back icon"
          />
        </Link>
        <Image
          src="/MissDaniMo_Logo&Brand_Horizontal.png"
          width={132}
          height={50}
          alt="Miss Dani Mo Logo"
        />
      </nav>
      <section className="flex justify-center items-center">
        <article className="max-w-lg w-full flex flex-col gap-4 p-4">
          <h1 className="text-3xl font-bold text-red-600">{project.title}</h1>
          <div className="py-2 w-full text-slate-500 text-sm">
            This project has a{" "}
            <b className="lowercase">{project.messiness_level}</b> messiness
            level with a{" "}
            <b className="lowercase">{project.grownup_involvement}</b> level of
            grownup involvement and should take around{" "}
            <b className="lowercase">{project.time_minutes} minutes</b> to
            complete.
          </div>
          <iframe
            height="315"
            src={project.video_url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div className="relative p-4 rounded-2xl bg-yellow-100/90 text-yellow-800">
            <Image
              className="absolute right-4 top-4"
              src="/content_copy.svg"
              width={24}
              height={24}
              alt="Copy icon"
            />
            <h3 className="font-bold">Supplies</h3>
            <ul>
              {project.supplies?.map((supply) => (
                <li key={supply.name}>
                  {supply.quantity} {supply.name}
                </li>
              ))}
            </ul>
          </div>
          {project.steps?.map((step, index) => (
            <div key={index}>
              <span className="text-teal-800 font-bold text-2xl">
                Step {index + 1}
              </span>
              <p className="pb-4">{step.text}</p>
              {step.illustration_url && (
                <Image
                  width="100"
                  height="100"
                  alt="Step Illustration"
                  src={step.illustration_url}
                />
              )}
            </div>
          ))}
        </article>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  const projects = await getDocs(collection(firestore, "projects"));
  const projectIds = projects.docs.map((doc) => doc.id);

  return projectIds.map((id) => ({ id }));
}
