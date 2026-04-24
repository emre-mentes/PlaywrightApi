/*
    Given
        1) https://jsonplaceholder.typicode.com/todos/198
        2) {
              "title": "Wash the dishes"
           }
    When
      I send PATCH Request to the Url
    Then
          Status code is 200
          And response body is like
              {
                "userId": 10,
                "title": "Wash the dishes",
                "completed": true,
                "id": 198
              }
     */

              
import { test, expect } from "@playwright/test";
test("Patch request", async ({ request }) => {
  const response = await request.patch(
    "https://jsonplaceholder.typicode.com/todos/198",
    {
      data: {
        title: "Wash the dishes",
      },
    },
  );

  expect(response.status()).toBe(200);
  const responseBody = await response.json();

  expect(responseBody.userId).toBe(10);
  expect(responseBody.title).toBe("Wash the dishes");
  expect(responseBody.completed).toBe(true);
  expect(responseBody.id).toBe(198);
});