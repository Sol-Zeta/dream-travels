import React from "react";
import Image from "next/image";
import appLogo from "@/assets/app-logo.png";
import Button, { ButtonVariants } from "@/components/Button";
import { AppHeader } from "./styles";
import { useModal } from "@/context/ModalContext";
import { TripDetails } from "../TripDetails";
import { useSelector } from "react-redux";
import { getTrips } from "@/store/slices/trips";
import { getRandomTrip } from "./utils";

const Header = () => {
  const { openModal }: any = useModal();
  const { trips } = useSelector(getTrips);

  const handleClick = () => {
    const randomTrip = getRandomTrip(trips);
    openModal(<TripDetails {...randomTrip} showCountdown={true} />);
  };

  return (
    <AppHeader>
      <Image src={appLogo} alt="Dream Travels Logo" width={48} height={48} />
      <Button onClick={handleClick} variant={ButtonVariants.SECONDARY}>
        Find my next trip 🍀
      </Button>
    </AppHeader>
  );
};

export default Header;
