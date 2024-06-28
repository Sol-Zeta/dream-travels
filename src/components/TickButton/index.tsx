import React, { useState } from "react";
import Image from "next/image";
import CheckIconOn from "@/assets/check-on.png";
import CheckIconOff from "@/assets/check-off.png";
import { Container } from "./styles";

interface TickButtonProps {
  isActive: boolean;
  onClick: (value: boolean) => void;
}

export const TickButton = ({ isActive, onClick }: TickButtonProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(isActive);

  const handleClick = () => {
    onClick(!isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <Container onClick={handleClick} data-testid="tick-button">
      <Image
        src={isChecked ? CheckIconOn : CheckIconOff}
        alt="Completed icon"
        width={20}
        height={20}
      />
      <p>{isChecked ? "Completed" : "Mark as completed"}</p>
    </Container>
  );
};
