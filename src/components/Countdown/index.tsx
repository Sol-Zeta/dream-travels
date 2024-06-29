import React from "react";
import { Text } from "./styles";

export const Countdown = ({ days }: any) => {
  return (
    <div>
        {days > 0 ? (
            <Text>{`⏳ ${days} days left until the trip of your dreams`}</Text>
        ) : (
            <Text>{`🛬 The travel date has already passed`}</Text>
        )}
    </div>
  );
};
