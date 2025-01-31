import React, {useState} from 'react';

//Question 2 Task 1
const MoviesList = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: 'Beetlejuice', genre: 'Comedy Horror', description: 'A dark fantasy comedy horror following a recently deceased couple as they navigate the afterlife and sharing their home with the Deetzes.' },
        { id: 2, title: 'Midsommar', genre: 'Horror', description: 'A group of college students travel to Sweden to attend a pagan festival that occurs once every 90 years.' },
         { id: 3, title: 'House of 1000 Corpses', genre: 'Comedy Horror', description: 'Two young couples on a roadtrip to find a local legend known as Dr. Satan are set upon by a bizarre family of psychos.' },
    
    ]);

    const [showAll, setShowAll] = useState(true);


    //Question 2 Task 2
    const toggleDetails = (id) => {
        setMovies(movies.map(movie => 
            movie.id === id ? { ...movie, showDetails: !movie.showDetails } : movie
        ));
    };
    

    //Question 2 Task 3
    const removeMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };


    //Question 2 Task 4
    const toggleView = () => {
        setShowAll(!showAll);
    };

    const filteredMovies = showAll ? movies : movies.filter(movie => movie.genre === 'Comedy Horror');

    return (
        <div>
            <button onClick={toggleView}>
                {showAll ? 'Show Comedy Horror Movies Only' : 'Show All Movies'}
            </button>
            
            <ul>
                {filteredMovies.map(movie => (
                    <li key={movie.id}>
                        <h3 onClick={() => toggleDetails(movie.id)}>{movie.title}</h3>
                        {movie.showDetails && <p>{movie.description}</p>}
                        <button onClick={() => removeMovie(movie.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;


