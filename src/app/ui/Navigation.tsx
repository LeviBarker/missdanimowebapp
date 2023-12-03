import Image from "next/image";
import { Sidenav } from "./Sidenav";

export default function Navigation() {
  return (
    <nav className="bg-white/90 absolute z-50 flex justify-start items-center gap-2 p-8 w-screen">
      <Sidenav />
      <Image
        src="/MissDaniMo_Logo&Brand_Horizontal.png"
        width={132}
        height={50}
        alt="Miss Dani Mo Logo"
      />
    </nav>
  );
}
