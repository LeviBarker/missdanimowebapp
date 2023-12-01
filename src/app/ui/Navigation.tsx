import Image from "next/image";

export default function Navigation() {
  return (
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
  );
}
