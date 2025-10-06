# BFHL API 

A REST API built with Node.js and Express that processes arrays and returns categorized data.

## Features

- Separates numbers into odd and even arrays
- Extracts alphabets and converts to uppercase
- Identifies special characters
- Calculates sum of all numbers
- Creates alternating caps concatenation of alphabets in reverse order

## Installation

1. Clone or download this project
2. Install dependencies:
```bash
npm install
```

## Running the Server

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

The server will start on port 3000 (or the PORT environment variable if set).

## API Endpoint

### POST /bfhl

**URL:** `http://localhost:3000/bfhl`

**Method:** POST

**Content-Type:** application/json

**Request Body:**
```json
{
  "data": ["array", "of", "mixed", "values", "1", "2", "$", "@"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "rajneesh_gupta_15031999",
  "email": "rajneesh@example.com",
  "roll_number": "21BCS001",
  "odd_numbers": ["1"],
  "even_numbers": ["2"],
  "alphabets": ["ARRAY", "OF", "MIXED", "VALUES"],
  "special_characters": ["$", "@"],
  "sum": "3",
  "concat_string": "SeuLaVdExIm"
}
```

## Testing

Test the API using curl:

```bash
# Example A
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}'

# Example B  
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["2","a", "y", "4", "&", "-", "*", "5","92","b"]}'

# Example C
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["A","ABcD","DOE"]}'
```

## Deployment

This API is ready to be deployed on platforms like:
- Vercel
- Railway
- Render
- Heroku
- Any Node.js hosting provider

Make sure to:
1. Set the PORT environment variable if required by your hosting provider
2. Update the user_id, email, and roll_number in server.js with your actual details

## Project Structure

```
├── server.js          # Main API server
├── package.json       # Dependencies and scripts
├── test.js           # Test file for validation
└── README.md         # This file
```

## Important Notes

- Replace the user_id, email, and roll_number in server.js with your actual details
- The user_id format must be: "firstname_lastname_ddmmyyyy"
- All numbers in response are returned as strings
- The API handles error cases gracefully with appropriate HTTP status codes
