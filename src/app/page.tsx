import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="flex justify-start items-center gap-8 p-16 w-screen">
        <Image
          src="/menu_icon_teal.svg"
          width={32}
          height={32}
          alt="Miss Dani Mo Logo"
        />
        <Image
          src="/MissDaniMo_Logo&Brand_Horizontal.png"
          width={250}
          height={100}
          alt="Miss Dani Mo Logo"
        />
      </nav>
    </main>
  );
}
