GoldStone Project
Welcome to the GoldStone project! This is a user management application built with React.js on the frontend and Node.js with MongoDB on the backend.

Prerequisites
Before running the project, please ensure that you have the following prerequisites installed on your system:
Node.js (v14 or above)
MongoDB

Getting Started
To get started with the project, follow the steps below:
1. Clone the repository to your local machine:
git clone https://github.com/CHANDRAKIRAN1729/GoldStoneProject.git

2. Change to the project directory:
cd GoldStoneProject

3. Install the dependencies for the frontend:
cd ../user-management-frontend
npm install

4. Install the dependencies for the backend:
cd ../user-management-app
npm install

5. Configure the environment variables:
Create a .env file in the server directory.
Provide the necessary environment variables in the .env file.

6. Start the MongoDB server:
Make sure MongoDB is running on your system. If not, start the MongoDB server using the appropriate command for your operating system.
Create the database: "user-management-db"

7. Start the backend server:
cd ../user-management-app
npm start
This will start the backend server on http://localhost:3001.

8. Start the frontend development server:
cd ../user-management-frontend
npm start
This will start the frontend development server on http://localhost:3000.

9. Open your web browser and visit http://localhost:3001/api/users to access the API and save the data into the database.

10. Open your web browser and visit http://localhost:3000 to access the React application.
