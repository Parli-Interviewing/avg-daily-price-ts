# Instructions

- Run `npm install` to install the dependencies.
- Run `npm run test` to run the tests in watch mode.
- Add code to the relevant source code files in the `src` directory and save to re-run the tests.
- **You DO NOT need to optimize your code! Just get the tests to pass and you're good!**
- _**Console logs will be printed at the beginning of the test output in the terminal below.**_

# Challenge spec

Given a list (array) of objects where each object has a:
- `date` - non-negative integer timestamp in milliseconds
- `price` - non-negative number
- Example: `{ date: 1704085200000, price: 10.5 }`

Implement the function `avgDailyPrice` (in [`avgDailyPrice.ts`](src/avgDailyPrice.ts)) to return a list of objects **of the same structure as the input**, where each object's `date` is the start of that day (the result of `getDayStartTime`) and the average `price` for that entire day.

The utility function `getDayStartTime` is available for you to use. It takes a timestamp and returns the timestamp representing the start of that day.

## Assumptions

- You can assume the list is sorted by date.
- You can assume prices exist and are non-negative.
- You can assume dates exist and are valid non-negative timestamps in milliseconds.
