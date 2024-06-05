# Instructions

- Run `npm install` to install the dependencies.
- Run `npm run test` to run the tests in watch mode.
- Add code to the relevant source code files in the `src` directory and save to re-run the tests.

# Challenge spec

Given a list (array) of objects where each object has a:
- `date` - non-negative integer timestamp in milliseconds
- `price` - price (non-negative number)
- Example: `{ date: 1704085200000, price: 10.5 }`

Implement the function `avgDailyPrice` (in `avgDailyPrice.ts`) to return a list of objects of the same structure, where each object has the date of the first item for that day and the average price for that entire day.

## Assumptions

- You can assume the list is sorted by date.
- You can assume prices exist and are non-negative.
- You can assume dates exist and are valid non-negative timestamps in milliseconds.