import React from "react";
import { menuLinks } from "../constant";
import { FaMoon } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "./new/ThemeSwitcher";

const Header = () => {
  return (
    <header className="shadow-lg dark:bg-[#303746] dark:text-white">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-5 my-2">
          <Image
            src="/profile_picture.png"
            width={50}
            height={50}
            alt="profile"
            style={{
              borderRadius: "50px",
            }}
          />

          <nav className="flex flex-row gap-5">
            {menuLinks.map((link) => (
              <Link href={link.route} key={link.name} className="">
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
