# Activity Booking API

A simple API for booking activities built with Next.js and Supabase.

## Features

- User authentication (signup/login)
- Browse available activities
- Book activities
- View your bookings

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create `.env.local` file with:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```
4. Run the development server: `npm run dev`

## Database Schema

### Activities Table
- `id` (UUID)
- `title` (text)
- `description` (text)
- `location` (text)
- `price` (numeric)
- `available_slots` (int8)
- `created_at` (timestamp)

### Bookings Table
- `id` (UUID)
- `user_id` (UUID) - references `auth.users.id`
- `activity_id` (UUID) - references `activities.id`
- `timestamp` (timestamp)

## API Endpoints

### Authentication
- `POST /api/signup` - Register a new user
- `POST /api/login` - Authenticate a user

### Activities
- `GET /api/activities` - Get all available activities
- `GET /api/activities/:id` - Get a single activity

### Bookings
- `POST /api/book` - Book an activity (requires auth)
- `GET /api/my-bookings` - Get user's bookings (requires auth)

## Testing with cURL

### Signup
```bash
curl -X POST http://localhost:3000/api/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password"}'
```

### Login
```bash
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password"}'
```

### Get Activities
```bash
curl http://localhost:3000/api/activities
```

### Book Activity
```bash
curl -X POST http://localhost:3000/api/book \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"activity_id":"activity-uuid"}'
```

### Get My Bookings
```bash
curl http://localhost:3000/api/my-bookings \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```