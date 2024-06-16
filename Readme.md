# QuizMaster

QuizMaster is a dynamic quiz-taking web application built with Vite and React. It leverages the Open Trivia Database (OpenTDB) API for fetching quiz questions, Lodash for data manipulation, Hot Toast for notifications, Tailwind CSS for styling, and Lucide for icons. It includes simple user management using local storage or firebase.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)

## Features

- Fetches quiz questions from the OpenTDB API
- Filters questions using Lodash
- Provides real-time notifications using react-hot-toast
- Uses Tailwind CSS for styling
- Integrates Lucide for icons
- User management 
## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/MoDev40/quiz-master.git
    cd quiz-master
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

## Usage

1. Visit the local development server at `http://localhost:3000`.
2. Register or log in to start taking quizzes.
3. Select the quiz category and difficulty level.
4. Answer the quiz questions and get instant feedback.

## Technologies Used

- **Vite**: For blazing-fast build and development.
- **React**: A JavaScript library for building user interfaces.
- **OpenTDB API**: For fetching quiz questions.
- **Lodash**: For data manipulation and filtering.
- **React-hot-toast**: For real-time notifications.
- **Tailwind CSS**: For utility-first CSS styling.
- **Lucide**: For beautiful icons.
- **Local Storage**: For simple user management.

## Project Structure

```plaintext
quiz-master/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── (image and other static files)
│   │   
│   │   
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── vite.config.js