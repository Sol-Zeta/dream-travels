import React from "react";
import Image from "next/image";
import { Trip } from "@/types/index";
import { tripDescription } from "./utils";
import LinkButton from "@/components/LinkButton";
import { ButtonVariants } from "@/components/Button";
import {
  CallToActionContainer,
  CardContainer,
  ImageContainer,
  TextContent,
} from "./styles";
import { useDispatch } from "react-redux";
import { deleteTripByIdAction } from "@/store/actions";
import { UnknownAction } from "@reduxjs/toolkit";

enum ButtonActions {
  SEE_DETAILS,
  EDIT,
  DELETE,
}

const Card: React.FC<Trip> = ({ id, title, description, photo_url, status }) => {
    
  const dispatch = useDispatch();
  
  
  const handleClick = (action: ButtonActions) => {
    switch (action) {
      case ButtonActions.SEE_DETAILS:
        break;
      case ButtonActions.EDIT:
        break;
      case ButtonActions.DELETE:
        dispatch(deleteTripByIdAction(id) as unknown as UnknownAction);
        break;

      default:
        break;
    }
  };

  return (
    <CardContainer data-testid={`card-${id}`}>
      <ImageContainer>
        <Image src={photo_url} alt={title} fill />
      </ImageContainer>
      <TextContent>
        <div>
          <h2>{title}</h2>
          <p>{tripDescription(description)}</p>
        </div>
        <CallToActionContainer>
          <div>
            <LinkButton onClick={() => handleClick(ButtonActions.SEE_DETAILS)}>
              See trip details
            </LinkButton>
          </div>
          <div>
            <LinkButton onClick={() => handleClick(ButtonActions.EDIT
            )}>
              Edit
            </LinkButton>
            <LinkButton
              variant={ButtonVariants.SECONDARY}
              onClick={() => handleClick(ButtonActions.DELETE)}
            >
              Delete
            </LinkButton>
          </div>
        </CallToActionContainer>
      </TextContent>
    </CardContainer>
  );
};

export default Card;
