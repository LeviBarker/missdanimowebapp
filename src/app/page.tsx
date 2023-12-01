import { collection, getDocs, getFirestore } from "firebase/firestore";
import Image from "next/image";
import { app } from "./firebase";

const firestore = getFirestore(app);

interface Project {
  id: string;
  title: string;
  messiness_level: string;
  grownup_involvement: string;
  time_minutes: number;
  thumbnail_url: string;
}

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
      <nav className="bg-slate-200/90 absolute z-50 flex justify-start items-center gap-2 p-8 w-screen">
        <button className="cursor-pointer rounded-full w-12 h-12 hover:bg-slate-300 flex items-center justify-center">
          <Image
            src="/menu_icon_teal.svg"
            width={32}
            height={32}
            alt="Miss Dani Mo Logo"
          />
        </button>
        <Image
          src="/MissDaniMo_Logo&Brand_Horizontal.png"
          width={132}
          height={50}
          alt="Miss Dani Mo Logo"
        />
      </nav>
      <section className="mt-32 flex justify-center items-center">
        <section className=" max-w-5xl w-full">
          <section className="max-w-5xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {projects.map((project) => (
              <article
                key={project.id}
                style={{
                  backgroundImage: "url(" + project.thumbnail_url + ")",
                }}
                className="relative max-w-96 bg-center bg-cover w-full h-32 bg-slate-300 rounded-3xl p-4 overflow-hidden"
              >
                <button className="absolute right-2 top-2 bg-red-400 rounded-full w-12 h-12 hover:rotate-12 z-20 flex items-center justify-center">
                  <Image
                    src="/touch_white.svg"
                    width={24}
                    height={24}
                    alt="Touch icon"
                  />
                </button>
                <div className="top-0 left-0 absolute w-full h-full bg-gradient-to-t from-slate-800 to-slate-50/10 z-10"></div>
                <div className=" absolute bottom-2 left-4 z-20">
                  <span className="text-white font-bold text-lg">
                    {project.title}
                  </span>

                  <div className="font-medium text-white text-sm flex items-center gap-1 whitespace-nowrap">
                    <span className="flex items-center gap-1">
                      <Image
                        src="/paint_brush_white.svg"
                        width={16}
                        height={16}
                        alt="Paint brush icon"
                      />
                      {project.messiness_level}
                    </span>
                    <span className="font-bold text-lg">&middot;</span>
                    <span className="flex items-center gap-1">
                      <Image
                        src="/grown_up_white.svg"
                        width={16}
                        height={16}
                        alt="Grown up icon"
                      />
                      {project.grownup_involvement}
                    </span>
                    <span className="font-bold text-lg">&middot;</span>
                    <span className="flex items-center gap-1">
                      <Image
                        src="/time_white.svg"
                        width={16}
                        height={16}
                        alt="Time icon"
                      />
                      {project.time_minutes} min
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </section>
      </section>
    </main>
  );
}
