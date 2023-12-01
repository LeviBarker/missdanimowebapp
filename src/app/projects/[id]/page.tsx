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

const firestore = getFirestore(app);

const getProject = async (id: string) => {
  const projectDoc = await getDoc(doc(firestore, "projects", id));
  const project = projectDoc.data();
  return project;
};

export default async function Project({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);

  return (
    <Layout>
      <Link href="/">Back to Home</Link>
      <h1>Detail {params.id}</h1>
      {JSON.stringify(project)}
    </Layout>
  );
}

export async function generateStaticParams() {
  const projects = await getDocs(collection(firestore, "projects"));
  const projectIds = projects.docs.map((doc) => doc.id);

  return projectIds.map((id) => ({ id }));
}
