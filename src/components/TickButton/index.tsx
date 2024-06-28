import React from "react";
import Image from "next/image";
import CheckIconOn from "@/assets/check-on.png";
import CheckIconOff from "@/assets/check-on.png";
import { Container } from "./styles";

interface TickButtonProps {
  isActive: boolean;
  onClick: () => void;
}

export const TickButton = ({ isActive, onClick }: TickButtonProps) => {
  return (
    <Container onClick={onClick}>
      <Image
        src={isActive ? CheckIconOn : CheckIconOff}
        alt="Completed icon"
        width={20}
        height={20}
      />
      <p>{isActive ? "Completed" : "Mark as completed"}</p>
    </Container>
  );
};
