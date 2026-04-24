/*
Given
    https://petstore.swagger.io/v2/pet
When
    User sends a POST request to the URL with the following body:
            {
            "id": 313,
            "category": {
                "id": 1,
                "name": "CAT"
            },
            "name": "Tekir",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                "id": 1,
                "name": "string"
                }
            ],
            "status": "available"
            }

Then
    HTTP Status Code should be 200
And
    Response content type is "application/json"
And
    Response body should be like:
        {
            "id": 313,
            "category": {
                "id": 1,
                "name": "CAT"
            },
            "name": "Tekir",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 1,
                    "name": "string"
                }
            ],
            "status": "available"
        }

*/

import { test, expect } from "@playwright/test";
test("POST Request usage", async ({ request }) => {
  const payload = {
    id: 313,
    category: {
      id: 1,
      name: "CAT",
    },
    name: "Tekir",
    photoUrls: ["string"],
    tags: [
      {
        id: 1,
        name: "string",
      },
    ],
    status: "available",
  };

  const response = await request.post("https://petstore.swagger.io/v2/pet", {
    data: payload,
  });

  const responseBody = await response.json();
  console.log(responseBody);

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toBe("application/json");

  //1. yol
  expect(responseBody).toHaveProperty("id");
  expect(typeof responseBody.id).toBe("number");
  expect(responseBody.id).toBe(313);

  //2.yol
  expect(responseBody).toMatchObject({
    id: 313,
    category: {
      id: 1,
      name: "CAT",
    },
    name: "Tekir",
    photoUrls: ["string"],
    tags: [
      {
        id: 1,
        name: "string",
      },
    ],
    status: "available",
  });
});