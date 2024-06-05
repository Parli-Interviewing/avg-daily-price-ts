import { expect, test } from 'vitest'
import { avgDailyPrice } from './avgDailyPrice'

const testCases = [
  {
    input: [],
    expected: [],
  },
  {
    input: [{ date: new Date('2024-01-01T00:00:00').getTime(), price: 1 }],
    expected: [{ date: new Date('2024-01-01T00:00:00').getTime(), price: 1 }],
  },
  {
    input: [
      { date: new Date('2024-01-01T03:24:00').getTime(), price: 1 },
      { date: new Date('2024-01-01T08:52:21').getTime(), price: 2 },
      { date: new Date('2024-01-02T00:00:00').getTime(), price: 3 },
    ],
    expected: [
      { date: new Date('2024-01-01T03:24:00').getTime(), price: 1.5 },
      { date: new Date('2024-01-02T00:00:00').getTime(), price: 3 },
    ],
  },
  {
    input: [
      { date: new Date('2024-01-01T00:00:00').getTime(), price: 1 },
      { date: new Date('2024-01-02T00:00:00').getTime(), price: 2 },
      { date: new Date('2024-01-02T00:00:00').getTime(), price: 3 },
    ],
    expected: [
      { date: new Date('2024-01-01T00:00:00').getTime(), price: 1 },
      { date: new Date('2024-01-02T00:00:00').getTime(), price: 2.5 },
    ],
  },
  {
    input: [
      { date: new Date('2024-01-01T00:00:00').getTime(), price: 1 },
      { date: new Date('2024-01-02T06:34:00').getTime(), price: 2 },
      { date: new Date('2024-01-02T10:04:00').getTime(), price: 3 },
      { date: new Date('2024-01-02T11:22:13').getTime(), price: 203 },
      { date: new Date('2024-01-02T11:22:14').getTime(), price: 421 },
      { date: new Date('2024-01-05T12:46:00').getTime(), price: 3 },
      { date: new Date('2024-01-05T12:46:01').getTime(), price: 10.25 },
    ],
    expected: [
      { date: new Date('2024-01-01T00:00:00').getTime(), price: 1 },
      { date: new Date('2024-01-02T06:34:00').getTime(), price: 157.25 },
      { date: new Date('2024-01-05T12:46:00').getTime(), price: 6.625 },
    ],
  },
  {
    input: [
      { date: new Date('2024-02-01T00:00:00').getTime(), price: 1 },
      { date: new Date('2024-04-01T06:34:00').getTime(), price: 2 },
      { date: new Date('2024-04-01T10:04:00').getTime(), price: 3 },
      { date: new Date('2024-04-01T11:22:13').getTime(), price: 203 },
      { date: new Date('2024-04-01T11:22:14').getTime(), price: 421 },
      { date: new Date('2025-01-05T12:46:00').getTime(), price: 3 },
      { date: new Date('2025-01-05T12:46:01').getTime(), price: 10.25 },
    ],
    expected: [
      { date: new Date('2024-02-01T00:00:00').getTime(), price: 1 },
      { date: new Date('2024-04-01T06:34:00').getTime(), price: 157.25 },
      { date: new Date('2025-01-05T12:46:00').getTime(), price: 6.625 },
    ],
  },
  {
    input: [
      { date: new Date('2024-02-01T00:00:00').getTime(), price: 1 },
      { date: new Date('2024-04-01T06:34:00').getTime(), price: 2 },
      { date: new Date('2024-05-01T10:04:00').getTime(), price: 3 },
      { date: new Date('2024-06-01T11:22:13').getTime(), price: 203 },
      { date: new Date('2024-07-10T11:22:14').getTime(), price: 421 },
      { date: new Date('2025-01-05T12:46:00').getTime(), price: 3 },
      { date: new Date('2032-01-05T12:46:00').getTime(), price: 10.25 },
    ],
    expected: [
      { date: new Date('2024-02-01T00:00:00').getTime(), price: 1 },
      { date: new Date('2024-04-01T06:34:00').getTime(), price: 2 },
      { date: new Date('2024-05-01T10:04:00').getTime(), price: 3 },
      { date: new Date('2024-06-01T11:22:13').getTime(), price: 203 },
      { date: new Date('2024-07-10T11:22:14').getTime(), price: 421 },
      { date: new Date('2025-01-05T12:46:00').getTime(), price: 3 },
      { date: new Date('2032-01-05T12:46:00').getTime(), price: 10.25 },
    ],
  },
]

testCases.forEach(({ input, expected }, index) => {
  test(`avgDailyPrice test case ${index + 1}`, () => {
    const result = avgDailyPrice(input)
    expect(result).toEqual(expected)
  })
})
