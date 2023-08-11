"use client";
import Link from "next/link";
import React, { useState } from "react";
interface MenuNavigationProps {
  data: { title: string }[];
}
const MenuNavigation = ({ data }: MenuNavigationProps) => {
  const [chosenNav, setChosenNav] = useState<number>(0);
  const handleNavClick = (chosen: number) => {
    setChosenNav(chosen);
  };
  return (
    <nav>
      <ul className="flex gap-x-4 sm:gap-x-6 font-museoSansBold uppercase text-sm sm:text-base">
        {data.map((el, index) => (
          <li key={index}>
            <Link
              onClick={() => handleNavClick(index)}
              className={`${chosenNav === index && "text-green"}`}
              href="#"
            >
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuNavigation;
