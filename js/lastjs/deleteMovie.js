const deleteButton = doc.querySelector(".delete");
deleteButton.addEventListener('click', deleteMovie);

function deleteMovie(event){
    event.preventDefault();
    let id = this.getAttribute('data-movie-id');
    let movie=doc.querySelector(`[data-movie-id="${id}"]`);
    
    console.log(movie);
    console.log(this);
    console.log(id);
    console.log(movies);
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