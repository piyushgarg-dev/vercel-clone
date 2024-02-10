# Vercel Clone

This project is a clone of Vercel, built with React and Vite. It provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Project Structure

The frontend directory structure is as follows:
frontend/ .eslintrc.cjs index.html package.json 
public/ src/ App.jsx 
components/ Button.jsx ErrorBoundary.jsx Header.jsx Input.jsx Welcome.jsx index.css main.jsx 
service/ apiService.js 
View/ Home.jsx Logs.jsx Submission.jsx vite.config.js


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