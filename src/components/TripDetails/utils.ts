import { Trip } from "@/types/index";

const RANDOM_TRIP = "RANDOM_TRIP";

export const calculateDaysDifference = (today: Date, comingDate: Date) => {
  //@ts-ignore
  const differenceInMs = new Date(comingDate) - new Date(today);
  return Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
};

// TODO: Refactor
// This function doesn't follow the Single Responsability Solid Principle
export const getDaysLeft = (tripData: Trip) => {
  const { itinerary, ...tripDataToStore } = tripData;
  const storedTrip = localStorage.getItem(RANDOM_TRIP);
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  if (!storedTrip) {
    const comingDate = new Date(currentYear, currentMonth + 3, currentDay);
    localStorage.setItem(
      RANDOM_TRIP,
      JSON.stringify({ ...tripDataToStore, date: comingDate })
    );
    return calculateDaysDifference(today, comingDate);
  }
  const storedComingDate = JSON.parse(storedTrip).date;
  return calculateDaysDifference(today, storedComingDate);
};
