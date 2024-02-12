# Vercel Clone

This project is a clone of Vercel, built with React and Vite. It provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Project Structure

The frontend directory structure is as follows:
frontend/ .eslintrc.cjs index.html package.json 
public/ src/ App.jsx 
components/ Button.jsx ErrorBoundary.jsx Header.jsx Input.jsx Welcome.jsx index.css main.jsx 
service/ apiService.js 
View/ Home.jsx Submission.jsx


## Setup

To set up the frontend project, follow these steps:

1. Navigate to the `frontend` directory.
2. Run `npm install` to install the project dependencies.

## Boot

To start the frontend project, run `npm run dev` in the `frontend` directory. This will start the Vite development server.

## Dependencies

The frontend project uses the following dependencies:

- React for building the UI.
- Vite for building the project and providing a development server.
- Axios for making HTTP requests.
- Socket.io-client for real-time communication with the server.
- @emotion/react and @emotion/styled for styling components.

For more information, refer to the `package.json` file in the `frontend` directory.

## How to Use
- Navigate to the Submission Page: The submission page is where you can submit your GitHub repository for deployment. You can navigate to the submission page by clicking on the "Submission" link in the header.

- Enter your GitHub Repository Link: In the "GitHub Repo Link" field, enter the URL of the GitHub repository you want to deploy. The URL should be in the format https://github.com/username/repo.

- Enter a Slug (Optional): In the "Slug" field, you can enter a slug for your project. This is optional. If you don't provide a slug, one will be generated for you.

- Click "Deploy": Click the "Deploy" button to submit your repository for deployment. While your repository is being deployed, the button will display "In Progress".

- View the Logs: After you've submitted your repository, you can view the logs for your deployment. The logs will automatically update as new logs are generated.

- View Your Deployed Application: A preview URL will be displayed above the logs. You can click this URL to view your deployed application. (this may take few minutes)

- Start a New Submission: To start a new submission, click the "New Submission" button. This will take you back to the submission page where you can submit a new repository for deployment.

- Please note that this application is a clone of Vercel and is intended for educational purposes. It may not support all the features of Vercel.