# Cube Portal Demo

This project demonstrates a responsive customer portal using React, Supabase for database management, and Unsplash API for fetching random images. The application is deployed on Vercel for preview and assessment purposes.

## Live Demo

The application is live and can be accessed at: https://cube-portal-demo.vercel.app/

## Important Note

This project uses Supabase for database operations and Unsplash API for fetching random images. Both of these services require personal account keys, which have been stored as environment variables for security reasons. The deployed version on Vercel includes the appropriate keys for demonstration purposes.
The unsplash API has a rate limit of 50 requests/hour so please use accordingly.

## Project Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Deployment

This application is deployed on Vercel with the necessary environment variables for Supabase and Unsplash API integration. You can view the live demo at https://cube-portal-demo.vercel.app/

## Running Locally

Environment Variables:
Create a `.env` file in the root directory with the following:

REACT_APP_SUPABASE_URL=your_supabase_url\
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key\
REACT_APP_UNSPLASH_KEY=your_unsplash_access_key

Supabase Table Setup:
Create a table named `customers` with fields:
- name (text)
- title (text)
- address (text)
