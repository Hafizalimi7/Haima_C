export const getInitials = (username: string) => {
  return username
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

export const formatStatus = (status: string): string => {
  return status
    .toLowerCase()
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
};
