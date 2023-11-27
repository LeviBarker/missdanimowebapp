import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="flex justify-start items-center gap-8 p-8 w-screen">
        <Image
          src="/menu_icon_teal.svg"
          width={32}
          height={32}
          alt="Miss Dani Mo Logo"
        />
        <Image
          src="/MissDaniMo_Logo&Brand_Horizontal.png"
          width={175}
          height={50}
          alt="Miss Dani Mo Logo"
        />
      </nav>
      <section className="max-w-5xl px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((key) => (
          <article
            key={key}
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JhZnR8ZW58MHx8MHx8fDA%3D)",
            }}
            className="max-w-96 bg-center bg-cover w-full h-32 bg-slate-300 rounded-2xl p-4"
          >
            <span className="text-white font-bold text-lg">
              Toilet Paper Binoculars
            </span>
          </article>
        ))}
      </section>
    </main>
  );
}
