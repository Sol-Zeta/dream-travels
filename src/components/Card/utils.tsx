export const tripDescription = (description: string): string => {
  const maxLength = 140;

  if (!description) return "";
  if (description.length <= maxLength) return description;

  let trimmed = description.slice(0, maxLength + 1);
  let lastSpace = trimmed.lastIndexOf(" ");

  trimmed = trimmed.slice(0, lastSpace);
  return trimmed + "...";
};
