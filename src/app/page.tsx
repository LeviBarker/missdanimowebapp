import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "./firebase";
import Navigation from "./ui/Navigation";
import { Project } from "./models/project";
import GalleryProject from "./ui/GalleryProject";

const firestore = getFirestore(app);

async function getProjects(): Promise<Project[]> {
  const projects = await getDocs(collection(firestore, "projects"));
  return projects.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  }) as Project[];
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="h-screen overflow-auto bg-slate-200">
      <Navigation />
      <section className="mt-32 flex justify-center items-center">
        <section className=" max-w-5xl w-full">
          <section className="max-w-5xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {projects.map((project) => (
              <GalleryProject key={project.id} project={project} />
            ))}
          </section>
        </section>
      </section>
    </main>
  );
}
