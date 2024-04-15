import React from "react";
import { siteConfig } from "../constant";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex md:flex-row flex-col-reverse items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} - Teo Wen Long</div>

        <div className="flex flex-row items-center gap-3">
          {siteConfig.author.accounts.map((sc) => (
            <Link
              key={sc.name}
              className="cursor-pointer hover:bg-[#edecec] hover:rounded-full p-1"
              href={sc.url}
            >
              {sc.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
