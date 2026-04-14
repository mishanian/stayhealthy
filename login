curl -X POST https://your-api.example.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email":"mehran@example.com",
    "password":"ExamplePass123!"
  }'

Sample output:
{
  "success": true,
  "token": "your.jwt.token.here",
  "user": {
    "name": "Mehran Ishanian",
    "email": "mehran@example.com",
    "role": "patient"
  }
}

IMPORTANT:
Replace the URL, credentials, and output with your real cURL command and real API response.
