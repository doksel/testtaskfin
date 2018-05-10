const deleteButton = document.querySelector(".delete");
deleteButton.addEventListener('click', deleteMovie);

function deleteMovie(event){
    event.preventDefault();
    // let id = this.getAttribute('data-movie-id');
    let id = this.dataset.movieId;
    let deleteMovie=document.querySelector(`[data-movie-id=${id}]`);
    
    console.log(deleteMovie);
    console.log(this);
    console.log(id);
    
    // movies.delete(deleteMovie);
    // let serialMovies = JSON.stringify(movies);
    // localStorage.setItem('movies', serialMovies);

    // // localStorage.removeItem('movies'[this.getAttribute('data-name')]);
    // elem.remove();
}