## Note

In the course of developing the application, I was receiving random responses while making api call to the /graphql endpoint. The following were the responses I encountered frequently.

- response with status code 422
- response with status code 200 with response data as null


As a workaround solution to this blocker, the successful response was mocked and the code for mocking the existing api can be found in the directory client/src/mock/index.js.

