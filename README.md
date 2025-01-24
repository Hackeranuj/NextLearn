
# NextLearn - Educational Platform

NextLearn is a modern educational platform built using the MERN (MongoDB, Express, React, Node.js) stack. It enables students to log in, purchase courses, and study efficiently. Admins can manage the entire course lifecycle, from creation to publication, with detailed lectures. The platform is fully responsive and integrates with Stripe for secure payments and Redux for efficient API management.

## Features

- **Student Features:**
  - User authentication (sign up, login, logout)
  - Browse and search courses
  - Purchase courses securely via Stripe
  - Access purchased courses and study lectures

- **Admin Features:**
  - Manage courses (create, update, delete)
  - Publish and unpublish courses
  - Add lectures and course details
  - Monitor student activities and purchases

- **General Features:**
  - Fully responsive design
  - Stripe integration for secure payments
  - Redux for API integration and state management
  - User-friendly interface

## Tech Stack

- **Frontend:**
  - React.js
  - Redux
  - React Router
  - Tailwind CSS (or any CSS framework of choice)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (for database)
  - Mongoose (MongoDB ODM)

- **Authentication:**

- **Payments:**
  - Stripe API (for handling payments)

## Installation

Follow the steps below to set up NextLearn locally.

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v18 or higher)
- MongoDB
- Stripe account (for payment integration)

### Clone the repository

```bash
git clone https://github.com/yourusername/nextlearn.git
cd nextlearn
```

### Backend Setup

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:

    ```env
    MONGO_URI=your_mongo_connection_uri
    JWT_SECRET=your_jwt_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

The application should now be running locally on [http://localhost:5173] and Backend(http://localhost:8080).

## Usage

### Student Workflow

1. **Sign Up / Log In:**
   - Students can sign up or log in to the platform using their credentials.
   
2. **Browse and Purchase Courses:**
   - Once logged in, students can browse available courses and purchase them through Stripe.

3. **Access Courses:**
   - After purchase, students can access their purchased courses and study lectures.

### Admin Workflow

1. **Login as Admin:**
   - Admins can log in using a specific admin credential.

2. **Manage Courses:**
   - Admins can create new courses, update existing ones, add lectures, and publish/unpublish courses.

3. **Payment Management:**
   - Admins can track student payments and course enrollments.

## Testing

You can run tests for the application using:

```bash
npm run test
```

Make sure to have a testing environment set up for both frontend and backend if needed.

## Deployment

1. Deploy the backend and frontend to a platform of your choice (e.g., Heroku, Vercel, Netlify, Render).
2. Ensure that the environment variables for production (e.g., MongoDB URI, Stripe API key) are set correctly.

## Contributing

We welcome contributions to the project! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and test thoroughly.
4. Submit a pull request for review.


## Contact

For any questions or feedback, please contact us at anujgahra244304@gmail.com.

---

Feel free to customize it based on your specific project setup!
