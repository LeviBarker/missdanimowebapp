"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sideList = [
    {
      title: "item 1",
    },
  ];

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleEscKeyPress = (e: any) => {
      if (e.keyCode === 27 && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [isOpen]);

  return (
    <>
      <div className="flex items-center">
        <button
          onClick={handleDrawer}
          className="cursor-pointer rounded-full w-12 h-12 hover:bg-slate-300 flex items-center justify-center"
        >
          <Image
            src="/menu_icon_teal.svg"
            width={32}
            height={32}
            alt="Miss Dani Mo Logo"
          />
        </button>
      </div>

      {isOpen && (
        <div className="z-10 fixed inset-0 transition-opacity">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black opacity-50"
          ></div>
        </div>
      )}

      <aside
        className={`ransform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sideList.map(({ title }, index) => {
          return (
            <span
              key={index}
              className="flex items-center p-4 hover:bg-teal-500 hover:text-white "
            >
              <span>{title}</span>
            </span>
          );
        })}
      </aside>
    </>
  );
};
