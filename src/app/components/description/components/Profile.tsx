import React from "react";
import ProfilePic from "@/app/assets/profilepic.png";
import Image from "next/image";
import { Label } from "@/app/common/Label";

const Profile = () => {
  return (
    <div className="flex-col flex justify-center items-center">
      <Image className="w-40 rounded-full" src={ProfilePic} alt="profilepic" />
      <Label text="Daniel Gutierrez" className="pt-4 font-semibold text-black" />
      <Label text="Back-End Developer" className="p-2 text-sm text-black" />
    </div>
  );
};

export default Profile;
