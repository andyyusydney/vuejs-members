export function getDaysDifference(
  currentDate: Date,
  previousDate: Date
): number {
  if (!(currentDate instanceof Date || previousDate instanceof Date)) {
    // return -1 for the invalidate passed dates
    return -1;
  }

  const timeDifference = currentDate.getTime() - previousDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

export function getNameInitials(firstName: string, lastName: string): string {
  return `${firstName ? firstName[0].toUpperCase() : ""}${
    lastName ? lastName[0].toUpperCase() : ""
  }`;
}
