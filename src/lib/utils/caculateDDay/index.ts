export const caculateDDay = (targetDay: string): string => {
  const now = new Date();
  const targetDate = new Date(targetDay);

  now.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  const timeDiff = targetDate.getTime() - now.getTime();

  if (timeDiff > 0) {
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return `D - ${days}`;
  } else if (timeDiff === 0) {
    return "D - day";
  } else {
    const days = Math.floor(Math.abs(timeDiff) / (1000 * 60 * 60 * 24));
    return `D + ${days}`;
  }
};
