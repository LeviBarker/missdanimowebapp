import { app } from "@/app/firebase";
import Layout from "@/app/layout";
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
      <Link href="/">Go Back</Link>
      <section className="flex justify-center items-center">
        <article className="max-w-lg w-full flex flex-col gap-4 p-4">
          <h1 className="text-3xl font-bold text-red-600">{project.title}</h1>
          <iframe
            height="315"
            src={project.video_url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="bg-slate-700 p-2 rounded-2xl w-full">
            <ProjectMetadata {...project} />
          </div>
          <div className="p-4 rounded-2xl bg-yellow-100/90 text-yellow-800">
            <h3 className="font-bold">Supplies</h3>
            <ul>
              {project.supplies.map((supply) => (
                <li key={supply.name}>
                  {supply.quantity} - {supply.name}
                </li>
              ))}
            </ul>
          </div>
          <span className="text-teal-800 font-bold text-2xl">Step 1</span>
          <span className="text-teal-800 font-bold text-2xl">Step 2</span>
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
