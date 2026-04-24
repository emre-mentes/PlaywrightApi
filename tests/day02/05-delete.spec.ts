/*
        Given
            https://jsonplaceholder.typicode.com/todos/198
        When
            I send DELETE Request to the Url
        Then
            Status code is 200
        And Response body is { }
    */
import { test, expect } from "@playwright/test";
test("DELETE Request", async ({ request }) => {
  const response = await request.delete(
    "https://jsonplaceholder.typicode.com/todos/198",
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  expect(responseBody).toEqual({});

});