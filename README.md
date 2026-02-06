# Newsify – React News Application

Newsify is a responsive news web application built using React and Bootstrap that displays real-time news headlines using the GNews API. Users can browse news across multiple categories such as General, Technology, Business, Sports, Health, and World.
This project demonstrates practical frontend development skills including API integration, state management, caching, error handling, and responsive UI design.

## Live Demo

(Will add Netlify link here after deployment)

## Features

- Real-time news headlines using GNews API
- Category-based filtering (General, Technology, Business, Sports, Health, World)
- Responsive design for mobile, tablet, and desktop
- Client-side caching using localStorage to reduce API requests
- Error handling for API failures and rate limits
- Fallback image support for missing news images
- Fast and optimized performance

## Technologies Used

- React (Vite)
- JavaScript (ES6+)
- Bootstrap 5
- HTML5
- CSS3
- GNews API

## Project Structure

Newsify
│
├── public
│ └── news.png
│
├── src
│ ├── Components
│ │ ├── Navbar.jsx
│ │ ├── NewsBoard.jsx
│ │ └── NewsItem.jsx
│ │
│ ├── assets
│ │ └── NEWS.jpg
│ │
│ ├── App.jsx
│ ├── App.css
│ ├── index.css
│ └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md

## Environment Variables

This project requires the following environment variable:

VITE_API_KEY=your_gnews_api_key

You can get a free API key from:
https://gnews.io

## Author

Jeffrin TJ
(Full Stack Developer)
GitHub: https://github.com/jeffrintj

## Project Purpose
This project was built to practice and demonstrate React development skills including API integration, component-based architecture, state management, caching, and frontend performance optimization.
