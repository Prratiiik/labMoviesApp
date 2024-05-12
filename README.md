## Overview 

> This project is a front-end React application. You can use it to discover the latest movies and get more information on them. If you have a [TMDb](https://www.themoviedb.org/) account, you can login with that account in this app to rate movies, add them to your favorites list.

It uses:

- **React**: as the main UI library
- **React Router**: for routing
- **Material UI**: for React components that implement Material Design
- **Axios**: for making API requests to TMDb
- **TMDB APIs**: for fetching all information related to movies
- **Storybook**: for documenting and developing React components
- **Reactquery**: for caching API calls

# Features

- [x] View Upcoming Movies
- [x] View Current Movies
- [x] View Upcoming Movies 
- [x] View current movies 
- [x] View Actors
- [x] View Popular Movies
- [x] View TvSeries
- [x] View and write reviews 
- [x] Add Movie to favourites list 
- [x] Search movies 
- [x] Add Movies to watch list 
- [x] Filter Movies by genre and language 
- [x] Filter Seriesby genre and language
- [x] Sort movies by various criteria 
- [x] Show similar movies based on the movie or series being viewed

## Feature Design

#### Landing page

> Shows a paginated list of popular movies from the TMDB endpoint

![Screenshot (192)](https://github.com/Prratiiik/labMoviesApp/assets/144805450/b6d8063d-b160-46be-bd23-9e1233b13c10)


#### Upcoming movies page   

> Shows a paginated list of upcoming movies from the TMDB endpoint

![Screenshot 2024-05-12 230251](https://github.com/Prratiiik/labMoviesApp/assets/144805450/ebc4e08c-03eb-4dd9-9c51-af62c8a9ddef)


#### Movie information and cast details

> Clicking on a movie card leads to this page

![Screenshot (195)](https://github.com/Prratiiik/labMoviesApp/assets/144805450/efa1fdf8-8294-4411-a9a7-f66d1eaa6b41)



#### Similar movies

> Shows a list of similar movies based on the current movie selected

![Screenshot 2024-05-12 230439](https://github.com/Prratiiik/labMoviesApp/assets/144805450/d1fead13-41f6-4d20-b9d6-9d5c1219b387)


#### Movie reviews

> This page shows reviews of a movie

![Screenshot (196)](https://github.com/Prratiiik/labMoviesApp/assets/144805450/ff7fb7da-3753-4f07-a303-5d6b5444cff8)


#### Write reviews

> A review form that can be used to write reviews

![Screenshot 2024-05-12 225541](https://github.com/Prratiiik/labMoviesApp/assets/144805450/409587e3-1390-413e-b772-2c68a48903f2)


#### Favourite movies page

> Shows the movies that are marked as favourite

![Screenshot 2024-05-12 225541](https://github.com/Prratiiik/labMoviesApp/assets/144805450/7ee8c718-4ea8-4a13-9473-a3fce28f00b4)


#### Filtering and sorting

> Allows to filter and sort movies based on a criteria

![Screenshot (193)](https://github.com/Prratiiik/labMoviesApp/assets/144805450/19e1c8ab-5938-4bea-9458-06dda28dbedd)


#### Storybook

> Used for component development


![Screenshot 2024-05-12 224358](https://github.com/Prratiiik/labMoviesApp/assets/144805450/0b1fb84c-73d6-4cc7-a3ab-14c0a10fc7d6)

 

## Installation

**Clone the repo:**

```bash
git clone [https://github.com/rukman7/Movie-application.git](https://github.com/Prratiiik/labMoviesApp/tree/master)
cd Movie-application
```

**Install the dependencies:**

```bash
npm install
```

**Set the environment variables:**

Create a `.env` file which includes all your secret environment variables.

This project needs the following environment variables:

```bash
VITE_TMDB_KEY=<INSERT TMDB API KEY HERE>
```

To get a TMDb API key, visit https://www.themoviedb.org/documentation/api

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
