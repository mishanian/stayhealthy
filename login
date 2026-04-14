curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d '{"email":"mehran@example.com","password":"Password123"}'

{
  "email": "mehran@example.com",
  "password": "Password123",
  "id": 101
}
