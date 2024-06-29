import React from "react";
import Image from "next/image";
import appLogo from "@/assets/app-logo.png";
import Button, { ButtonVariants } from "@/components/Button";
import { AppHeader } from "./styles";

const Header = () => {
  return (
      <AppHeader>
        <Image
          src={appLogo}
          alt="Dream Travels Logo"
          width={48}
          height={48}
        />
        <Button onClick={()=>{}} variant={ButtonVariants.SECONDARY}>Find my next trip</Button>
      </AppHeader>
  );
};

export default Header;
