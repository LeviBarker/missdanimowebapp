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
      <section className="flex flex-col justify-center items-start">
        <h1 className="text-xl font-bold text-red-600">{project.title}</h1>
        <span>Video URL: {project.video_url}</span>
        <span>Thumbnail URL: {project.thumbnail_url}</span>
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
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  const projects = await getDocs(collection(firestore, "projects"));
  const projectIds = projects.docs.map((doc) => doc.id);

  return projectIds.map((id) => ({ id }));
}
