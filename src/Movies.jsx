import movies from "./movies.json"
import React from 'react';
import  MovieCard  from "./MovieCard";
import styles from "./MoviesGrid.module.css";


const Movies = () => {
    console.log(movies)
    console.log(styles)
    return (
        

       <ul className={styles.moviesGrid}>
        {movies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie}/>
        ))}
       </ul>
    );
};

export default Movies;