interface PriceItem {
  date: number // e.g. 1704085200000
  price: number // e.g. 10.5
}

export const avgDailyPrice = (list: PriceItem[]): PriceItem[] => {
  // Write your code here
  return []
}

const isSameDay = (a: number, b: number) => {
  const aDate = new Date(a)
  const bDate = new Date(b)
  return aDate.getUTCFullYear() === bDate.getUTCFullYear() &&
    aDate.getUTCMonth() === bDate.getUTCMonth() &&
    aDate.getUTCDate() === bDate.getUTCDate()
}
