# ecommerce-backend--6-digit-random-string-
# ecommerce-backend--6-digit-random-string-

# File Upload App

This is a simple file upload application built with React for the frontend and Node.js for the backend.

## Features

- Allows users to upload files (images, PDFs, videos, etc.).
- Files are securely encrypted before storage.
- Provides a public path to access the files, but the files are not readable from that path.
- Frontend UI for file upload.

## Tech Stack

- Frontend:
  - React

- Backend:
  - Node.js
  - Express

## Folder Structure

file-upload-app/
│
├── Backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── middlewares/
│ │ ├── routes/
│ │ ├── utils/
│ │ ├── app.js
│ │ └── server.js
│ ├── .env
│ └── Dockerfile
│
└── file-upload-app/
├── public/
├── src/
│ ├── components/
│ │ └── FileUpload.js
│ ├── App.js
│ └── index.js
├── package.json
├── .env
└── Dockerfile

shell
Copy code

## Usage

### Backend

1. Install dependencies:
   ```bash
   cd Backend
   npm install
Set up environment variables:
Create a .env file in the Backend directory and add the following variables:

makefile
Copy code
PORT=3000
MONGO_URI=your_mongodb_connection_string
ENCRYPTION_KEY=your_32_character_long_secret_key
Run the backend server:

bash
Copy code
npm start
Frontend
Install dependencies:

bash
Copy code
cd file-upload-app
npm install
Set up environment variables:
Create a .env file in the file-upload-app directory and add the following variables:

arduino
Copy code
REACT_APP_BACKEND_URL=http://localhost:3000
Run the frontend development server:

bash
Copy code
npm start
Docker Setup
To run the application with Docker, follow these steps:

Build the Docker images:

bash
Copy code
docker build -t backend-image Backend
docker build -t frontend-image file-upload-app
Run the Docker containers:

bash
Copy code
docker run -d --name backend-container -p 3000:3000 backend-image
docker run -d --name frontend-container -p 3001:80 frontend-image
The application should now be accessible at http://localhost:3001.
