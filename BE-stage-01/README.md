# Stage 0: Getting Started - Basic API

## Task Description

A basic API built with Express and TypeScript.

## Implementation

## Setup and Running

## Available Scripts

---

## API Documentation

This project provides a public API that returns a JSON response with the following details:

- The number that was classified.
- Boolean indicating if the number is prime.
- Boolean indicating if the number is perfect.
- An array of properties that the number has (e.g., "armstrong", "odd").
- The sum of the digits of the number.
- A fun fact about the number.

### Endpoint URL

`GET /api/classify-number?number=<number>`

### Request Format

This endpoint accepts a `GET` request and requires the number parameter.

### Response Format

A JSON object containing the following keys:

- `number`: The number that was classified.
- `is_prime`: Boolean indicating if the number is prime.
- `is_perfect`: Boolean indicating if the number is perfect.
- `properties`: An array of properties that the number has (e.g., "armstrong", "odd").
- `digit_sum`: The sum of the digits of the number.
- `fun_fact`: A fun fact about the number.

### Bad Request

- JSON Response Format (400 Bad Request)

```json
{
  "number": "alphabet",
  "error": true
}
```

Example Response:

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

---

## Deployment

To deploy the application locally, follow these steps:

## Screenshots/Demo
