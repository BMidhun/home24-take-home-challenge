# Notes

## Blockers faced

In the course of developing the application, I was receiving random responses while making api call to the /graphql endpoint. Applied the patch, but it couldn't solve the issue. The following were the responses I encountered frequently.

- response with status code 422
- response with status code 200 with response data as null

As a workaround solution to this blocker, the successful response was mocked and the code for mocking the existing api can be found in the directory client/src/mock/index.js.

Comment the code 

if (process.env.NODE_ENV === "development") {
  startMockServer();
}

from the file client/src/index.tsx to make the api call to the actual local server

## Frontend Coverage Report

To see the test coverage report, please follow the steps below

- Open a terminal window from the directory client

- Run the command npm run coverage

- You could see the test coverage report from the terminal window

- The command will generate a coverage folder under client directory

- To view the report in a browser, open the index.html file from the directory client/coverage/lcov-report/
