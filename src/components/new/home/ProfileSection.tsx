import React from "react";
import Image from "next/image";
import { ISpotifySong } from "@/types/spotify";
import { dateOfStartWorking, resume } from "@/constant";
import Link from "next/link";

interface IProfileSection {
  song: ISpotifySong;
}

const ProfileSection: React.FC<IProfileSection> = ({ song }) => {
  const yearOfExperience =
    new Date().getFullYear() - new Date(dateOfStartWorking).getFullYear();

  return (
    <div className="animate-fade-in animation-delay-1 my-5">
      <div className="flex flex-row items-center justify-between">
        <h1 className="lg:text-[48px] md:text-[40px] text-[24px]">
          Hey, I am Teo! <span className="waving-hand">👋</span>
        </h1>
        <Image
          className="animate-fade-in cursor-pointer hover:scale-120"
          alt="Profile"
          src="/profile_picture.png"
          width={64}
          height={64}
        />
      </div>

      <div className="text-lg lg:text-2xl mb-2">
        {`${yearOfExperience} years experince Front-End Engineer from Malaysia 🇲🇾 `}
      </div>
      <div className="text-lg lg:text-2xl mb-2">
        Specializing in Web (React) & Mobile Development (Android & iOS).
      </div>
      <div className="text-lg lg:text-2xl mb-2">
        Passionate about crafting beautiful UI/UX and sharing insights as a Tech
        Writer on Medium. 🔥
      </div>

      <div>
        {resume && (
          <Link
            href={resume.url}
            className="rounded-md bg-[#4682c8] dark:bg-[#9dccf0]"
          >
            {resume.icon}
            {resume.name}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProfileSection;
