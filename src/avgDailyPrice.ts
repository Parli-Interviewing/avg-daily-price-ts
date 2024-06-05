interface PriceItem {
  date: number // e.g. 1704085200000
  price: number // e.g. 10.5
}

export const avgDailyPrice = (list: PriceItem[]): PriceItem[] => {
  // Write your code here
  return []
}

const getDayStartTime = (time: number) => {
  const date = new Date(time);
  date.setUTCMilliseconds(0);
  date.setUTCSeconds(0);
  date.setUTCMinutes(0);
  date.setUTCHours(0);
  return date.getTime();
}
