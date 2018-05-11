function deleteMovie(event){
    event.preventDefault();
    let id = this.getAttribute('data-movie-id');

    for(let i=0; i<movies.length;i++){
        if(movies[i].id == id){
            const indexMovie = movies.indexOf(movies[i]);
            movies.splice(indexMovie, 1);
        }
    }
    let serialMovies = JSON.stringify(movies);
    localStorage.setItem('movies', serialMovies);
    
    start();
}