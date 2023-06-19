import React from "react";
import Image from "next/image";
import LogoImg from "@/assets/logo.svg";

function Logo() {
  return (
    <div className="p--container">
      <Image src={LogoImg} alt="logo" width={110} height={30} />;
    </div>
  );
}

export default Logo;
