import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="flex justify-start items-center gap-2 p-8 w-screen">
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
      <section className="flex justify-center items-center">
        <section className=" max-w-5xl w-full">
          <section className="max-w-5xl px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((key) => (
              <article
                key={key}
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JhZnR8ZW58MHx8MHx8fDA%3D)",
                }}
                className="relative max-w-96 bg-center bg-cover w-full h-32 bg-slate-300 rounded-2xl p-4"
              >
                <span className="text-white font-bold text-lg">
                  Toilet Paper Binoculars
                </span>
                <div className="font-medium absolute bottom-2 left-4 text-white text-sm flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <Image
                      src="/paint_brush_white.svg"
                      width={16}
                      height={16}
                      alt="Paint brush icon"
                    />
                    Low
                  </span>
                  <span className="font-bold text-lg">&middot;</span>
                  <span className="flex items-center gap-1">
                    <Image
                      src="/grown_up_white.svg"
                      width={16}
                      height={16}
                      alt="Grown up icon"
                    />
                    Medium
                  </span>
                  <span className="font-bold text-lg">&middot;</span>
                  <span className="flex items-center gap-1">
                    <Image
                      src="/time_white.svg"
                      width={16}
                      height={16}
                      alt="Time icon"
                    />
                    5 minutes
                  </span>
                </div>
              </article>
            ))}
          </section>
        </section>
      </section>
    </main>
  );
}
