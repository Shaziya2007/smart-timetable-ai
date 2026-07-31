Smart Timetable Generator Portal
REST API Documentation
Version: 1.0
Base URL
http://localhost:5000/api


Authentication APIs

1. Login
Endpoint
POST /auth/login

Description
Authenticates a user and returns a JWT token.
Access
Public

Request
{
  "email": "admin@college.edu",
  "password": "password123"
}

Success Response
{
  "success": true,
  "message": "Login Successful",
  "token": "JWT_TOKEN",
  "user": {
    "_id": "...",
    "name": "Harini",
    "role": "admin"
  }
}


2. Get Current User
GET /auth/me

Header
Authorization: Bearer JWT_TOKEN


User APIs

1. Get All Users
GET /users

Query Parameters
/users?role=faculty

/users?role=student

/users?department=IT


2. Get User by ID
GET /users/:id


3. Create User
POST /users

Access
Admin

Request
{
  "name":"John",
  "email":"john@college.edu",
  "password":"123456",
  "role":"faculty",
  "departmentId":"..."
}


4. Update User
PUT /users/:id


5. Delete User
DELETE /users/:id


Department APIs

Get Departments
GET /departments


Get Department
GET /departments/:id


Add Department
POST /departments


Update Department
PUT /departments/:id


Delete Department
DELETE /departments/:id


Subject APIs

Get Subjects
GET /subjects

Query
GET /subjects?department=IT


Get Subject
GET /subjects/:id


Create Subject
POST /subjects


Update Subject
PUT /subjects/:id


Delete Subject
DELETE /subjects/:id


Classroom APIs

Get Classrooms
GET /classrooms

Query
GET /classrooms?type=lab


Get Classroom
GET /classrooms/:id


Add Classroom
POST /classrooms


Update Classroom
PUT /classrooms/:id


Delete Classroom
DELETE /classrooms/:id


Section APIs

Get Sections
GET /sections

Queries
GET /sections?department=IT

GET /sections?year=3

GET /sections?semester=5

GET /sections?section=A


Get Section
GET /sections/:id


Create Section
POST /sections


Update Section
PUT /sections/:id


Delete Section
DELETE /sections/:id


Time Slot APIs

Get Time Slots
GET /timeslots


Get Time Slot
GET /timeslots/:id


Add Time Slot
POST /timeslots


Update Time Slot
PUT /timeslots/:id


Delete Time Slot
DELETE /timeslots/:id


Timetable APIs

Generate Timetable
POST /timetable/generate

Request
{
    "sectionId":"...",
    "academicYear":"2026-27"
}

Response
{
    "success":true,
    "message":"Timetable Generated Successfully"
}


Get Timetable
GET /timetable

Supported Filters
GET /timetable?department=IT

GET /timetable?year=3

GET /timetable?semester=5

GET /timetable?section=A

GET /timetable?faculty=John

GET /timetable?room=A101

GET /timetable?academicYear=2026-27


Get Single Timetable Entry
GET /timetable/:id


Edit Timetable
PUT /timetable/:id


Delete Timetable
DELETE /timetable/:id


Adjustment APIs
Handles
Guest Lecture
Cancellation
Reschedule
Makeup Class

Create Adjustment
POST /adjustments

Example
{
    "type":"guest",
    "originalTimetableId":"...",
    "reason":"Guest Lecture by Industry Expert",
    "newFacultyId":"..."
}


Get Adjustments
GET /adjustments

Filters
GET /adjustments?type=guest

GET /adjustments?type=cancelled

GET /adjustments?type=rescheduled

GET /adjustments?type=makeup


Get Adjustment
GET /adjustments/:id


Update Adjustment
PUT /adjustments/:id


Delete Adjustment
DELETE /adjustments/:id


Notification APIs

Get Notifications
GET /notifications


Get Notification
GET /notifications/:id


Create Notification
POST /notifications


Mark as Read
PUT /notifications/:id/read


Delete Notification
DELETE /notifications/:id


Standard Response Format
Success
{
    "success": true,
    "message": "Operation Successful",
    "data": {}
}


Error
{
    "success": false,
    "message": "Something went wrong"
}


Authentication
All APIs except login require:
Authorization: Bearer JWT_TOKEN


API Flow
React Frontend
      │
Axios Request
      │
Express Routes
      │
Controllers
      │
Services
      │
Mongoose Models
      │
MongoDB Atlas
      │
JSON Response
      │
React Frontend

One suggestion before you freeze this document
Since this is a hackathon, I recommend versioning your APIs from the beginning. Instead of:
/api/users
/api/timetable

use:
/api/v1/users
/api/v1/timetable
/api/v1/departments

It doesn't add much work now, but it follows industry practice and gives you room to evolve the APIs later without breaking existing clients. It's a small touch that also looks good during reviews.


