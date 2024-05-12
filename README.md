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

<p align="center">
  <img width="800" alt="image" src="https://github.com/rukman7/Movie-application/blob/master/images/image2.png">
</p>

#### Upcoming movies page   

> Shows a paginated list of upcoming movies from the TMDB endpoint

<p align="center">
  <img width="800" alt="image" src="https://github.com/rukman7/Movie-application/blob/master/images/image6.png">
</p>

#### Movie information and cast details

> Clicking on a movie card leads to this page

<p align="center">
  <img width="800" alt="image" src="https://github.com/rukman7/Movie-application/blob/master/images/image3.png">
</p>


#### Similar movies

> Shows a list of similar movies based on the current movie selected

<p align="center">
  <img width="800" alt="image" src="https://github.com/rukman7/Movie-application/blob/master/images/image13.png">
</p>

#### Movie reviews

> This page shows reviews of a movie

<p align="center">
  <img width="800" alt="image" src="https://github.com/rukman7/Movie-application/blob/master/images/image4.png">
</p>

#### Write reviews

> A review form that can be used to write reviews

<p align="center">
  <img width="800" alt="image" src="https://github.com/rukman7/Movie-application/blob/master/images/image14.png">
</p>

#### Favourite movies page

> Shows the movies that are marked as favourite

<p align="center">
  <img width="800" alt="image" src="https://github.com/rukman7/Movie-application/blob/master/images/image5.png">
</p>

#### Filtering and sorting

> Allows to filter and sort movies based on a criteria

<p align="center">
  <img width="800" alt="image" src="https://github.com/rukman7/Movie-application/blob/master/images/image8.png">
</p>

#### Storybook

> Used for component development

<p align="center">
  <img width="800" alt="image" src="https://github.com/rukman7/Movie-application/blob/master/images/image15.png">
</p>

 

## Installation

**Clone the repo:**

```bash
git clone https://github.com/rukman7/Movie-application.git
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
